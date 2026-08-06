// ============================================================
// src/registry/lessons/pythonLessons.js
// STUB — same shape as htmlLessons.js, empty until you fill it in.
// lessonRegistry.js can safely import this right now without
// breaking anything; it'll just show 0 lessons for Python until
// you add sections here.
// ============================================================

import { STATUS } from "../../config/constants";

export const tutorialInfo = {
  id: "python",
  title: "Python Tutorial",
  shortTitle: "Python",
  category: "Backend",
  description: "",
  icon: "python",
  difficulty: "Beginner", // course-level badge, separate from per-section defaults
  estimatedHours: 0,
  totalLessons: 0,
  version: "",
  language: "English",
  path: "/python",
  authorId: "faiz",
  updatedAt: "2026-07-09",
  tags: ["python"],
  seo: {
    title: "Python Tutorial | DevSphere",
    description: "",
    keywords: ["Python"]
  }
};

export const sections = [];

export const resources = [];