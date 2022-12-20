import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  onSnapshot,
  getFirestore,
  doc,
  connectFirestoreEmulator,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
const app = initializeApp({
  apiKey: "AIzaSyBs2uoIUwVkU5szP70r71soXo6qfI0YouY",

  authDomain: "venosta-train-station.firebaseapp.com",

  projectId: "venosta-train-station",

  storageBucket: "venosta-train-station.appspot.com",

  messagingSenderId: "880302263911",

  appId: "1:880302263911:web:eaec03abaf949cd4598ec2",
});
const db = getFirestore(app);
// connectFirestoreEmulator(db, "localhost", 8080); //TODO: turn this off when deploying
export default function useMarkDown(
  setText: React.Dispatch<React.SetStateAction<string>>,
  path: string
) {
  useEffect(() => onSnapshot(doc(db, path), (data) => {
    if (data.exists()) {
      setText(data.data()["text"]);
    }
  }),[])
}