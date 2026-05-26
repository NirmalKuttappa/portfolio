export type Project = {
  title: string;
  description: string;
  github: string;
  demo?: string;
  tech: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    title: "[PROJECT ONE]",
    description: "One-line description of what this project does and why it matters.",
    github: "https://github.com/NirmalKuttappa/project-one",
    tech: ["TypeScript", "Next.js"],
    year: "2026",
  },
  {
    title: "[PROJECT TWO]",
    description: "Another one-line description — replace with real content.",
    github: "https://github.com/NirmalKuttappa/project-two",
    demo: "https://example.com",
    tech: ["Python", "FastAPI"],
    year: "2025",
  },
  {
    title: "[PROJECT THREE]",
    description: "Third placeholder — describe the problem and the outcome.",
    github: "https://github.com/NirmalKuttappa/project-three",
    tech: ["React", "PostgreSQL"],
    year: "2025",
  },
];
