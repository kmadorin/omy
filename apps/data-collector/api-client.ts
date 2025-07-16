import axios from 'axios';
import { StakeKitYieldResponse } from './types';

export class ApiClient {
  private baseUrl: string;
  private apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.apiKey = apiKey;
    console.log('ApiClient initialized with baseUrl:', this.baseUrl);
  }

  async fetchYields(page: number = 1, limit: number = 100): Promise<StakeKitYieldResponse> {
    const url = `${this.baseUrl}/v2/yields?page=${page}&limit=${limit}`;
    console.log('\n=== API Request Debug ===');
    console.log('🌐 Requesting URL:', url);

    try {
      const response = await axios.get<StakeKitYieldResponse>(url, {
        headers: {
          'X-API-KEY': this.apiKey
        }
      });
      console.log('✅ Response status:', response.status);
      return response.data;
    } catch (error: any) {
      console.log('\n❌ API Request Failed:');
      console.log('URL:', url);
      console.log('Status:', error.response?.status);
      console.log('Status Text:', error.response?.statusText);
      console.log('Error Data:', error.response?.data);
      console.log('======================\n');
      
      throw new Error(`Failed to fetch yields: ${error.message}`);
    }
  }
} 