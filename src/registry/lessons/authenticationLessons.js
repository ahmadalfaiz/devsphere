// ============================================================
// src/registry/lessons/nodejsLessons.js
// STUB — same shape as htmlLessons.js, empty until you fill it in.
// lessonRegistry.js can safely import this right now without
// breaking anything; it'll just show 0 lessons for Node.js until
// you add sections here.
// ============================================================

import { STATUS } from "../../config/constants";

export const tutorialInfo = {
  id: "authentication",
  title: "Authentication Tutorial",
  shortTitle: "Authentication",
  category: "Backend",
  description: "Master web authentication from beginner to advanced with comprehensive tutorials covering passwords, sessions, cookies, JWT, access and refresh tokens, OAuth, authorization, MFA, password security, authentication flows, API security, and production-ready authentication systems.",
  icon: "authentication",
  difficulty: "Advanced", // course-level badge, separate from per-section defaults
  estimatedHours: 39,
  totalLessons: 66,
  version: "Latest",
  language: "English",
  path: "/authentication",
  authorId: "faiz",
  updatedAt: "2026-07-09",
  tags: ["authentication", "authorization", "backend", "web security", "api security", "user authentication", "password authentication", "sessions", "cookies", "jwt", "access tokens", "refresh tokens", "oauth", "oauth 2.0", "openid connect", "mfa", "two factor authentication", "password hashing", "bcrypt", "security", "nodejs", "expressjs", "rest api"],
  seo: {
    title: "Authentication Tutorial - Complete Backend Development Guide | DevSphere",
    description: "Learn web authentication from scratch with a complete guide to sessions, cookies, JWT, access and refresh tokens, OAuth 2.0, authorization, password hashing, MFA, API security, and production-ready authentication systems.", 
    keywords: ["Authentication Tutorial", "Web Authentication", "Authentication Tutorial for Beginners", "Learn Authentication", "Backend Authentication", "User Authentication", "User Login System", "Authentication and Authorization", "Authorization Tutorial", "Web Security", "API Authentication", "API Security", "Session Authentication", "Session Based Authentication", "Cookie Based Authentication", "Cookies and Sessions", "JWT Authentication", "JWT Tutorial", "JSON Web Token", "Access Token", "Refresh Token", "Refresh Token Authentication", "Access and Refresh Tokens", "Token Based Authentication", "Bearer Token", "OAuth 2.0", "OAuth Authentication", "OpenID Connect", "Single Sign On", "SSO Authentication", "Multi Factor Authentication", "MFA", "Two Factor Authentication", "2FA", "Password Authentication", "Password Hashing", "Password Security", "Bcrypt", "Secure Login System", "Login Authentication", "Registration and Login", "Role Based Access Control", "RBAC", "Permission Based Authorization", "Protected Routes", "Authentication Middleware", "Node.js Authentication", "Express.js Authentication", "REST API Authentication", "Secure REST API", "Production Authentication", "DevSphere"]
  }
};

export const sections = [
    {
    id: "authentication-fundamentals", title: "Authentication Fundamentals", order: 1, difficulty: "Beginner",
    lessons: [
      { id: 1, order: 1, slug: "authentication-what-is-authentication", title: "What is Authentication?", shortTitle: "What is Authentication?", readingTime: 10, tags: ["authentication", "introduction", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn what authentication means and why every application needs a way to verify user identity.", prerequisites: [], related: ["authentication-authentication-vs-authorization", "authentication-why-authentication-is-important", "authentication-how-authentication-works"], recommended: ["authentication-authentication-vs-authorization", "authentication-authentication-flow"] },
      { id: 2, order: 2, slug: "authentication-authentication-vs-authorization", title: "Authentication vs Authorization", shortTitle: "Auth vs Authorization", readingTime: 10, tags: ["authentication", "authorization", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Understand the key difference between authentication and authorization in web applications.", prerequisites: ["authentication-what-is-authentication"], related: ["authentication-what-is-authentication", "authentication-authentication-vs-authorization-revisited"], recommended: ["authentication-authentication-vs-authorization-revisited"] },
      { id: 3, order: 3, slug: "authentication-why-authentication-is-important", title: "Why Authentication is Important", shortTitle: "Why It Matters", readingTime: 10, tags: ["authentication", "security", "motivation"], status: STATUS.PUBLISHED, featured: true, description: "Learn why authentication is critical for protecting user data and application security.", prerequisites: ["authentication-what-is-authentication"], related: ["authentication-what-is-authentication", "authentication-how-authentication-works"], recommended: [] },
      { id: 4, order: 4, slug: "authentication-how-authentication-works", title: "How Authentication Works", shortTitle: "How It Works", readingTime: 12, tags: ["authentication", "fundamentals", "flow"], status: STATUS.PUBLISHED, featured: true, description: "Get a step-by-step look at how authentication works under the hood in modern applications.", prerequisites: ["authentication-why-authentication-is-important"], related: ["authentication-authentication-flow", "authentication-user-identity-and-sessions"], recommended: ["authentication-authentication-flow"] },
      { id: 5, order: 5, slug: "authentication-authentication-flow", title: "Authentication Flow", shortTitle: "Authentication Flow", readingTime: 12, tags: ["authentication", "flow", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn the typical flow a user goes through from login to an authenticated session.", prerequisites: ["authentication-how-authentication-works"], related: ["authentication-how-authentication-works", "authentication-user-identity-and-sessions"], recommended: [] },
      { id: 6, order: 6, slug: "authentication-user-identity-and-sessions", title: "User Identity & Sessions", shortTitle: "Identity & Sessions", readingTime: 12, tags: ["authentication", "identity", "sessions"], status: STATUS.PUBLISHED, featured: true, description: "Learn how applications track a user's identity across requests using sessions.", prerequisites: ["authentication-authentication-flow"], related: ["authentication-what-are-sessions", "authentication-common-authentication-methods"], recommended: ["authentication-what-are-sessions"] },
      { id: 7, order: 7, slug: "authentication-common-authentication-methods", title: "Common Authentication Methods", shortTitle: "Common Methods", readingTime: 12, tags: ["authentication", "methods", "overview"], status: STATUS.PUBLISHED, featured: true, description: "Get an overview of the most common authentication methods used in web applications today.", prerequisites: ["authentication-user-identity-and-sessions"], related: ["authentication-user-identity-and-sessions", "authentication-user-registration"], recommended: ["authentication-user-registration"] }
    ]
  },
 
  {
    id: "password-authentication", title: "Password Authentication", order: 2, difficulty: "Beginner",
    lessons: [
      { id: 8, order: 1, slug: "authentication-user-registration", title: "User Registration", shortTitle: "User Registration", readingTime: 14, tags: ["authentication", "registration", "passwords"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a secure user registration flow for a web application.", prerequisites: ["authentication-common-authentication-methods"], related: ["authentication-user-login", "authentication-password-hashing"], recommended: ["authentication-user-login"] },
      { id: 9, order: 2, slug: "authentication-user-login", title: "User Login", shortTitle: "User Login", readingTime: 14, tags: ["authentication", "login", "passwords"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a secure login flow that verifies a user's credentials.", prerequisites: ["authentication-user-registration"], related: ["authentication-user-registration", "authentication-password-hashing"], recommended: ["authentication-password-hashing"] },
      { id: 10, order: 3, slug: "authentication-password-hashing", title: "Password Hashing", shortTitle: "Password Hashing", readingTime: 14, tags: ["authentication", "passwords", "hashing"], status: STATUS.PUBLISHED, featured: true, description: "Learn why passwords must be hashed before storage and how hashing algorithms work.", prerequisites: ["authentication-user-login"], related: ["authentication-password-salting", "authentication-secure-password-storage"], recommended: ["authentication-password-salting"] },
      { id: 11, order: 4, slug: "authentication-password-salting", title: "Password Salting", shortTitle: "Password Salting", readingTime: 10, tags: ["authentication", "passwords", "salting"], status: STATUS.PUBLISHED, featured: true, description: "Learn how salting strengthens password hashes against precomputed attacks.", prerequisites: ["authentication-password-hashing"], related: ["authentication-password-hashing", "authentication-secure-password-storage"], recommended: [] },
      { id: 12, order: 5, slug: "authentication-password-policies", title: "Password Policies", shortTitle: "Password Policies", readingTime: 10, tags: ["authentication", "passwords", "policies"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to design password policies that balance security and usability.", prerequisites: ["authentication-password-salting"], related: ["authentication-password-reset-flow", "authentication-secure-password-storage"], recommended: [] },
      { id: 13, order: 6, slug: "authentication-password-reset-flow", title: "Password Reset Flow", shortTitle: "Password Reset", readingTime: 12, tags: ["authentication", "passwords", "password reset"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a secure password reset flow for forgotten passwords.", prerequisites: ["authentication-password-policies"], related: ["authentication-email-verification", "authentication-password-policies"], recommended: ["authentication-email-verification"] },
      { id: 14, order: 7, slug: "authentication-email-verification", title: "Email Verification", shortTitle: "Email Verification", readingTime: 12, tags: ["authentication", "email verification", "onboarding"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to verify a user's email address as part of a secure registration flow.", prerequisites: ["authentication-password-reset-flow"], related: ["authentication-password-reset-flow", "authentication-remember-me-functionality"], recommended: [] },
      { id: 15, order: 8, slug: "authentication-remember-me-functionality", title: "Remember Me Functionality", shortTitle: "Remember Me", readingTime: 10, tags: ["authentication", "remember me", "sessions"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to implement a 'Remember Me' feature that keeps users logged in longer.", prerequisites: ["authentication-email-verification"], related: ["authentication-email-verification", "authentication-what-are-sessions"], recommended: ["authentication-what-are-sessions"] }
    ]
  },
 
  {
    id: "session-based-authentication", title: "Session-Based Authentication", order: 3, difficulty: "Intermediate",
    lessons: [
      { id: 16, order: 1, slug: "authentication-what-are-sessions", title: "What are Sessions?", shortTitle: "What Are Sessions?", readingTime: 12, tags: ["authentication", "sessions", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn what sessions are and how they let a server remember a logged-in user.", prerequisites: ["authentication-remember-me-functionality"], related: ["authentication-session-lifecycle", "authentication-cookies-explained"], recommended: ["authentication-session-lifecycle"] },
      { id: 17, order: 2, slug: "authentication-session-lifecycle", title: "Session Lifecycle", shortTitle: "Session Lifecycle", readingTime: 12, tags: ["authentication", "sessions", "lifecycle"], status: STATUS.PUBLISHED, featured: true, description: "Learn the full lifecycle of a session from creation to expiration.", prerequisites: ["authentication-what-are-sessions"], related: ["authentication-what-are-sessions", "authentication-session-storage"], recommended: [] },
      { id: 18, order: 3, slug: "authentication-cookies-explained", title: "Cookies Explained", shortTitle: "Cookies Explained", readingTime: 12, tags: ["authentication", "cookies", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn what cookies are and how they're used to maintain authenticated sessions.", prerequisites: ["authentication-what-are-sessions"], related: ["authentication-session-cookies", "authentication-secure-cookie-configuration"], recommended: ["authentication-session-cookies"] },
      { id: 19, order: 4, slug: "authentication-session-cookies", title: "Session Cookies", shortTitle: "Session Cookies", readingTime: 10, tags: ["authentication", "cookies", "sessions"], status: STATUS.PUBLISHED, featured: true, description: "Learn how session cookies link a browser to a server-side session.", prerequisites: ["authentication-cookies-explained"], related: ["authentication-cookies-explained", "authentication-secure-cookie-configuration"], recommended: [] },
      { id: 20, order: 5, slug: "authentication-secure-cookie-configuration", title: "Secure Cookie Configuration", shortTitle: "Secure Cookie Config", readingTime: 12, tags: ["authentication", "cookies", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure cookies securely using flags like HttpOnly, Secure, and SameSite.", prerequisites: ["authentication-session-cookies"], related: ["authentication-session-cookies", "authentication-https-and-secure-communication"], recommended: [] },
      { id: 21, order: 6, slug: "authentication-session-storage", title: "Session Storage", shortTitle: "Session Storage", readingTime: 12, tags: ["authentication", "sessions", "storage"], status: STATUS.PUBLISHED, featured: true, description: "Learn how and where server-side session data is stored in production applications.", prerequisites: ["authentication-secure-cookie-configuration"], related: ["authentication-session-lifecycle", "authentication-logout-process"], recommended: [] },
      { id: 22, order: 7, slug: "authentication-logout-process", title: "Logout Process", shortTitle: "Logout Process", readingTime: 10, tags: ["authentication", "logout", "sessions"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to properly end a user's session during logout.", prerequisites: ["authentication-session-storage"], related: ["authentication-session-storage", "authentication-what-is-jwt"], recommended: ["authentication-what-is-jwt"] }
    ]
  },
 
  {
    id: "token-based-authentication", title: "Token-Based Authentication", order: 4, difficulty: "Intermediate",
    lessons: [
      { id: 23, order: 1, slug: "authentication-what-is-jwt", title: "What is JWT?", shortTitle: "What is JWT?", readingTime: 12, tags: ["authentication", "jwt", "tokens"], status: STATUS.PUBLISHED, featured: true, description: "Learn what JSON Web Tokens are and why they're widely used for authentication.", prerequisites: ["authentication-logout-process"], related: ["authentication-jwt-structure", "authentication-creating-jwt-tokens"], recommended: ["authentication-jwt-structure"] },
      { id: 24, order: 2, slug: "authentication-jwt-structure", title: "JWT Structure", shortTitle: "JWT Structure", readingTime: 12, tags: ["authentication", "jwt", "structure"], status: STATUS.PUBLISHED, featured: true, description: "Learn the three parts of a JWT: header, payload, and signature.", prerequisites: ["authentication-what-is-jwt"], related: ["authentication-what-is-jwt", "authentication-creating-jwt-tokens"], recommended: [] },
      { id: 25, order: 3, slug: "authentication-creating-jwt-tokens", title: "Creating JWT Tokens", shortTitle: "Creating JWT Tokens", readingTime: 14, tags: ["authentication", "jwt", "implementation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to generate and sign JWT tokens in a backend application.", prerequisites: ["authentication-jwt-structure"], related: ["authentication-access-tokens", "authentication-refresh-tokens"], recommended: ["authentication-access-tokens"] },
      { id: 26, order: 4, slug: "authentication-access-tokens", title: "Access Tokens", shortTitle: "Access Tokens", readingTime: 12, tags: ["authentication", "tokens", "access tokens"], status: STATUS.PUBLISHED, featured: true, description: "Learn how access tokens grant short-lived access to protected resources.", prerequisites: ["authentication-creating-jwt-tokens"], related: ["authentication-refresh-tokens", "authentication-token-expiration"], recommended: ["authentication-refresh-tokens"] },
      { id: 27, order: 5, slug: "authentication-refresh-tokens", title: "Refresh Tokens", shortTitle: "Refresh Tokens", readingTime: 14, tags: ["authentication", "tokens", "refresh tokens"], status: STATUS.PUBLISHED, featured: true, description: "Learn how refresh tokens let users stay logged in without re-entering credentials.", prerequisites: ["authentication-access-tokens"], related: ["authentication-access-tokens", "authentication-token-revocation"], recommended: [] },
      { id: 28, order: 6, slug: "authentication-token-expiration", title: "Token Expiration", shortTitle: "Token Expiration", readingTime: 10, tags: ["authentication", "tokens", "expiration"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to set and handle token expiration to limit the impact of stolen tokens.", prerequisites: ["authentication-refresh-tokens"], related: ["authentication-access-tokens", "authentication-token-revocation"], recommended: [] },
      { id: 29, order: 7, slug: "authentication-token-revocation", title: "Token Revocation", shortTitle: "Token Revocation", readingTime: 12, tags: ["authentication", "tokens", "revocation"], status: STATUS.PUBLISHED, featured: true, description: "Learn strategies for revoking tokens before they naturally expire.", prerequisites: ["authentication-token-expiration"], related: ["authentication-token-expiration", "authentication-jwt-best-practices"], recommended: [] },
      { id: 30, order: 8, slug: "authentication-jwt-best-practices", title: "JWT Best Practices", shortTitle: "JWT Best Practices", readingTime: 12, tags: ["authentication", "jwt", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn a checklist of best practices for using JWTs securely in production.", prerequisites: ["authentication-token-revocation"], related: ["authentication-secure-jwt-storage", "authentication-token-revocation"], recommended: ["authentication-secure-jwt-storage"] }
    ]
  },
 
  {
    id: "authorization", title: "Authorization", order: 5, difficulty: "Intermediate",
    lessons: [
      { id: 31, order: 1, slug: "authentication-authentication-vs-authorization-revisited", title: "Authentication vs Authorization Revisited", shortTitle: "Auth vs Authorization Revisited", readingTime: 10, tags: ["authentication", "authorization", "review"], status: STATUS.PUBLISHED, featured: true, description: "Revisit the distinction between authentication and authorization with more advanced examples.", prerequisites: ["authentication-jwt-best-practices"], related: ["authentication-authentication-vs-authorization", "authentication-role-based-access-control-rbac"], recommended: ["authentication-role-based-access-control-rbac"] },
      { id: 32, order: 2, slug: "authentication-role-based-access-control-rbac", title: "Role-Based Access Control (RBAC)", shortTitle: "RBAC", readingTime: 14, tags: ["authentication", "authorization", "rbac"], status: STATUS.PUBLISHED, featured: true, description: "Learn how role-based access control restricts what different types of users can do.", prerequisites: ["authentication-authentication-vs-authorization-revisited"], related: ["authentication-permission-based-authorization", "authentication-protecting-routes"], recommended: ["authentication-permission-based-authorization"] },
      { id: 33, order: 3, slug: "authentication-permission-based-authorization", title: "Permission-Based Authorization", shortTitle: "Permission-Based Authorization", readingTime: 14, tags: ["authentication", "authorization", "permissions"], status: STATUS.PUBLISHED, featured: true, description: "Learn how permission-based authorization offers finer-grained access control than roles alone.", prerequisites: ["authentication-role-based-access-control-rbac"], related: ["authentication-role-based-access-control-rbac", "authentication-resource-ownership"], recommended: [] },
      { id: 34, order: 4, slug: "authentication-protecting-routes", title: "Protecting Routes", shortTitle: "Protecting Routes", readingTime: 12, tags: ["authentication", "authorization", "protected routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to restrict access to routes based on a user's authentication and role.", prerequisites: ["authentication-permission-based-authorization"], related: ["authentication-protecting-apis", "authentication-resource-ownership"], recommended: ["authentication-protecting-apis"] },
      { id: 35, order: 5, slug: "authentication-protecting-apis", title: "Protecting APIs", shortTitle: "Protecting APIs", readingTime: 12, tags: ["authentication", "authorization", "api security"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to secure API endpoints so only authorized requests can access them.", prerequisites: ["authentication-protecting-routes"], related: ["authentication-protecting-routes", "authentication-resource-ownership"], recommended: [] },
      { id: 36, order: 6, slug: "authentication-resource-ownership", title: "Resource Ownership", shortTitle: "Resource Ownership", readingTime: 12, tags: ["authentication", "authorization", "resource ownership"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to ensure users can only access or modify resources they own.", prerequisites: ["authentication-protecting-apis"], related: ["authentication-permission-based-authorization", "authentication-protecting-apis"], recommended: [] }
    ]
  },
 
  {
    id: "oauth-modern-authentication", title: "OAuth & Modern Authentication", order: 6, difficulty: "Advanced",
    lessons: [
      { id: 37, order: 1, slug: "authentication-introduction-to-oauth-2-0", title: "Introduction to OAuth 2.0", shortTitle: "Intro to OAuth 2.0", readingTime: 16, tags: ["authentication", "oauth", "oauth 2.0"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to OAuth 2.0 and how it enables secure delegated access.", prerequisites: ["authentication-resource-ownership"], related: ["authentication-openid-connect", "authentication-social-login-google-github-facebook"], recommended: ["authentication-openid-connect"] },
      { id: 38, order: 2, slug: "authentication-openid-connect", title: "OpenID Connect", shortTitle: "OpenID Connect", readingTime: 14, tags: ["authentication", "openid connect", "identity"], status: STATUS.PUBLISHED, featured: true, description: "Learn how OpenID Connect builds on OAuth 2.0 to provide user identity verification.", prerequisites: ["authentication-introduction-to-oauth-2-0"], related: ["authentication-introduction-to-oauth-2-0", "authentication-single-sign-on-sso"], recommended: [] },
      { id: 39, order: 3, slug: "authentication-social-login-google-github-facebook", title: "Social Login (Google, GitHub, Facebook)", shortTitle: "Social Login", readingTime: 14, tags: ["authentication", "social login", "oauth"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to implement social login using providers like Google, GitHub, and Facebook.", prerequisites: ["authentication-openid-connect"], related: ["authentication-introduction-to-oauth-2-0", "authentication-single-sign-on-sso"], recommended: [] },
      { id: 40, order: 4, slug: "authentication-single-sign-on-sso", title: "Single Sign-On (SSO)", shortTitle: "Single Sign-On (SSO)", readingTime: 14, tags: ["authentication", "sso", "enterprise"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Single Sign-On lets users access multiple applications with one login.", prerequisites: ["authentication-social-login-google-github-facebook"], related: ["authentication-openid-connect", "authentication-multi-factor-authentication-mfa"], recommended: [] },
      { id: 41, order: 5, slug: "authentication-multi-factor-authentication-mfa", title: "Multi-Factor Authentication (MFA)", shortTitle: "MFA", readingTime: 14, tags: ["authentication", "mfa", "two factor authentication"], status: STATUS.PUBLISHED, featured: true, description: "Learn how multi-factor authentication adds an extra layer of security beyond passwords.", prerequisites: ["authentication-single-sign-on-sso"], related: ["authentication-single-sign-on-sso", "authentication-https-and-secure-communication"], recommended: ["authentication-https-and-secure-communication"] }
    ]
  },
 
  {
    id: "authentication-security", title: "Authentication Security", order: 7, difficulty: "Advanced",
    lessons: [
      { id: 42, order: 1, slug: "authentication-https-and-secure-communication", title: "HTTPS & Secure Communication", shortTitle: "HTTPS & Secure Comms", readingTime: 12, tags: ["authentication", "https", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn why HTTPS is essential for protecting authentication data in transit.", prerequisites: ["authentication-multi-factor-authentication-mfa"], related: ["authentication-secure-cookie-configuration", "authentication-preventing-brute-force-attacks"], recommended: ["authentication-preventing-brute-force-attacks"] },
      { id: 43, order: 2, slug: "authentication-preventing-brute-force-attacks", title: "Preventing Brute Force Attacks", shortTitle: "Brute Force Prevention", readingTime: 12, tags: ["authentication", "security", "brute force"], status: STATUS.PUBLISHED, featured: true, description: "Learn techniques for preventing brute force attacks against login endpoints.", prerequisites: ["authentication-https-and-secure-communication"], related: ["authentication-csrf-protection", "authentication-https-and-secure-communication"], recommended: [] },
      { id: 44, order: 3, slug: "authentication-csrf-protection", title: "CSRF Protection", shortTitle: "CSRF Protection", readingTime: 12, tags: ["authentication", "csrf", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to protect authenticated sessions from Cross-Site Request Forgery attacks.", prerequisites: ["authentication-preventing-brute-force-attacks"], related: ["authentication-xss-and-authentication", "authentication-preventing-brute-force-attacks"], recommended: ["authentication-xss-and-authentication"] },
      { id: 45, order: 4, slug: "authentication-xss-and-authentication", title: "XSS and Authentication", shortTitle: "XSS & Authentication", readingTime: 12, tags: ["authentication", "xss", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Cross-Site Scripting attacks can compromise authentication and how to prevent them.", prerequisites: ["authentication-csrf-protection"], related: ["authentication-csrf-protection", "authentication-secure-jwt-storage"], recommended: [] },
      { id: 46, order: 5, slug: "authentication-secure-password-storage", title: "Secure Password Storage", shortTitle: "Secure Password Storage", readingTime: 12, tags: ["authentication", "passwords", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn best practices for securely storing passwords in a production database.", prerequisites: ["authentication-xss-and-authentication"], related: ["authentication-password-hashing", "authentication-password-salting"], recommended: [] },
      { id: 47, order: 6, slug: "authentication-secure-jwt-storage", title: "Secure JWT Storage", shortTitle: "Secure JWT Storage", readingTime: 12, tags: ["authentication", "jwt", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn where and how to safely store JWTs on the client to prevent theft.", prerequisites: ["authentication-secure-password-storage"], related: ["authentication-jwt-best-practices", "authentication-xss-and-authentication"], recommended: [] },
      { id: 48, order: 7, slug: "authentication-authentication-security-checklist", title: "Authentication Security Checklist", shortTitle: "Security Checklist", readingTime: 14, tags: ["authentication", "security", "checklist"], status: STATUS.PUBLISHED, featured: true, description: "Review a complete checklist of security practices for production authentication systems.", prerequisites: ["authentication-secure-jwt-storage"], related: ["authentication-secure-password-storage", "authentication-secure-jwt-storage"], recommended: ["authentication-authentication-with-expressjs"] }
    ]
  },
 
  {
    id: "authentication-in-expressjs", title: "Authentication in Express.js", order: 8, difficulty: "Advanced",
    lessons: [
      { id: 49, order: 1, slug: "authentication-authentication-with-expressjs", title: "Authentication with Express.js", shortTitle: "Auth with Express.js", readingTime: 14, tags: ["authentication", "expressjs", "nodejs"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to implementing authentication in an Express.js application.", prerequisites: ["authentication-authentication-security-checklist"], related: ["authentication-user-registration-api", "authentication-login-api"], recommended: ["authentication-user-registration-api"] },
      { id: 50, order: 2, slug: "authentication-user-registration-api", title: "User Registration API", shortTitle: "Registration API", readingTime: 14, tags: ["authentication", "expressjs", "registration"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a user registration API endpoint using Express.js.", prerequisites: ["authentication-authentication-with-expressjs"], related: ["authentication-login-api", "authentication-authentication-with-expressjs"], recommended: ["authentication-login-api"] },
      { id: 51, order: 3, slug: "authentication-login-api", title: "Login API", shortTitle: "Login API", readingTime: 14, tags: ["authentication", "expressjs", "login"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a login API endpoint that authenticates users and issues tokens.", prerequisites: ["authentication-user-registration-api"], related: ["authentication-protecting-express-routes", "authentication-jwt-middleware"], recommended: ["authentication-jwt-middleware"] },
      { id: 52, order: 4, slug: "authentication-protecting-express-routes", title: "Protecting Express Routes", shortTitle: "Protecting Express Routes", readingTime: 12, tags: ["authentication", "expressjs", "protected routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to protect Express routes so only authenticated users can access them.", prerequisites: ["authentication-login-api"], related: ["authentication-jwt-middleware", "authentication-login-api"], recommended: [] },
      { id: 53, order: 5, slug: "authentication-jwt-middleware", title: "JWT Middleware", shortTitle: "JWT Middleware", readingTime: 14, tags: ["authentication", "expressjs", "middleware"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build Express middleware that verifies JWTs on incoming requests.", prerequisites: ["authentication-protecting-express-routes"], related: ["authentication-protecting-express-routes", "authentication-refresh-token-implementation"], recommended: [] },
      { id: 54, order: 6, slug: "authentication-refresh-token-implementation", title: "Refresh Token Implementation", shortTitle: "Refresh Token Implementation", readingTime: 14, tags: ["authentication", "expressjs", "refresh tokens"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to implement refresh token rotation in an Express.js application.", prerequisites: ["authentication-jwt-middleware"], related: ["authentication-refresh-tokens", "authentication-jwt-middleware"], recommended: [] },
      { id: 55, order: 7, slug: "authentication-logout-api", title: "Logout API", shortTitle: "Logout API", readingTime: 10, tags: ["authentication", "expressjs", "logout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a secure logout API endpoint in Express.js.", prerequisites: ["authentication-refresh-token-implementation"], related: ["authentication-logout-process", "authentication-refresh-token-implementation"], recommended: [] }
    ]
  },
 
  {
    id: "authentication-in-nextjs", title: "Authentication in Next.js", order: 9, difficulty: "Advanced",
    lessons: [
      { id: 56, order: 1, slug: "authentication-authentication-in-nextjs", title: "Authentication in Next.js", shortTitle: "Auth in Next.js", readingTime: 14, tags: ["authentication", "nextjs", "fullstack"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to implementing authentication in a Next.js application.", prerequisites: ["authentication-logout-api"], related: ["authentication-protected-pages", "authentication-route-protection"], recommended: ["authentication-protected-pages"] },
      { id: 57, order: 2, slug: "authentication-protected-pages", title: "Protected Pages", shortTitle: "Protected Pages", readingTime: 12, tags: ["authentication", "nextjs", "protected pages"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to protect pages in a Next.js application based on authentication status.", prerequisites: ["authentication-authentication-in-nextjs"], related: ["authentication-route-protection", "authentication-authentication-in-nextjs"], recommended: [] },
      { id: 58, order: 3, slug: "authentication-route-protection", title: "Route Protection", shortTitle: "Route Protection", readingTime: 12, tags: ["authentication", "nextjs", "route protection"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to implement route protection middleware in a Next.js application.", prerequisites: ["authentication-protected-pages"], related: ["authentication-server-side-authentication", "authentication-protected-pages"], recommended: ["authentication-server-side-authentication"] },
      { id: 59, order: 4, slug: "authentication-server-side-authentication", title: "Server-side Authentication", shortTitle: "Server-side Auth", readingTime: 14, tags: ["authentication", "nextjs", "server components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to check authentication status inside Next.js Server Components.", prerequisites: ["authentication-route-protection"], related: ["authentication-authentication-with-authjs-nextauth", "authentication-client-side-authentication"], recommended: ["authentication-authentication-with-authjs-nextauth"] },
      { id: 60, order: 5, slug: "authentication-authentication-with-authjs-nextauth", title: "Authentication with Auth.js / NextAuth", shortTitle: "Auth.js / NextAuth", readingTime: 16, tags: ["authentication", "nextjs", "nextauth"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add authentication to Next.js using Auth.js (formerly NextAuth).", prerequisites: ["authentication-server-side-authentication"], related: ["authentication-server-side-authentication", "authentication-client-side-authentication"], recommended: [] },
      { id: 61, order: 6, slug: "authentication-client-side-authentication", title: "Client-side Authentication", shortTitle: "Client-side Auth", readingTime: 12, tags: ["authentication", "nextjs", "client components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to manage authentication state inside Next.js Client Components.", prerequisites: ["authentication-authentication-with-authjs-nextauth"], related: ["authentication-authentication-with-authjs-nextauth", "authentication-authentication-architecture"], recommended: [] }
    ]
  },
 
  {
    id: "production-authentication", title: "Production Authentication", order: 10, difficulty: "Advanced",
    lessons: [
      { id: 62, order: 1, slug: "authentication-authentication-architecture", title: "Authentication Architecture", shortTitle: "Auth Architecture", readingTime: 14, tags: ["authentication", "architecture", "production"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to architect an authentication system for a production application.", prerequisites: ["authentication-client-side-authentication"], related: ["authentication-scaling-authentication-systems", "authentication-authentication-best-practices"], recommended: ["authentication-scaling-authentication-systems"] },
      { id: 63, order: 2, slug: "authentication-scaling-authentication-systems", title: "Scaling Authentication Systems", shortTitle: "Scaling Auth Systems", readingTime: 14, tags: ["authentication", "scalability", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to scale authentication systems to handle large numbers of users.", prerequisites: ["authentication-authentication-architecture"], related: ["authentication-authentication-architecture", "authentication-authentication-best-practices"], recommended: [] },
      { id: 64, order: 3, slug: "authentication-authentication-best-practices", title: "Authentication Best Practices", shortTitle: "Best Practices", readingTime: 14, tags: ["authentication", "best practices", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn a comprehensive checklist of best practices for production authentication systems.", prerequisites: ["authentication-scaling-authentication-systems"], related: ["authentication-authentication-security-checklist", "authentication-common-authentication-mistakes"], recommended: ["authentication-common-authentication-mistakes"] },
      { id: 65, order: 4, slug: "authentication-common-authentication-mistakes", title: "Common Authentication Mistakes", shortTitle: "Common Mistakes", readingTime: 12, tags: ["authentication", "mistakes", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn about common authentication mistakes developers make and how to avoid them.", prerequisites: ["authentication-authentication-best-practices"], related: ["authentication-authentication-best-practices", "authentication-authentication-interview-questions"], recommended: ["authentication-authentication-interview-questions"] },
      { id: 66, order: 5, slug: "authentication-authentication-interview-questions", title: "Authentication Interview Questions", shortTitle: "Interview Questions", readingTime: 20, tags: ["authentication", "interview", "career"], status: STATUS.PUBLISHED, featured: true, description: "Prepare for authentication and security interviews with commonly asked questions and answers.", prerequisites: ["authentication-common-authentication-mistakes"], related: ["authentication-common-authentication-mistakes", "authentication-authentication-best-practices"], recommended: [] }
    ]
  }
];

export const resources = [
  {
    id: "in-production",
    title: "Authentication in Production",
    order: 1,
    items: [
      {
        id: 67,
        order: 1,
        slug: "authentication-how-companies-implement-authentication",
        title: "How companies implement authentication",
        shortTitle: "How companies implement auth...",
        type: "article",
        readingTime: 10,
        tags: ["authentication", "backend", "production", "real world"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Explore how leading tech companies design and implement robust, scalable authentication systems in production environments."
      },
      {
        id: 68,
        order: 2,
        slug: "authentication-architecture-in-real-applications",
        title: "Authentication architecture in real applications",
        shortTitle: "Auth architecture in real apps",
        type: "article",
        readingTime: 12,
        tags: ["authentication", "backend", "production", "architecture"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Understand the architectural patterns and infrastructure used to build secure authentication in real-world applications."
      },
      {
        id: 69,
        order: 3,
        slug: "authentication-flow-in-saas-products",
        title: "Authentication flow in SaaS products",
        shortTitle: "Auth flow in SaaS products",
        type: "article",
        readingTime: 12,
        tags: ["authentication", "backend", "production", "saas"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Learn the standard authentication flows, user journeys, and edge cases handled in modern SaaS products."
      },
      {
        id: 70,
        order: 4,
        slug: "authentication-for-microservices",
        title: "Authentication for microservices",
        shortTitle: "Auth for microservices",
        type: "article",
        readingTime: 14,
        tags: ["authentication", "backend", "production", "microservices"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Discover strategies for handling centralized and decentralized authentication across distributed microservice architectures."
      }
    ]
  },
  {
    id: "best-practices",
    title: "Authentication Best Practices",
    order: 2,
    items: [
      {
        id: 71,
        order: 1,
        slug: "authentication-secure-password-policies",
        title: "Secure password policies",
        shortTitle: "Secure password policies",
        type: "article",
        readingTime: 10,
        tags: ["authentication", "backend", "best practices", "security"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Master the principles of creating, enforcing, and validating secure password policies for your applications."
      },
      {
        id: 72,
        order: 2,
        slug: "authentication-choosing-sessions-vs-jwt",
        title: "Choosing sessions vs JWT",
        shortTitle: "Choosing sessions vs JWT",
        type: "article",
        readingTime: 12,
        tags: ["authentication", "backend", "best practices", "jwt"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Evaluate the trade-offs between stateful session-based authentication and stateless JWT to choose the right approach."
      },
      {
        id: 73,
        order: 3,
        slug: "authentication-protecting-sensitive-routes",
        title: "Protecting sensitive routes",
        shortTitle: "Protecting sensitive routes",
        type: "article",
        readingTime: 10,
        tags: ["authentication", "backend", "best practices", "security"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Learn how to properly secure, middleware, and protect sensitive routes from unauthorized access and exploitation."
      },
      {
        id: 74,
        order: 4,
        slug: "authentication-writing-secure-authentication-code",
        title: "Writing secure authentication code",
        shortTitle: "Writing secure auth code",
        type: "article",
        readingTime: 14,
        tags: ["authentication", "backend", "best practices", "security"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Follow industry standards and clean code principles for writing maintainable, secure authentication logic."
      }
    ]
  },
  {
    id: "common-mistakes",
    title: "Common Authentication Mistakes",
    order: 3,
    items: [
      {
        id: 75,
        order: 1,
        slug: "authentication-storing-plain-text-passwords",
        title: "Storing plain-text passwords",
        shortTitle: "Storing plain-text passwords",
        type: "article",
        readingTime: 10,
        tags: ["authentication", "backend", "mistakes", "common issues"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Understand why storing plain-text passwords is a critical vulnerability and how to properly hash and salt them."
      },
      {
        id: 76,
        order: 2,
        slug: "authentication-insecure-jwt-storage",
        title: "Insecure JWT storage",
        shortTitle: "Insecure JWT storage",
        type: "article",
        readingTime: 12,
        tags: ["authentication", "backend", "mistakes", "common issues"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Learn about common pitfalls in client-side JWT storage (like XSS vulnerabilities) and how to securely manage tokens."
      },
      {
        id: 77,
        order: 3,
        slug: "authentication-weak-session-configuration",
        title: "Weak session configuration",
        shortTitle: "Weak session configuration",
        type: "article",
        readingTime: 10,
        tags: ["authentication", "backend", "mistakes", "common issues"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Discover how weak session configurations can lead to session hijacking and how to set secure cookie flags."
      },
      {
        id: 78,
        order: 4,
        slug: "authentication-missing-authorization-checks",
        title: "Missing authorization checks",
        shortTitle: "Missing authorization checks",
        type: "article",
        readingTime: 12,
        tags: ["authentication", "backend", "mistakes", "common issues"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Understand the critical difference between authentication and authorization, and why missing checks lead to IDOR vulnerabilities."
      }
    ]
  },
  {
    id: "security-guide",
    title: "Authentication Security Guide",
    order: 4,
    items: [
      {
        id: 79,
        order: 1,
        slug: "authentication-owasp-authentication-recommendations",
        title: "OWASP authentication recommendations",
        shortTitle: "OWASP auth recommendations",
        type: "article",
        readingTime: 14,
        tags: ["authentication", "backend", "security", "owasp"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Review the official OWASP guidelines and recommendations for building secure, resilient authentication mechanisms."
      },
      {
        id: 80,
        order: 2,
        slug: "authentication-preventing-common-authentication-attacks",
        title: "Preventing common authentication attacks",
        shortTitle: "Preventing common auth attacks",
        type: "article",
        readingTime: 12,
        tags: ["authentication", "backend", "security", "owasp"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Learn how to defend your application against common attacks like credential stuffing, brute force, and phishing."
      },
      {
        id: 81,
        order: 3,
        slug: "authentication-secure-token-management",
        title: "Secure token management",
        shortTitle: "Secure token management",
        type: "article",
        readingTime: 12,
        tags: ["authentication", "backend", "security", "jwt"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Master the complete lifecycle of secure token management, including issuance, validation, rotation, and revocation."
      },
      {
        id: 82,
        order: 4,
        slug: "authentication-security-checklist-before-deployment",
        title: "Security checklist before deployment",
        shortTitle: "Security checklist before deploy",
        type: "article",
        readingTime: 10,
        tags: ["authentication", "backend", "security", "deployment"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Use this comprehensive security checklist to ensure your authentication system is fully hardened and production-ready."
      }
    ]
  },
  {
    id: "career-guide",
    title: "Authentication Career Guide",
    order: 5,
    items: [
      {
        id: 83,
        order: 1,
        slug: "authentication-interview-questions",
        title: "Authentication interview questions",
        shortTitle: "Auth interview questions",
        type: "article",
        readingTime: 12,
        tags: ["authentication", "backend", "career", "interview"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Prepare for backend engineering interviews with commonly asked authentication, security, and system design questions."
      },
      {
        id: 84,
        order: 2,
        slug: "authentication-skills-backend-companies-expect",
        title: "Skills backend companies expect",
        shortTitle: "Skills backend companies expect",
        type: "article",
        readingTime: 10,
        tags: ["authentication", "backend", "career", "interview"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Learn the specific authentication and security skills that top tech companies expect from senior backend developers."
      },
      {
        id: 85,
        order: 3,
        slug: "authentication-building-projects",
        title: "Building authentication projects",
        shortTitle: "Building auth projects",
        type: "article",
        readingTime: 14,
        tags: ["authentication", "backend", "career", "portfolio"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Get actionable ideas for building portfolio-worthy authentication projects that demonstrate real-world backend security skills."
      },
      {
        id: 86,
        order: 4,
        slug: "authentication-realworld-case-studies",
        title: "Real-world authentication case studies",
        shortTitle: "Real-world auth case studies",
        type: "article",
        readingTime: 16,
        tags: ["authentication", "backend", "career", "real world"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Study real-world authentication case studies and breaches to understand how theoretical security concepts apply in practice."
      }
    ]
  }
];