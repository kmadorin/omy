import { ApiClient } from './api-client';
import { DatabaseService } from './db-service';
import winston from 'winston';

export class YieldCollector {
  private logger: winston.Logger;

  constructor(
    private apiClient: ApiClient,
    private dbService: DatabaseService,
    isTest = process.env.NODE_ENV === 'test'
  ) {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      silent: isTest,
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
      ]
    });
  }

  async collect(): Promise<void> {
    try {
      this.logger.info('Starting yield collection');
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await this.apiClient.fetchYields(page);
        
        const validatedData = response.data
          .filter(protocol => {
            const isValid = !!protocol;
            if (!isValid) this.logger.warn('Filtered out undefined protocol entry');
            return isValid;
          })
          .map(protocol => {
            if (!protocol.id) {
              this.logger.warn(`Missing ID in protocol: ${JSON.stringify(protocol)}`);
              return { ...protocol, id: 'unknown-id' };
            }
            return protocol;
          });

        this.logger.info(`Processing ${validatedData.length} protocols`);
        await this.dbService.upsertYields(validatedData);
        
        hasMore = response.hasNextPage;
        page += 1;
      }
      this.logger.info(`Successfully collected yields`);
    } catch (error: any) {
      this.logger.error('Error collecting yields:', error.message);
      throw error;
    }
  }
} 