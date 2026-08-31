/** Shape returned by admin server actions to their forms. */
export type ActionState = {
  error?: string;
  fieldErrors?: Record<string, string>;
};
