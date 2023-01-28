--! Previous: sha1:7e30247945e701ffa3cbabd1e281f42db817f99d
--! Hash: sha1:7823f0c7ff384be2c59166d6849baa1f10720a51

-- undo
DROP TABLE IF EXISTS app_private.user CASCADE;
DROP TABLE IF EXISTS app_private.person CASCADE;
DROP TYPE IF EXISTS app_public.jwt_token CASCADE;

-- redo
CREATE TABLE app_public.person (
  id serial PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  age integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE app_public.user (
  id serial PRIMARY KEY,
  username text NOT NULL unique,
  password text NOT NULL,
  name text NOT NULL,
  person_id integer NOT NULL REFERENCES app_public.person ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

create type app_public.jwt_token as (
  role text,
  exp integer,
  person_id integer,
  username varchar
);
