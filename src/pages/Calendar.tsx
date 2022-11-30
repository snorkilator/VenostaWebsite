import { useState, useCallback, useMemo } from "react";
import { Container, Col
} from "react-bootstrap";
import {Link} from "react-router-dom"

import { Eventcalendar,  } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

export default function YouthCaledendar(){
    const [events, setEvents] = useState([{
        start: new Date(2022, 10, 30),
        end: new Date(2022, 11, 1),
        title: 'Event',
        description: 'THis is an event',
        location: 'location',
    },{
        start: new Date(2022, 10, 30),
        end: new Date(2022, 11, 1),
        title: 'Event',
        description: 'THis is an event',
        location: 'location',
    },{
        start: new Date(2022, 10, 30),
        end: new Date(2022, 11, 1),
        title: 'Event',
        description: 'THis is an event',
        location: 'location',
    },{
        start: new Date(2022, 10, 30),
        end: new Date(2022, 11, 1),
        title: 'Event',
        description: 'THis is an event',
        location: 'location',
    },{
        start: new Date(2022, 10, 30),
        end: new Date(2022, 11, 1),
        title: 'Event',
        description: 'THis is an event',
        location: 'location',
    },{
        start: new Date(2022, 10, 30),
        end: new Date(2022, 11, 1),
        title: 'Event',
        description: 'THis is an event',
        location: 'location',
    },{
        start: new Date(2022, 10, 30),
        end: new Date(2022, 11, 1),
        title: 'Event',
        description: 'THis is an event',
        location: 'location',
    },]);


    // TODO: fix any
    const renderEvent = useCallback((data: any) => {
        return <Container >
        <Col sm={6}><div className="my-start">{data.start}</div>
          <div className="my-end">{data.end}</div></Col>
          <Col sm={6}>
          <div className="my-title">{data.title}</div>
          <div className="my-custom-field">{data.original.description}</div>
          <div className="my-custom-field">{data.original.location}</div>
          <Link
              className="nav-link col-auto "
              data-rr-ui-event-key=""
              to="#different"
            >Test</Link>
          </Col>
        </ Container>
      }, []);

    const myView = useMemo(() => {
        return {
          calendar: { type: 'month', labels: true },
          agenda: { type: 'month' }
        };
      }, []);
  
    return <Eventcalendar data={events} theme="material" 
    themeVariant="light" renderEvent={renderEvent} view={myView as any}/>;
}