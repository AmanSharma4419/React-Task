import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";

export default function Article1() {
  return (
    <>
      <img src={require("../../Images/react.png")} />
      <ShowMoreText lines={3} width={280}>
        <strong>Auther:Dan</strong>
        <br />
        <p>
          React is a JavaScript library created for building fast and
          interactive user interfaces for web and mobile applications. It is an
          open-source, component-based, front-end library responsible only for
          the application’s view layer. In Model View Controller (MVC)
          architecture, the view layer is responsible for how the app looks and
          feels. React was created by Jordan Walke, a software engineer at
          Facebook.
        </p>
      </ShowMoreText>
    </>
  );
}
