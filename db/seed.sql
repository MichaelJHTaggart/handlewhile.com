CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  tier_id INT NOT NULL
);

CREATE TABLE timed_events (
  id SERIAL PRIMARY KEY,
  time INT,
  name VARCHAR NOT NULL UNIQUE,
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
(username, email, password, tier_id)
VALUES
('pika','pika@pika.com', 'pika', 1), ('charzard', 'char@char.com', 'char', 1);

INSERT INTO timed_events
(time, name, user_id)
VALUES
(1, 'what?', 1), (2, 'when?', 1), (3, 'where?', 1), (4, 'how?', 2), (5, 'why?', 2);