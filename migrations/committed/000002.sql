--! Previous: sha1:a9b27cdf43b92e8bdea17cad0aad57a5055873ad
--! Hash: sha1:f09fee2e697746660f8580e88a58d877deeb9f1c

-- undo
DROP FUNCTION IF EXISTS app_public.authenticate CASCADE;
DROP TYPE IF EXISTS app_public.jwt_token CASCADE;
DROP TABLE IF EXISTS app_private.user CASCADE;
DROP TABLE IF EXISTS app_private.person CASCADE;

-- redo
CREATE TABLE app_private.person (
  id serial PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  age integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE app_private.user (
  id serial PRIMARY KEY,
  username text NOT NULL unique,
  password text NOT NULL,
  name text NOT NULL,
  person_id integer NOT NULL REFERENCES app_private.person ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

create type app_public.jwt_token as (
  role text,
  exp integer,
  person_id integer,
  username varchar
);

create function app_public.authenticate(
  username text,
  password text
) returns app_public.jwt_token as $$
declare
  account app_private.user;
begin
  select a.* into account
    from app_private.user as a
    where a.username = authenticate.username;
  if account.password = crypt(authenticate.password, account.password) then
    return (
      'person_role',
      extract(epoch from now() + interval '7 days'),
      account.person_id,
      account.username
    )::app_public.jwt_token;
  else
    return null;
  end if;
end;
$$ language plpgsql strict security definer;
