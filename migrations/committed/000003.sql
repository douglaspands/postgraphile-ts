--! Previous: sha1:d1e90570e70a7faffe9e76aa3b355a728e989d93
--! Hash: sha1:5bec0349d428f47f7840dac10f4af0cf4c4af711

-- undo
delete from app_public.user where username = 'user_01';
delete from app_public.user where username = 'user_02';
delete from app_public.role where name = 'admin_group';
delete from app_public.role where name = 'read_group';
delete from	app_public.person where first_name = 'User' and last_name = 'Zero One' and age = 1;
delete from	app_public.person where first_name = 'User' and last_name = 'Zero Two' and age = 2;

-- redo
insert into app_public.role (name, description)
values ('admin_group', 'Admin Group');
insert into app_public.role (name, description)
values ('read_group', 'Read Group');

insert into app_public.person (first_name, last_name, age)
values ('User', 'Zero One', 1);
insert into app_public.person (first_name, last_name, age)
values ('User', 'Zero Two', 2);

insert into	app_public.user
(username, password, person_id, role_id)
(select 'user_01', app_public.crypt('123456', app_public.gen_salt('md5')), p.id, r.id
 from app_public.person as p, app_public.role as r
 where p.first_name = 'User' and p.last_name = 'Zero One' and p.age = 1 and r.name = 'admin_group');
insert into	app_public.user
(username, password, person_id, role_id)
(select 'user_02', app_public.crypt('123456', app_public.gen_salt('md5')), p.id, r.id
 from app_public.person as p, app_public.role as r
 where p.first_name = 'User' and p.last_name = 'Zero Two' and p.age = 2 and r.name = 'read_group');
