// lib/supabaseServer.ts
import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY');

// export const supabaseServer = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY
// );

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: { id: string; username: string; created_at: string };
        Insert: { username: string; created_at?: string };
        Update: { username?: string };
      };
    };
  };
};

// /**
//  * Supabase Server Client
//  * Uses service role key for server-side operations
//  * Should NEVER be used in client components
//  */

// import { createClient } from '@supabase/supabase-js';

// if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
//   throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
// }

// if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
//   throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY');
// }

export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// export type Database = {
//   public: {
//     Tables: {
//       admin_users: {
//         Row: {
//           id: string;
//           username: string;
//           password_hash: string;
//           created_at: string;
//         };
//         Insert: {
//           id?: string;
//           username: string;
//           password_hash: string;
//           created_at?: string;
//         };
//         Update: {
//           id?: string;
//           username?: string;
//           password_hash?: string;
//           created_at?: string;
//         };
//       };
//       sales_reps: {
//         Row: {
//           id: string;
//           name: string;
//           rep_id: string;
//           created_at: string;
//         };
//         Insert: {
//           id?: string;
//           name: string;
//           rep_id: string;
//           created_at?: string;
//         };
//         Update: {
//           id?: string;
//           name?: string;
//           rep_id?: string;
//           created_at?: string;
//         };
//       };
//       bookings: {
//         Row: {
//           id: string;
//           name: string;
//           address: string;
//           service_date: string;
//           service_location: string;
//           email: string;
//           sales_rep_id: string;
//           created_at: string;
//         };
//         Insert: {
//           id?: string;
//           name: string;
//           address: string;
//           service_date: string;
//           service_location: string;
//           email: string;
//           sales_rep_id: string;
//           created_at?: string;
//         };
//         Update: {
//           id?: string;
//           name?: string;
//           address?: string;
//           service_date?: string;
//           service_location?: string;
//           email?: string;
//           sales_rep_id?: string;
//           created_at?: string;
//         };
//       };
//     };
//   };
// };