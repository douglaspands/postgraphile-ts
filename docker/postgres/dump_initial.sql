CREATE USER app_user WITH PASSWORD '7mF0uXv82qy8' noinherit;
CREATE DATABASE postgraphile_shadow WITH OWNER app_user ENCODING UTF8 TABLESPACE pg_default;
CREATE DATABASE postgraphile WITH OWNER app_user ENCODING UTF8 TABLESPACE pg_default;