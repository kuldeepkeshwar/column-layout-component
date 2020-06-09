import React from "react";
import styled from "@emotion/styled";

const alignments = [
  "start",
  "end",
  "center",
  "stretch",
  "gap-around",
  "gap-between",
  "gap-evenly"
];
const alignmentsY = ["start", "end", "center", "stretch"];

const Grid = styled.div`
  display: grid;
  width: ${({ inline }) => (inline ? "max-content" : "auto")};
  column-gap: ${({ gap }) => gap || "0px"};
  grid-template-columns: ${({ widths = [] }) => widths.join(" ")};
  justify-content: ${({ align }) => align || "stretch"};
  align-items: ${({ alignY }) => alignY || "stretch"};
`;
const Cell = styled.div``;
export function Columns({ children, gap, align, alignY, inline }) {
  const widths = [];
  const Columns = React.Children.toArray(children).map(
    ({ props: { width, children, ...rest }, type }) => {
      widths.push(width === "content" ? "max-content" : width || "1fr");
      return React.createElement(type, { ...rest }, children);
    }
  );
  return (
    <Grid
      gap={gap}
      widths={widths}
      align={align}
      alignY={alignY}
      inline={inline}
    >
      {Columns}
    </Grid>
  );
}
function Column({ children }) {
  return <Cell>{children}</Cell>;
}
Columns.Column = Column;
