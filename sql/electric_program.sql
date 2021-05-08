create table program
(
	id bigserial not null,
	tag text not null
		constraint unique_tag
			unique,
	content text not null,
	kind text not null
);

alter table program owner to postgres;