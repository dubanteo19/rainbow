export type PROGRAM_ID = "young-learners" | "teens" | "private-online";
export interface Program {
  id: PROGRAM_ID;
  targetAudience: string;
  objectives: string[];
  features: string[];
}
