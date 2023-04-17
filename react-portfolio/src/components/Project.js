import React from "react"; 
import { Col, Card, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
 

const styles = {
    image: {
      display: "flex",
      width: "60%",
      height: "30%",
      margin: 5,
      borderRadius: 10,
      border: "solid 1px black",
    },
    card: {
      borderRadius: 10,
      justifyContent: "center",
      background: "rgba(0,0,0,0.2)",
      backgroundImage: "url(",
    },

    
    
    description: {
      fontWeight: 500,
    },
    title: {
      fontWeight: 700,
      fontSize: 20,
    }, 
};

export default function Project(props) { 
    return ( 
        <div> 
            <Row>
                <Col md="4"> 
                    <Card style = {styles.card} border = "dark">
                        <Card.Img
                            src={props.image}
                            style={styles.image}
                        />

                        <Card.Body>
                            <Card.Title styles={styles.title} > {props.title}</Card.Title>
                            <Card.Text style={styles.description}> {props.description}</Card.Text> 
                            <Card.Link href={props.link}> {props.link}</Card.Link>
                        </Card.Body>
                    </Card> 

                </Col>
            </Row>

        </div>
    )
}