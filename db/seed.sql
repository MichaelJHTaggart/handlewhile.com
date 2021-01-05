DROP TABLE users, timed_events, tier;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR (200) NOT NULL UNIQUE,
  email VARCHAR (150) NOT NULL UNIQUE,
  hash text NOT NULL,
  tier_id INT NOT NULL DEFAULT 1
);

CREATE TABLE timed_events (
  id SERIAL PRIMARY KEY,
  time INT,
  name VARCHAR NOT NULL,
  user_id INT
);

CREATE TABLE tier (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  num_events INT
);

ALTER TABLE users ADD FOREIGN KEY (tier_id) REFERENCES tier (id);

ALTER TABLE timed_events ADD FOREIGN KEY (user_id) REFERENCES users (id);

INSERT INTO tier
(name, num_events)
VALUES
('free', 5), ('level 1', 10), ('level 2', 20), ('level 3', 30);

INSERT INTO users
(username, email, hash)
VALUES
('pika','pika@pika.com', 'pika'), ('charzard', 'char@char.com', 'char');

INSERT INTO timed_events
(time, name, user_id)
VALUES
(1, 'what?', 1), (2, 'when?', 1), (3, 'where?', 1), (4, 'how?', 2), (5, 'why?', 2);