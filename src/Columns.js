import React from "react";
import styled from "@emotion/styled";

const alignments = [
  "start",
  "end",
  "center",
  "stretch",
  "space-around",
  "space-between",
  "space-evenly"
];

const Grid = styled.div`
  display: grid;
  background: hotpink;
  width: ${({ inline }) => (inline ? "max-content" : "auto")};
  column-gap: ${({ space }) => space || "0px"};
  grid-template-columns: ${({ widths = [] }) => widths.join(" ")};
  justify-content: ${({ align }) => align || "stretch"};
  align-content: ${({ alignY }) => alignY || "stretch"};
`;
const Cell = styled.div``;
export function Columns({ children, space, align, alignY, inline }) {
  const widths = [];
  const Columns = React.Children.toArray(children).map(
    ({ props: { width, children, ...rest }, type }) => {
      widths.push(width || "auto");
      return React.createElement(type, { ...rest }, children);
    }
  );
  return (
    <Grid
      space={space}
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
