import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  let fixThisLater: any;
  //TODO find out how to declare the proper type of this
  if (error instanceof Object) {
    fixThisLater = error;
  }
  return (
    <div id="error-page">
      <h1>Houston we have a problem... or... an error</h1>
      <p>
        <i>{fixThisLater.statusText || fixThisLater.errorMessage}</i>
      </p>
    </div>
  );
}
