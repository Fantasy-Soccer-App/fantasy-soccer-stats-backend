-- db/schemal.sql
DROP DATABASE IF EXISTS stats_dev;
CREATE DATABASE stats_dev;

\c stats_dev;

DROP TABLE If EXISTS stats;
CREATE TABLE stats (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
position TEXT,
mins_played INTEGER,
assists INTEGER,
goals INTEGER,
perc_score NUMERIC(5, 2),
rating NUMERIC(5, 2)
);

