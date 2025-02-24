import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm CG, Charlie's AI assistant.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
  
  {"question": "Who is Charlie?",
    "answer": "Charlie is from Bedford, NY. He attended the College of Charleston for his undergraduate studies and currently is a second-year MBA student at UNC Kenan-Flagler Business School. Charlie played Division 1 tennis at the College of Charleston and still plays tennis recreationally."},
  {"question": "Does Charlie have family?",
    "answer": "Yes. Charlie has two sisters and two parents. He is also engaged and will be getting married this September in Upstate NY."}
