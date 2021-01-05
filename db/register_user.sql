INSERT INTO users (username, email, hash)
VALUES ($1, $2, $3)
returning id, username, email