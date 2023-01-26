-- tables permission
GRANT ALL ON ALL TABLES IN SCHEMA app_public TO user_role;
GRANT ALL ON ALL TABLES IN SCHEMA app_private TO user_role;

-- sequencies permission
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA app_public TO user_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA app_private TO user_role;
