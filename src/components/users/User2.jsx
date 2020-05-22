import React, { useState } from "react";

export default function User2(props) {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <img
        src={require("../../Images/image1.jpg")}
        onClick={() => {
          setisActive(true);
        }}
      />
      {isActive ? (
        <article class="message is-primary">
          <div class="message-header">
            <p>User Details!</p>
            <button
              class="delete"
              aria-label="delete"
              onClick={() => {
                setisActive(false);
              }}
            ></button>
          </div>
          <div class="message-body">
            <p>
              {
                <>
                  <h1>{props.name}</h1>
                  <h1>{props.age}</h1>
                  <h1>{props.gender}</h1>
                </>
              }
            </p>
          </div>
        </article>
      ) : null}
    </>
  );
}
