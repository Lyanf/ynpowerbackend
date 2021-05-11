create table metadata
(
	id serial not null,
	area text not null,
	kind text not null,
	grain text not null
);

alter table metadata owner to postgres;

