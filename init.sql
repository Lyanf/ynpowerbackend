create table metadata
(
    id    serial not null,
    area  text   not null,
    kind  text   not null,
    grain text   not null
);

create table person
(
    id       serial not null,
    username text   not null,
    password text   not null
);

create table electric_data_test
(
    id         bigserial        not null,
    datatime   timestamp        not null,
    dataname   text             not null,
    datavalue  double precision not null,
    metadataid integer          not null,
    constraint unique_cons
        unique (metadataid, dataname, datatime)
);

create table program
(
    id      bigserial not null,
    tag     text      not null
        constraint unique_tag
            unique,
    content text      not null,
    kind    text      not null
);

create table brand_new_metadata
(
    major_category text,
    minor_category text
);

CREATE UNIQUE INDEX unique_cons
on electric_data_test (metadataid, dataname, datatime);

ALTER TABLE electric_data_test 
ADD CONSTRAINT unique_cons 
UNIQUE USING INDEX unique_cons;


CREATE UNIQUE INDEX unique_tag
on program(tag);

ALTER TABLE program
ADD CONSTRAINT unique_tag 
UNIQUE USING INDEX unique_tag;
