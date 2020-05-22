import React from "react";
import ShowMoreText from "react-show-more-text";

export default function Article2() {
  return (
    <>
      <img src={require("../../Images/redux.png")} />
      <ShowMoreText lines={3} width={280}>
        <strong>Auther:Dan</strong>
        <br />
        This article aims to explain the basic concepts of Redux and React Redux
        as simply and as clearly as possible, both through theory and examples
        by building two very simple applications. It is divided into two parts —
        Redux alone and React-Redux (implementing Redux in React): In the first
        part, we’re going to take a look at Actions, Reducers and Store in
        Redux. Then, we are going to implement Redux in a simple, vanilla
        JavaScript application. Finally, we’ll talk about initializing our
        application state and wiring our application with the Redux DevTools
        browser extension. In the second part, we are going to implement the
        same Redux application in React and learn about React-Redux, the package
        that lets us connect with Redux from our React components.
      </ShowMoreText>
    </>
  );
}
