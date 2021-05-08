create table person
(
    id       serial not null,
    username text   not null,
    password text   not null
);

alter table person
    owner to postgres;

INSERT INTO person (id, username, password) VALUES (1, 'admin', 'admin');
INSERT INTO person (id, username, password) VALUES (2, 'test', 'test');