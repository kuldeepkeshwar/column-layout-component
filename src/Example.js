import React from "react";
import { LiveProvider, LivePreview } from "react-live";
import Code from "./Code";
import { Card } from "./components";
export default function({ scope }) {
  return ({ code, cardProps }) => (
    <>
      <Card {...cardProps}>
        <LiveProvider code={code} scope={{ ...scope }}>
          <LivePreview />
        </LiveProvider>
      </Card>
      <Code code={code} />
    </>
  );
}
