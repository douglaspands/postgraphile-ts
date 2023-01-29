--! Previous: sha1:6247ff1297ada82c0fcbf859623f05369176e931
--! Hash: sha1:86d26c2403e8dd98cfc8de7faca3d39061f6cc6f

-- undo
delete from app_public.user where username = 'user_admin';
delete from app_public.role where name = 'user_role';
delete from	app_public.person where first_name = 'user' and last_name = 'admin'	and age = 1;

-- redo
insert into app_public.role (name, description)
values ('user_role', 'admin');

insert into app_public.person (first_name, last_name, age)
values ('user', 'admin', 1);

insert into	app_public.user
(username, password, person_id, role_id)
(select 'user_admin', app_public.crypt('123456', app_public.gen_salt('md5')), p.id, r.id
 from app_public.person as p, app_public.role as r
 where p.first_name = 'user' and p.last_name = 'admin' and p.age = 1 and r.name = 'user_role');
