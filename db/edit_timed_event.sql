UPDATE timed_events
SET time = $1, name = $2
WHERE user_id = $3 AND id = $4
RETURNING timed_events