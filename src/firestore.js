import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_id,
});

const db = firebase.firestore();

export async function saveFormToDb(form) {
  try {
    const doc = await db.collection("forms").add(form);
    return doc.id;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getFormFromDb(id) {
  try {
    const doc = await db.collection("forms").doc(id).get();
    return await doc.data().questions;
  } catch (error) {
    console.error(error.message);
  }
}
