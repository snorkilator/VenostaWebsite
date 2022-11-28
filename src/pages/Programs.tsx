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


// for each dropdown
// layout
//    Two paragraphs, option of picture to accompany each Paragraph
//    photos: ability to specify before or after paragraph for mobile
//    Desktop view
//      click dropdowns to maximize and minimize
//    mobile view
//      only keep one dropdown open at a time
//      Close button to return to programs menu
//    load photos on dropdown, keep loaded after initial load
// input is array (list of programs)
//    title of program (string)
//    array of paragraphs each item containing
//        MD for paragraph (string)
//        high and low res image links ({highRes: "string", lowRes: "string"})
//        can't be too skinny so requirement like: these must be square or up to 16:9
//          lowRes, link to aws bucket (string)
//          highRes,  link to aws bucket (string)
//        flag indicating that the image goes above or below the paragraph (bool)