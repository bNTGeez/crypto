// src/lib/firebase/serverApp.ts

import "server-only";

import { headers } from "next/headers";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

import { firebaseConfig } from "./config";

interface AuthenticatedUser {
  uid: string;
  email: string | null;
}

/**
 * Initializes a Firebase app instance on the server.
 * @returns The Firebase app instance and the authenticated user.
 */
export async function getAuthenticatedAppForUser(): Promise<{
  firebaseServerApp: FirebaseApp;
  currentUser: AuthenticatedUser | null;
}> {
  const headersInstance = await headers();
  const authHeader = headersInstance.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Unauthorized: Missing or invalid Authorization header.");
  }

  const idToken = authHeader.split("Bearer ")[1];

  const firebaseServerApp: FirebaseApp = initializeApp(firebaseConfig);
  const auth: Auth = getAuth(firebaseServerApp);

  return { firebaseServerApp, currentUser: null };
}
