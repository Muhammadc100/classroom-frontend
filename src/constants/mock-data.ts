import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introductory course on computer science principles and programming.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus I",
    department: "Mathematics",
    description:
      "A foundational course in calculus covering limits, derivatives, and integrals.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG202",
    name: "English Literature",
    department: "English",
    description:
      "An exploration of major works in English literature from various periods.",
    createdAt: new Date().toISOString(),
  },
];
