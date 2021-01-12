DELETE FROM timed_events
WHERE user_id = $1 AND id = $2
RETURNING *