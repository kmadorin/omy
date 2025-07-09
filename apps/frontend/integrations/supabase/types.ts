export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      portfolio_position: {
        Row: {
          amount: number
          category: string
          current_apy: number
          entry_date: string
          entry_tx_hash: string | null
          exit_tx_hash: string | null
          id: string
          is_active: boolean
          last_modified: string
          token_address: string | null
          token_symbol: string
          yield_opportunity_id: string
        }
        Insert: {
          amount: number
          category: string
          current_apy: number
          entry_date: string
          entry_tx_hash?: string | null
          exit_tx_hash?: string | null
          id: string
          is_active?: boolean
          last_modified: string
          token_address?: string | null
          token_symbol: string
          yield_opportunity_id: string
        }
        Update: {
          amount?: number
          category?: string
          current_apy?: number
          entry_date?: string
          entry_tx_hash?: string | null
          exit_tx_hash?: string | null
          id?: string
          is_active?: boolean
          last_modified?: string
          token_address?: string | null
          token_symbol?: string
          yield_opportunity_id?: string
        }
        Relationships: []
      }
      portfolio_rebalance: {
        Row: {
          amount: number
          annual_income_change: number
          executed_at: string
          from_apy: number
          from_position_id: string
          gas_cost: number
          id: string
          to_apy: number
          to_position_id: string
        }
        Insert: {
          amount: number
          annual_income_change: number
          executed_at: string
          from_apy: number
          from_position_id: string
          gas_cost: number
          id: string
          to_apy: number
          to_position_id: string
        }
        Update: {
          amount?: number
          annual_income_change?: number
          executed_at?: string
          from_apy?: number
          from_position_id?: string
          gas_cost?: number
          id?: string
          to_apy?: number
          to_position_id?: string
        }
        Relationships: []
      }
      YieldOpportunity: {
        Row: {
          apy: number
          asset: string
          can_enter: boolean
          can_exit: boolean
          content: string | null
          cooldown_days: number | null
          created_at: string
          id: string
          is_available: boolean
          metadata_type: string
          name: string
          protocol: string
          provider_id: string
          provider_name: string
          reward_type: string
          token_address: string | null
          token_network: string
          token_symbol: string
          tvl: number
          updated_at: string
          warmup_days: number | null
          withdraw_days: number | null
        }
        Insert: {
          apy: number
          asset?: string
          can_enter?: boolean
          can_exit?: boolean
          content?: string | null
          cooldown_days?: number | null
          created_at?: string
          id: string
          is_available?: boolean
          metadata_type: string
          name: string
          protocol?: string
          provider_id: string
          provider_name: string
          reward_type: string
          token_address?: string | null
          token_network: string
          token_symbol: string
          tvl?: number
          updated_at: string
          warmup_days?: number | null
          withdraw_days?: number | null
        }
        Update: {
          apy?: number
          asset?: string
          can_enter?: boolean
          can_exit?: boolean
          content?: string | null
          cooldown_days?: number | null
          created_at?: string
          id?: string
          is_available?: boolean
          metadata_type?: string
          name?: string
          protocol?: string
          provider_id?: string
          provider_name?: string
          reward_type?: string
          token_address?: string | null
          token_network?: string
          token_symbol?: string
          tvl?: number
          updated_at?: string
          warmup_days?: number | null
          withdraw_days?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      execute_query: {
        Args: {
          sql_query: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never