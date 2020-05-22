import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";

export default function Article3() {
  return (
    <>
      <img src={require("../../Images/node.png")} />
      <ShowMoreText lines={3} width={280}>
        <strong>Auther:Dan</strong>
        <br />
        We’re excited to announce that Node.js 14 was released today! The
        highlights in this release include improved diagnostics, an upgrade of
        V8, an experimental Async Local Storage API, hardening of the streams
        APIs, removal of the Experimental Modules warning, and the removal of
        some long deprecated APIs. Node.js 14 replaces Node.js 13 as our current
        release line. As per the release schedule
        (https://github.com/nodejs/Release#release-schedule), Node.js 14 will be
        the `Current` release for the next 6 months, and then promoted to
        Long-term Support (LTS) in October 2020. As always, corporate users
        should wait to upgrade their production deployments until October when
        Node.js is promoted to LTS. However, now is the best time to start
        testing applications with Node.js 14, and try out new features. As a
        reminder — both Node.js 12 and Node.js 10 will remain in long-term
        support until April 2022 and April 2021 respectively (more details on
        the LTS strategy here).
      </ShowMoreText>
    </>
  );
}
