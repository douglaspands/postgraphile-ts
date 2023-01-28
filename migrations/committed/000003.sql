--! Previous: sha1:7823f0c7ff384be2c59166d6849baa1f10720a51
--! Hash: sha1:9cc078c4ac5c818542cacebb08b37c074652100b

-- undo
delete from app_public.user where username = 'user_admin';
delete
from
	app_public.person
where
	first_name = 'user'
	and last_name = 'admin'
	and age = 1;

-- redo
insert
	into
	app_public.person (first_name,
	last_name,
	age)
values ('user',
'admin',
1);

insert
	into
	app_public.user
(username,
	"password",
	"name",
	person_id)
select
	'user_admin',
	crypt('12345',
	gen_salt('md5')),
	'user_admin',
	id
from
	app_public.person
where
	first_name = 'user'
	and last_name = 'admin'
	and age = 1;
