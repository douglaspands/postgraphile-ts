--! Previous: sha1:aa18b616b927077d2f48c69f790f1633d9ce4dde
--! Hash: sha1:d1e90570e70a7faffe9e76aa3b355a728e989d93

-- undo
DROP TYPE IF EXISTS app_public.jwt_token CASCADE;
DROP TABLE IF EXISTS app_public.user CASCADE;
DROP TABLE IF EXISTS app_public.role CASCADE;
DROP TABLE IF EXISTS app_public.person CASCADE;

-- redo
CREATE TABLE app_public.role (
  id serial PRIMARY KEY,
  name text NOT NULL unique,
  description text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

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
  person_id integer NOT NULL REFERENCES app_public.person ON DELETE CASCADE,
  role_id integer NOT NULL REFERENCES app_public.role ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

create type app_public.jwt_token as (
  role text,
  exp float,
  iat integer,
  person_id integer,
  username varchar
);
