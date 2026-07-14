export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      project_enquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          service:
            | "web3-development"
            | "ai-development"
            | "full-stack-development"
            | "creative-growth"
            | "other";
          estimated_budget:
            | "under-5000"
            | "5000-10000"
            | "10000-25000"
            | "25000-50000"
            | "50000-plus"
            | "not-sure"
            | null;
          preferred_timeline:
            | "immediately"
            | "within-1-month"
            | "1-3-months"
            | "3-6-months"
            | "flexible"
            | null;
          message: string;
          status:
            | "new"
            | "contacted"
            | "qualified"
            | "proposal-sent"
            | "won"
            | "lost"
            | "spam";
          source: string;
          ip_address: string | null;
          user_agent: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          service:
            | "web3-development"
            | "ai-development"
            | "full-stack-development"
            | "creative-growth"
            | "other";
          estimated_budget?:
            | "under-5000"
            | "5000-10000"
            | "10000-25000"
            | "25000-50000"
            | "50000-plus"
            | "not-sure"
            | null;
          preferred_timeline?:
            | "immediately"
            | "within-1-month"
            | "1-3-months"
            | "3-6-months"
            | "flexible"
            | null;
          message: string;
          status?:
            | "new"
            | "contacted"
            | "qualified"
            | "proposal-sent"
            | "won"
            | "lost"
            | "spam";
          source?: string;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["project_enquiries"]["Insert"]
        >;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};