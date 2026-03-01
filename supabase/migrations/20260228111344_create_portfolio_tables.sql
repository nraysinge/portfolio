/*
  # Create Portfolio Tables

  1. New Tables
    - `projects` - Store portfolio projects
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `technologies` (text array)
      - `github_url` (text, optional)
      - `live_url` (text, optional)
      - `image_url` (text, optional)
      - `order` (integer)
      - `created_at` (timestamp)
    
    - `contact_messages` - Store contact form submissions
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Allow public read access to projects
    - Allow public insert access to contact_messages
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  technologies text[] NOT NULL DEFAULT ARRAY[]::text[],
  github_url text,
  live_url text,
  image_url text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit contact message"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

INSERT INTO projects (title, description, technologies, live_url, github_url, "order") VALUES
  ('Local Development Repository', 'Local development practice repository for HTML/CSS experiments. Building foundational web development skills with practical exercises.', ARRAY['HTML', 'CSS', 'Git'], 'https://nraysinge.github.io/nraysinge/', 'https://github.com/nraysinge', 1),
  ('Web Calculator', 'Interactive web calculator with HTML, CSS, and JavaScript. Features responsive design and arithmetic operations for seamless user experience.', ARRAY['HTML', 'CSS', 'JavaScript'], 'https://nraysinge.github.io/Web-Calculator/', 'https://github.com/nraysinge', 2);
