import React from "react";
import Homepage from "./components/articles/Homepage";
import MyErrorBoundary from "./components/errorboundaries/MyErrorBoundary"
import Counter from "./components/counter/counter"
// Please Comment Out Friends Component To Load It Into Browser

// import Friends from "./components/users/Friends";

function App() {
  const refreshPage = () => window.location.reload(false)
  return (
    <center>
      <div className="App">
        {/* <Friends /> */}
        {/* <Homepage /> */}
        <MyErrorBoundary>
          <Counter />
        </MyErrorBoundary>
        <hr />
        <button onClick={refreshPage}>
          Refresh Page
      </button>
      </div>
    </center>
  );
}

export default App;
