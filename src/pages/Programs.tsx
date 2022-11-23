import { useState } from "react";
import { Remarkable } from "remarkable";
import parse from "html-react-parser";
import { Container, Row } from "react-bootstrap";

export default function Programs() {
  var md = new Remarkable();
  const test = `
  # List of dependencies

  * [Remarkable](https://github.com/jonschlinkert/remarkable) for md to HTML on the fly
    * checkout config in GH
  * react-bootstrap for bootstrap react pre-build components (can do this without this with plain bootstrap)
  * html-react-parser for string to react html elements
    * might be unsafe
  * react-router-dom for browser side routing
  * all asociated typescript files (d.ts)
  
  ![image](https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg)
    `;
  const danger = md.render(test);
  return <Container ><Row  >{parse(danger)}</Row></Container>;
}
