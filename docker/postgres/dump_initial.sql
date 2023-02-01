-- users
CREATE USER app_user WITH PASSWORD '7mF0uXv82qy8' INHERIT;

-- roles
CREATE ROLE read_role WITH NOINHERIT;
CREATE ROLE write_role WITH NOINHERIT;

-- groups
CREATE ROLE admin_group WITH INHERIT;
CREATE ROLE read_group WITH INHERIT;

-- grants
GRANT read_role, write_role to admin_group;
GRANT read_role to read_group;
GRANT admin_group to app_user;

-- databases
CREATE DATABASE postgraphile_shadow WITH OWNER app_user ENCODING UTF8 TABLESPACE pg_default;
CREATE DATABASE postgraphile WITH OWNER app_user ENCODING UTF8 TABLESPACE pg_default;