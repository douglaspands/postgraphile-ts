-- users
CREATE USER app_user WITH PASSWORD '7mF0uXv82qy8' INHERIT;

-- roles
CREATE ROLE read_role WITH NOINHERIT;
CREATE ROLE write_role WITH NOINHERIT;
CREATE ROLE admin_role WITH NOINHERIT CREATEROLE;

-- groups
CREATE ROLE admin_group WITH INHERIT;
CREATE ROLE read_group WITH INHERIT;
CREATE ROLE write_group WITH INHERIT;

-- grants
GRANT admin_role, read_role, write_role to admin_group;
GRANT read_role to read_group;
GRANT write_role to write_group;

-- databases
CREATE DATABASE postgraphile WITH OWNER app_user ENCODING UTF8 TABLESPACE pg_default;
CREATE DATABASE postgraphile_shadow WITH OWNER app_user ENCODING UTF8 TABLESPACE pg_default;

-- grant database
GRANT ALL ON DATABASE postgraphile TO admin_role;
GRANT ALL ON DATABASE postgraphile_shadow TO admin_role;
