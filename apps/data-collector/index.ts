import * as dotenv from 'dotenv';
import { resolve } from 'path';
import cron from 'node-cron';
import { ApiClient } from './api-client';
import { DatabaseService } from './db-service';
import { YieldCollector } from './collector';
import { z } from 'zod';

// Load .env from project root
dotenv.config({ path: resolve(__dirname, '../.env') });

const envSchema = z.object({
  API_BASE_URL: z.string().url().default('https://api.stakek.it'),
  DATABASE_URL: z.string().url(),
  STAKEKIT_API_KEY: z.string().min(1)
});

// Validate environment variables
const env = envSchema.safeParse(process.env);
if (!env.success) {
  console.error('Environment validation failed:', env.error.format());
  process.exit(1);
}

const apiClient = new ApiClient(env.data.API_BASE_URL, env.data.STAKEKIT_API_KEY);
const dbService = new DatabaseService();
const collector = new YieldCollector(apiClient, dbService);

// Run every 10 minutes
cron.schedule('*/10 * * * *', async () => {
  try {
    await collector.collect();
  } catch (error) {
    console.error('Scheduled collection failed:', error);
  }
});

// Initial collection
collector.collect().catch(error => {
  console.error('Initial collection failed:', error);
  process.exit(1);
});

export class DataCollector {
  private apiClient: ApiClient;
  private dbService: DatabaseService;

  constructor(apiBaseUrl: string, apiKey: string) {
    this.apiClient = new ApiClient(apiBaseUrl, apiKey);
    this.dbService = new DatabaseService();
  }

  async collectData(): Promise<void> {
    try {
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await this.apiClient.fetchYields(page);
        await this.dbService.upsertYields(response.data);
        
        hasMore = response.hasNextPage;
        page += 1;
      }
    } catch (error: any) {
      console.error('Error collecting data:', error.message);
      throw error;
    } finally {
      await this.dbService.disconnect();
    }
  }
}

// Start the collector if this file is run directly
if (require.main === module) {
  const DEFAULT_API_BASE_URL = process.env.API_BASE_URL || 'https://api.stakek.it';
  const API_KEY = process.env.STAKEKIT_API_KEY;
  
  if (!API_KEY) {
    console.error('STAKEKIT_API_KEY environment variable is required');
    process.exit(1);
  }
  
  const collectorInstance = new DataCollector(DEFAULT_API_BASE_URL, API_KEY);
  
  collectorInstance.collectData()
    .then(() => console.log('Data collection completed'))
    .catch((error) => {
      console.error('Data collection failed:', error);
      process.exit(1);
    });
} 