-- tables permission
GRANT ALL ON ALL TABLES IN SCHEMA app_public TO user_role;
GRANT ALL ON ALL TABLES IN SCHEMA app_private TO user_role;
GRANT ALL ON ALL TABLES IN SCHEMA app_public TO app_user;
GRANT ALL ON ALL TABLES IN SCHEMA app_private TO app_user;

-- sequencies permission
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA app_public TO user_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA app_private TO user_role;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA app_public TO user_role;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA app_public TO app_user;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA app_private TO user_role;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA app_private TO app_user;
