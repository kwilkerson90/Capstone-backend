CREATE DATABASE yumappusers;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email varchar(250),
    password varchar(250)
);