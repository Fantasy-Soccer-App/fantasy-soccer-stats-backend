-- db/seed.sql
\c stats_dev;

-- Add unique constraint if not already added
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'unique_player'
    ) THEN
        ALTER TABLE stats ADD CONSTRAINT unique_player UNIQUE (name, position);
    END IF;
END $$;

-- Insert data, skipping existing entries
INSERT INTO stats (name, position, mins_played, assists, goals, perc_score, rating) VALUES
('Cristiano Ronaldo', 'Forward', 1423, 8, 15, 85.60, 8.30),
('Kevin De Bruyne', 'Mid-Field', 1355, 12, 10, 78.40, 8.15),
('Virgil van Dijk', 'Defender', 1600, 2, 3, 74.20, 8.00),
('Kylian Mbappé', 'Forward', 1502, 14, 17, 88.90, 8.45),
('Sergio Ramos', 'Defender', 1300, 3, 6, 76.10, 7.90),
('Robert Lewandowski', 'Forward', 1442, 9, 20, 87.50, 8.40),
('Neymar Jr', 'Forward', 1401, 11, 12, 80.30, 8.10),
('Joshua Kimmich', 'Mid-Field', 1550, 10, 7, 79.80, 8.20),
('Luka Modric', 'Mid-Field', 1403, 8, 5, 75.40, 7.85)
ON CONFLICT (name, position) DO NOTHING;
