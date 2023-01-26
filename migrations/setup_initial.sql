-- undo
DROP ROLE user_role;

-- redo
CREATE ROLE user_role;
GRANT user_role to app_user;