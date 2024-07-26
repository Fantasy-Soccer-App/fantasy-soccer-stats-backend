-- db/schemal.sql
DROP DATABASE IF EXISTS players_dev;
CREATE DATABASE players_dev;

\c players_dev;

DROP TABLE IF EXISTS players;
CREATE TABLE players (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
position TEXT,
mins_played INTEGER,
assists INTEGER,
goals INTEGER,
perc_score NUMERIC(5, 2),
rating NUMERIC(5, 2)
);

