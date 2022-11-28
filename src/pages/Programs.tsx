import { useState, useEffect } from "react";
import { Remarkable } from "remarkable";
import parse from "html-react-parser";
import { Container, Row, Col, Image, Collapse, Button } from "react-bootstrap";

export default function Programs() {
  type Programs = {
    programTitle: string;
    paragraphs: {
      markDown: string;
      highResImage: string;
      lowResImage: string; //TODO: not implimenting this right away
      mobileImageAfterParagraph: boolean;
    }[];
  }[];

  let programsData: Programs = [
    {
      programTitle: "Skills Link",
      paragraphs: [
        {
          markDown: `
  Semi-professional leagues have grown in popularity in recent years, with the Alberta Football League becoming especially popular. The Northern Football Conference formed in Ontario in 1954 has also surged in popularity for former college players who do not continue to professional football. The Ontario champion plays against the Alberta champion for the "National Championship". The Canadian Major Football League is the governing body for the semi-professional game.
  ### list
  * [Remarkable](https://github.com/jonschlinkert/remarkable) for md to HTML on the fly
    * checkout config in GH
  * react-bootstrap for bootstrap react pre-build components (can do this without this with plain bootstrap)
  * html-react-parser for string to react html elements
    * might be unsafe
  * react-router-dom for browser side routing
  * all asociated typescript files (d.ts)
    `,
          highResImage:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
          lowResImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/320px-Flag_of_Canada_%28Pantone%29.svg.png",
          mobileImageAfterParagraph: false,
        },
      ],
    },
    {
      programTitle: "Skills Link",
      paragraphs: [
        {
          markDown: "## ```beautiful things can happen when you know how to code``` \n Semi-professional leagues have grown in popularity in recent years, with the Alberta Football League becoming especially popular. The Northern Football Conference formed in Ontario in 1954 has also surged in popularity for former college players who do not continue to professional football. The Ontario champion plays against the Alberta champion for the 'National Championship'. The Canadian Major Football League is the governing body for the semi-professional game.",
          highResImage:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
          lowResImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/320px-Flag_of_Canada_%28Pantone%29.svg.png",

          mobileImageAfterParagraph: false,
        },
        {
          markDown: `
  ## beautiful things can happen when you know how to code
    `,
          highResImage:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
          lowResImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/320px-Flag_of_Canada_%28Pantone%29.svg.png",

          mobileImageAfterParagraph: false,
        },
      ],
    },
  ];

  let [open, setOpen] = useState(false);

  let md = new Remarkable();
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
  let ProgramsElements = programsData.map((program) => {
    return (
      <article id="A/V club" className="container-fluid p-0">
        <Image src=""></Image>
        <Container
          className="btn square border"
          onClick={() => setOpen(!open)}
          aria-controls="A/V-club"
          aria-expanded={open}
        >
          <h2>
            {open ? "▲" + program.programTitle : "▼" + program.programTitle}
          </h2>
        </Container>
        <Collapse className="m-3" in={open}>
          <div id="example-collapse-text">
            <img
              style={{ width: 200 }}
              className="m-left-4 float-end"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
            />
            <p>{parse(md.render(program.paragraphs[0].markDown))}</p>
          </div>
        </Collapse>
      </article>
    );
  });
  const danger = md.render(test);
  return (
    <main>
      <Container>
        <h1 className="text-center">Programs</h1>
        {ProgramsElements}</Container>
      
      {/* <Container>
        <Row>{parse(danger)}</Row>
      </Container> */}
    </main>
  );
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
