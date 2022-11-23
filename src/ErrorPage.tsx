import {useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    return<div id="error-page">
        <h1>Houston we have a problem... err... and error</h1>
        {/* <p><i>{error.statusText || error.errorMessage}</i></p> */}
    </div>
}