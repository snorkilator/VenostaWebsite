import { useState } from "react";
import { Remarkable } from "remarkable";
import parse from "html-react-parser";
import { Container } from "react-bootstrap";

export default function Programs() {
  var md = new Remarkable();
  const test = `
* test
* tes2
# test
## test
    `;
  const danger = md.render(test);
  return <Container>{parse(danger)}</Container>;
}
