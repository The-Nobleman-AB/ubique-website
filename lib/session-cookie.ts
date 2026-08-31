/**
 * The session cookie name, on its own so middleware can import it without
 * pulling in the database client (which can't run on the Edge runtime).
 */
export const SESSION_COOKIE = "ubq_admin_session";
