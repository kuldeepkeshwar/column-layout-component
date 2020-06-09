import React from "react";
import styled from "@emotion/styled";
import { Columns } from "./Columns";
import { ThemeProvider } from "emotion-theming";
const yellowish = "rgb(245, 186, 76)";
const bluish = "rgb(117, 172, 253)";

const Card = styled.div`
  background: ${({ bg }) => bg || yellowish};
  width: ${({ width }) => width || "auto"};
`;
const Box = styled.div`
  background: ${({ bg }) => bg || bluish};
  font-size: 20px;
  padding: 8px 0 8px 0;
  height: ${({ height }) => height || "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: ${({ size = 12 }) => `${size}px`};
  font-weight: bold;
  text-align: center;
`;
function InlineExamples() {
  return (
    <>
      <Text size="24">Inline</Text>
      <Card width="max-content">
        <Columns gap="20px" inline={true}>
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
    </>
  );
}
function AlignYExamples() {
  return (
    <>
      <Text size="24">AlignY</Text>
      <Text>Start</Text>
      <Card>
        <Columns gap="20px" alignY="start">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box height="40px">Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>End</Text>
      <Card>
        <Columns gap="20px" alignY="end">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box height="40px">Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Center</Text>
      <Card>
        <Columns gap="20px" alignY="center">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box height="40px">Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
    </>
  );
}

function AlignExamples() {
  return (
    <>
      <Text size="24">Align</Text>
      <Text>Start</Text>
      <Card>
        <Columns gap="20px" align="start">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>End</Text>
      <Card>
        <Columns gap="20px" align="end">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Center</Text>
      <Card>
        <Columns gap="20px" align="center">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Space Between</Text>
      <Card>
        <Columns align="space-between">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Space Around</Text>
      <Card>
        <Columns align="space-around">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Space Evenly</Text>
      <Card>
        <Columns align="space-evenly">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
    </>
  );
}
function ColumnGapExamples() {
  return (
    <>
      <Text size="24">Column Gap</Text>
      <Text>Column Gap: 20px</Text>
      <Card>
        <Columns gap="20px">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Column Gap: 40px</Text>
      <Card>
        <Columns gap="40px">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
    </>
  );
}
function ColumnWidthExamples() {
  return (
    <>
      <Text size="24">Column Width</Text>
      <Text>Column Width: 100px</Text>
      <Card>
        <Columns gap="20px">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Column Width: 150px</Text>
      <Card>
        <Columns gap="20px">
          <Columns.Column width="150px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="150px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="150px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Column Width: content</Text>
      <Card>
        <Columns gap="20px">
          <Columns.Column width="content">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="content">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="content">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
      <br />
      <Text>Column Width: varying</Text>
      <Card>
        <Columns gap="20px">
          <Columns.Column width="content">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="100px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="150px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
    </>
  );
}
function ScaleExample() {
  const theme = {
    space: [0, "4px", "8px", "12px", "16px", "20px"],
    sizes: [0, "100px", "150px", "200px"]
  };
  return (
    <ThemeProvider theme={theme}>
      <Text size="24">Theming(scale based)</Text>
      <Card>
        <Columns gap="5">
          <Columns.Column width="1">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="2">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="3">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
    </ThemeProvider>
  );
}
export default function App() {
  return (
    <>
      <ColumnWidthExamples />
      <br />
      <ColumnGapExamples />
      <br />
      <AlignExamples />
      <br />
      <AlignYExamples />
      <br />
      <InlineExamples />
      <br />
      <ScaleExample />
    </>
  );
}
