/*
# Create partnership_inquiries table

1. Purpose
   Stores submissions from the two partnership forms on the Partnerships
   page: Campus Connect (engineering colleges) and Industry Connect
   (semiconductor companies / recruiters). Each row is tagged with a
   `partner_type` of either 'campus' or 'industry' so the two forms can
   share one table while staying clearly distinguishable.

2. New Tables
   - `partnership_inquiries`
     - `id`              uuid, primary key
     - `partner_type`    text, NOT NULL — 'campus' | 'industry'
     - `name`            text, NOT NULL — submitter's full name
     - `email`           text, NOT NULL — submitter's email
     - `phone`           text — submitter's phone (optional)
     - `organization`    text, NOT NULL — college or company name
     - `designation`     text — role/title of the submitter
     - `location`        text — city / region (campus) or company HQ (industry)
     - `student_count`   text — approximate student count (campus only)
     - `industry_size`   text — company size band (industry only)
     - `interests`       text[] — selected areas of interest (checkboxes)
     - `message`         text — free-form details
     - `created_at`      timestamptz, default now()

3. Security
   - Enable RLS on `partnership_inquiries`.
   - This is a no-auth public site (no sign-in screen), so the anon-key
     frontend must be able to insert its own submissions. Reads are not
     needed by the frontend, so SELECT is restricted to the service role
     (no anon SELECT policy) to keep submissions private.
   - INSERT allowed for anon + authenticated with no ownership check
     (public submission form).
   - No UPDATE / DELETE policies — submissions are immutable from the
     client; management happens server-side via the service role.

4. Notes
   - `interests` is a text array so the frontend can store the set of
     checked interest options directly.
   - Columns specific to one form (`student_count`, `industry_size`) are
     nullable and simply left empty by the other form.
*/

CREATE TABLE IF NOT EXISTS partnership_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_type text NOT NULL CHECK (partner_type IN ('campus', 'industry')),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  organization text NOT NULL,
  designation text,
  location text,
  student_count text,
  industry_size text,
  interests text[] NOT NULL DEFAULT '{}',
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE partnership_inquiries ENABLE ROW LEVEL SECURITY;

-- INSERT: public submission form (no sign-in on this site)
DROP POLICY IF EXISTS "anon_insert_partnership_inquiries" ON partnership_inquiries;
CREATE POLICY "anon_insert_partnership_inquiries"
ON partnership_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT / UPDATE / DELETE policies for anon: submissions are private
-- and managed server-side with the service role key.
