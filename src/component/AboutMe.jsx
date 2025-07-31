import React from "react";

import Card from "react-bootstrap/Card";

export default function AboutMe() {
  return (
    <>
      <h1>ABOUT ME!!!!</h1>
      <section>
        <Card
          className="d-flex justify-content-center"
          style={{ width: "18rem" }}
        >
          {/* need to figure out how to get card to center.  Drawing a blank.  Come back after coding is done for styling */}
          <Card.Img
            variant="top"
            src="/me.jpg"
            alt="Shantel"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Shantel Smith</Card.Title>
            <Card.Text>
              I am a 43-year old mom of a HANDSOME 19-year old. Currently, I am
              pursuing more information in Computer Science to better evaluate
              my career options. Lastly, I enjoy baking, singing, and crafting.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section>
        <h2>Learning Style</h2>
        <p>
          There are many ways I prefer to learn. No, there isn't one correct way
          as so many people may think! I enjoy hands-on the most! It also me to
          practice what is require of me. I get to see what I need to work on
          and what I have "mastered". Another great choice for me is YouTube!
          Over the past three levels, I have learned a great bit watching
          YouTube. I use it to compare what I have learned throughout the week
          for a better understanding. Also, I use it to pre-study for the
          upcoming week's topics. Lastly, I take hand written notes for class
          lectures. It helps me visualize what is being taught because I can see
          it right in front of me.
        </p>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="/hands-on.png"
            alt="Hands On"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="/youtube.jpg"
            alt="YouTube logo"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="/handwritten.jpg"
            alt="Handwritten Notes"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </Card>
      </section>

      <section>
        <h2>"What I Loved From My Previous Level"</h2>
        <p>
          To be honest, I wasn't too thrilled with Level 3. I knew it was going
          to be harder than the previous two levels but I was not a fan of all
          the asynchronous testing, Webpack, useEffect/useState, amongst many
          others. Level 3 wasn't all bad though! Learning AWS Databases was
          something I enjoyed. Building tables and being able to create in
          DynamoDB was awesome!
        </p>
      </section>
    </>
  );
}
