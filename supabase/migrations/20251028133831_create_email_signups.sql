/*
  # Email Signups Table for Lovoya Landing Page

  1. New Tables
    - `email_signups`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `email` (text, unique, not null) - Email address of the subscriber
      - `created_at` (timestamptz) - Timestamp when the signup occurred
      - `ip_address` (text, nullable) - Optional IP address for analytics
      - `user_agent` (text, nullable) - Optional user agent for analytics

  2. Security
    - Enable RLS on `email_signups` table
    - Add policy for inserting email signups (public access for signups)
    - No read access for public users (admin-only)

  3. Indexes
    - Index on email for quick duplicate checks
    - Index on created_at for analytics queries
*/

CREATE TABLE IF NOT EXISTS email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert email signup"
  ON email_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_email_signups_email ON email_signups(email);
CREATE INDEX IF NOT EXISTS idx_email_signups_created_at ON email_signups(created_at DESC);