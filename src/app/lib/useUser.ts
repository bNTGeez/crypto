"use client";

import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/src/app/lib/firebase/clientApp";
const useUser = () => {
  const [user, setUser] = useState<User | null>(null); // Either a Firebase User or no one is logged in

  useEffect(() => {
    // onAuthStatechanged listens for firebase for changes, takes firebase authentication instance and callback function that runs whenever the user's authentication state changes.
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useUser;
