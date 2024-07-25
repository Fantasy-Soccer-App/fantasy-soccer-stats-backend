-- db/seed.sql
\c stats_dev;

-- Delete current table and create a new one with updated list
DROP TABLE IF EXISTS stats;

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

-- Insert updated data
INSERT INTO stats (name, position, mins_played, assists, goals, perc_score, rating) VALUES
('Lionel Messi', 'Forward', 1400, 10, 20, 85.00, 8.50),
('Cristiano Ronaldo', 'Forward', 1423, 8, 15, 85.60, 8.30),
('Kevin De Bruyne', 'Mid-Field', 1355, 12, 10, 78.40, 8.15),
('Virgil van Dijk', 'Defender', 1600, 2, 3, 74.20, 8.00),
('Kylian Mbappé', 'Forward', 1502, 14, 17, 88.90, 8.45),
('Sergio Ramos', 'Defender', 1300, 3, 6, 76.10, 7.90),
('Robert Lewandowski', 'Forward', 1442, 9, 20, 87.50, 8.40),
('Neymar Jr', 'Forward', 1401, 11, 12, 80.30, 8.10),
('Joshua Kimmich', 'Mid-Field', 1550, 10, 7, 79.80, 8.20),
('Luka Modric', 'Mid-Field', 1403, 8, 5, 75.40, 7.85),
('Jude Bellingham', 'Mid-Field', 1380, 6, 8, 76.50, 8.00),
('Erling Haaland', 'Forward', 1200, 10, 22, 90.00, 8.60),
('Vinícius Júnior', 'Forward', 1250, 15, 12, 84.00, 8.30),
('Harry Kane', 'Forward', 1405, 9, 18, 85.80, 8.20),
('Mohamed Salah', 'Forward', 1450, 11, 16, 82.50, 8.00),
('Rodri', 'Mid-Field', 1400, 7, 4, 72.00, 7.70),
('Antoine Griezmann', 'Forward', 1300, 10, 14, 80.40, 8.10),
('Son Heung-min', 'Forward', 1305, 12, 13, 83.20, 8.15),
('Phil Foden', 'Mid-Field', 1200, 9, 6, 77.80, 8.00),
('Toni Kroos', 'Mid-Field', 1450, 14, 3, 74.60, 7.90),
('Bukayo Saka', 'Forward', 1255, 8, 9, 78.00, 7.85),
('Eden Hazard', 'Forward', 1100, 7, 8, 75.20, 7.80),
('Rúben Dias', 'Defender', 1350, 1, 2, 70.50, 7.60),
('Paul Pogba', 'Mid-Field', 1300, 8, 7, 76.00, 7.90),
('Bruno Fernandes', 'Mid-Field', 1550, 12, 9, 78.30, 8.00),
('Bernardo Silva', 'Mid-Field', 1405, 10, 6, 77.00, 7.85),
('Luis Suárez', 'Forward', 1200, 11, 15, 81.70, 8.10),
('Frenkie de Jong', 'Mid-Field', 1250, 6, 4, 74.50, 7.70),
('Andrés Iniesta', 'Mid-Field', 1150, 5, 2, 72.00, 7.50),
('Rafael Leão', 'Forward', 1050, 9, 10, 79.00, 7.90);