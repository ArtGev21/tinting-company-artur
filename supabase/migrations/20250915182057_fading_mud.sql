/*
  # Complete Admin and Booking System Schema

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password_hash` (text)
      - `created_at` (timestamp)
    - `sales_reps`
      - `id` (uuid, primary key)
      - `name` (text)
      - `rep_id` (text, unique)
      - `created_at` (timestamp)
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text)
      - `address` (text)
      - `service_date` (date)
      - `service_location` (text)
      - `email` (text)
      - `sales_rep_id` (text, foreign key)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
    - Create indexes for performance

  3. Initial Data
    - Create default admin user (username: admin, password: admin123)
*/

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamp DEFAULT now()
);

-- Create sales_reps table
CREATE TABLE IF NOT EXISTS sales_reps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rep_id text UNIQUE NOT NULL,
  created_at timestamp DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  service_date date NOT NULL,
  service_location text NOT NULL,
  email text NOT NULL,
  sales_rep_id text NOT NULL REFERENCES sales_reps(rep_id),
  created_at timestamp DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales_reps ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_users (service role only)
CREATE POLICY "Service role can manage admin users"
  ON admin_users
  FOR ALL
  TO service_role
  USING (true);

-- Create policies for sales_reps (service role only)
CREATE POLICY "Service role can manage sales reps"
  ON sales_reps
  FOR ALL
  TO service_role
  USING (true);

-- Create policies for bookings (service role only)
CREATE POLICY "Service role can manage bookings"
  ON bookings
  FOR ALL
  TO service_role
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_sales_reps_rep_id ON sales_reps(rep_id);
CREATE INDEX IF NOT EXISTS idx_bookings_sales_rep_id ON bookings(sales_rep_id);
CREATE INDEX IF NOT EXISTS idx_bookings_service_date ON bookings(service_date);
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);

-- Insert default admin user (password: admin123)
-- Hash generated with bcrypt, 12 rounds
INSERT INTO admin_users (username, password_hash) 
VALUES ('admin', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VJWZp/K/K')
ON CONFLICT (username) DO NOTHING;