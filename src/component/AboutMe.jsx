import React, { useState } from "react";

import Card from "react-bootstrap/Card";

export default function AboutMe() {
  const hobbies = ["Baking", "Singing", "Crafting"];
  const [showFunFact, setShowFunFact] = useState(false);
  return (
    <>
      <h1 className="font-header">ABOUT ME!!!!</h1>
      <section className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
        <Card style={{ width: "18rem" }}>
          {/* need to figure out how to get card to center.  Drawing a blank.  Come back after coding is done for styling */}
          <Card.Img
            variant="top"
            src="/me.jpg"
            alt="Shantel"
            style={{ height: "175px", objectFit: "cover" }}
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

      <section className="section-learning mt-5">
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
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="/hands-on.png"
              alt="Hands On"
              style={{ height: "150px", objectFit: "cover" }}
            />
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="/youtube.jpg"
              alt="YouTube logo"
              style={{ height: "150px", objectFit: "cover" }}
            />
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="/handwritten.jpg"
              alt="Handwritten Notes"
              style={{ height: "150px", objectFit: "cover" }}
            />
          </Card>
        </div>
      </section>

      <section className="mt-5">
        <h2>"What I Loved From My Previous Level"</h2>
        <p>
          To be honest, I wasn't too thrilled with Level 3. I knew it was going
          to be harder than the previous two levels but I was not a fan of all
          the asynchronous testing, Webpack, useEffect/useState, amongst many
          others. Level 3 wasn't all bad though! Learning AWS Databases was
          something I enjoyed. Building tables and being able to create in
          DynamoDB was awesome! My former instructor introduced us to SASS which
          was very good!
        </p>
      </section>

      <section className=" section-concepts mt-5" >
        <h2>"Where I'm At"</h2>
        <p>
          <ul>
            <li>
              <p>
                There are a few concepts that I feel comfortable working. I
                wouldn't say confident. Throughout Level 3, I grabbed the
                concept of working in the terminal. At first I didn't like it
                but eventually came to like it. I feel comfortable using
                DynamoDB for APIs as well as using Nelify. Browser Routes was
                pretty cool. Async functions are ok.
              </p>
            </li>
            <li>
              <p>
                Whew, where do I start? There are many concepts that I just
                don't get or can't retain enough information to even know the
                reason behind it. I can complete many concepts like
                useState/useEffect, for-loops, map, slice, join, and many
                others.
              </p>
            </li>
            <li>
              <p>
                As I stated before, I'm very curious about learning more AWS
                DynamoDB. Any other web services in AWS have caught my
                attention.
              </p>
            </li>
          </ul>
        </p>
      </section>
      <section className="mt-5">
        <h3>Shantel's Favorite Hobbies</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </section>
      <section className="section-fun mt-5">
        <h2>Shantel's Fun Fact</h2>
        <button onClick={() => setShowFunFact(!showFunFact)}>
          {showFunFact ? "Hide Fun Fact" : "Shantel's Fun Fact"}
        </button>

        {showFunFact && (
          <p>
            Fun Fact: I am a certified Crisis Counselor that assist with
            Disaster Recovery.
          </p>
        )}
      </section>
    </>
  );
}
