create table electric_data_test
(
	id bigserial not null,
	datatime timestamp not null,
	dataname text not null,
	datavalue double precision not null,
	metadataid integer not null,
	constraint unique_cons
		unique (metadataid, dataname, datatime)
);

alter table electric_data_test owner to postgres;