import React from "react";
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";

export default function Friends() {
  return (
    <div className="App">
      <User1 name="Ryan" age="20" gender="Male" />
      <User2 name="Deno" age="21" gender="Male" />
      <User3 name="Mack" age="22" gender="Male" />

    </div>
  );
}
