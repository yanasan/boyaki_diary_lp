import type { Timestamp } from "firebase/firestore";

export type FaqDocument = {
  question: string;
  answer: string;
  order: number;
  isPublished: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
