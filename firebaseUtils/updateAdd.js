// import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
import {
  onSnapshot,
  getFirestore,
  doc,
  connectFirestoreEmulator,
  updateDoc,
  addDoc,
  collection,
  getDoc
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



function addData(path, data) {
  addDoc(collection(db, "/collection"), { test: "test" })
    .catch(err => console.log(err))
}

async function getData(path) {
  try {
    let resp = await getDoc(doc(db, path))
    if (resp.exists()) {
      let data = resp.data()
      console.log(data)
      return data
    }
  }
  catch (err) {
    console.log(err)
  }
  return null
}

console.log(getData("/event-info/event-info"))