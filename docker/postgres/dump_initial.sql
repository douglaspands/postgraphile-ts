CREATE USER app_user WITH PASSWORD '7mF0uXv82qy8' INHERIT;
CREATE ROLE user_role WITH NOINHERIT;
GRANT user_role to app_user;
CREATE DATABASE postgraphile_shadow WITH OWNER user_role ENCODING UTF8 TABLESPACE pg_default;
CREATE DATABASE postgraphile WITH OWNER user_role ENCODING UTF8 TABLESPACE pg_default;