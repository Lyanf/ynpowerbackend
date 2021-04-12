create table metadata (
   id SERIAL,
   area text NOT NULL,
   kind text NOT NULL,
   grain text NOT NULL
);

create table person(
   id SERIAL,
   username text NOT NULL,
   password text NOT NULL
);

create table electric_data_test (
   id BIGSERIAL,
   datatime timestamp NOT NULL,
   dataname text NOT NULL,
   datavalue float NOT NULL, 
   metadataid integer NOT NULL
);
create table program(
   id BIGSERIAL,
   tag text NOT NULL,
   content text NOT NULL,
   kind text NOT NULL
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
