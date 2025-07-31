import React from "react";

import Card from "react-bootstrap/Card";

export default function AboutMe() {
  return (
    <div><h1>ABOUT ME!!!!</h1>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/me.jpg" alt="Shantel" style={{height: "300px", objectFit: "cover"}} />
        <Card.Body>
          <Card.Title>Shantel Smith</Card.Title>
          <Card.Text>
            I am a 43-year old mom of a HANDSOME 19-year old. Currently, I am pursuing more information in Computer Science to better evaluate my career options. Lastly, I enjoy baking, singing, and crafting.
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
}
