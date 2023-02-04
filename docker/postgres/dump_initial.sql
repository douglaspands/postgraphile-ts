-- users
CREATE ROLE super_user WITH LOGIN PASSWORD 'lkja0xKHJK9u' SUPERUSER;
CREATE USER app_user WITH PASSWORD '7mF0uXv82qy8' NOINHERIT;

-- databases
CREATE DATABASE postgraphile WITH OWNER app_user ENCODING UTF8 TABLESPACE pg_default;
CREATE DATABASE postgraphile_shadow WITH OWNER app_user ENCODING UTF8 TABLESPACE pg_default;

-- roles
CREATE ROLE read_role;
CREATE ROLE write_role;

-- grants
GRANT read_role, write_role to app_user;
