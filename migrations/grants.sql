-- permissions
GRANT USAGE ON SCHEMA app_public to read_role, write_role;
GRANT SELECT ON ALL TABLES IN SCHEMA app_public TO read_role;
GRANT ALL ON TYPE app_public.jwt_token TO read_role, write_role;
GRANT ALL ON ALL TABLES IN SCHEMA app_public TO write_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA app_public TO read_role, write_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA app_public TO read_role, write_role;
