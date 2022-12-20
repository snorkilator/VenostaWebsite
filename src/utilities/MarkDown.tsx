import { Remarkable } from "remarkable";
import {useState, useEffect} from "react"
import HTMLReactParser from "html-react-parser";
import useMarkDown from "./useMarkDown";
const md = new Remarkable()
export default function MarkDown(props: {path: string}){
    const [text, setText] = useState("")
    useMarkDown(setText, props.path)
    return <>{HTMLReactParser(md.render(text))}</>
}