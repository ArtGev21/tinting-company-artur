/*
  # Fix Admin Authentication System

  1. Schema Changes
    - Drop existing `admin_users` table
    - Create `admin_roles` table linked to Supabase auth.users
    - Update RLS policies for proper permissions

  2. Security
    - Enable RLS on admin_roles table
    - Add policies for service role and authenticated users
    - Remove password management from custom tables

  3. Integration
    - Link admin privileges to Supabase authenticated users
    - Remove custom authentication logic
*/

-- Drop existing admin_users table
DROP TABLE IF EXISTS admin_users CASCADE;

-- Create admin_roles table linked to Supabase auth.users
CREATE TABLE IF NOT EXISTS admin_roles (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role text DEFAULT 'admin' NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE admin_roles ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_roles
CREATE POLICY "Service role can manage admin roles"
  ON admin_roles
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Users can read own admin role"
  ON admin_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_admin_roles_user_id ON admin_roles(user_id);