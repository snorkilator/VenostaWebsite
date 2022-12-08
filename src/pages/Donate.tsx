import {useState} from "react"
import {Container} from "react-bootstrap"
import {onSnapshot, setDoc, getFirestore, doc, getDoc, collection, connectFirestoreEmulator} from "firebase/firestore"
import {initializeApp} from "firebase/app"
const app = initializeApp({

    apiKey: "AIzaSyBs2uoIUwVkU5szP70r71soXo6qfI0YouY",
  
    authDomain: "venosta-train-station.firebaseapp.com",
  
    projectId: "venosta-train-station",
  
    storageBucket: "venosta-train-station.appspot.com",
  
    messagingSenderId: "880302263911",
  
    appId: "1:880302263911:web:eaec03abaf949cd4598ec2"
  
  });
const db = getFirestore(app);
// connectFirestoreEmulator(db, "localhost", 8080); //TODO: turn this off when deploying
let docRef = doc(collection(db, "test"), "test")

export default function Donate(){
let [text, setText] = useState()
// setTimeout(()=>setDoc(docRef, {test:"test3"}), 10000)
getDoc(doc(collection(db, "test"), "test")).then((data)=>{data.exists() && console.log(data.data())}).catch(err=>console.log(err))
onSnapshot(doc(collection(db, "test"), "test"), (data)=>{data.exists() && setText(data.data()["test"])})
return <Container><h1>{text && text}</h1></Container>
}