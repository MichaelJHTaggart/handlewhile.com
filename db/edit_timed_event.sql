UPDATE timed_events
SET name = $1
WHERE user_id = $2 AND id = $3
RETURNING timed_events