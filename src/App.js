import React from "react";
import styled from "@emotion/styled";
import { Columns } from "./Columns";

const yellowish = "rgb(245, 186, 76)";
const bluish = "rgb(117, 172, 253)";

const Card = styled.div`
  background: ${({ bg }) => bg || yellowish};
`;
const Box = styled.div`
  background: ${({ bg }) => bg || bluish};
  font-size: 20px;
  padding: 8px;
  height: ${({ height }) => height || "auto"};
`;
const Text = styled.div`
  font-size: ${({ size = 12 }) => `${size}px`};
  font-weight: bold;
  text-align: center;
`;
function AlignYExamples() {
  return (
    <>
      <Text size="24">AlignY</Text>
      <Text>Start</Text>
      <Card>
        <Columns space="20px" alignY="start">
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
        <Columns space="20px" alignY="end">
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
        <Columns space="20px" alignY="center">
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
      <Text>Space Between</Text>
      <Card>
        <Columns alignY="space-between">
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
      <Text>Space Around</Text>
      <Card>
        <Columns alignY="space-around">
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
      <Text>Space Evenly</Text>
      <Card>
        <Columns alignY="space-evenly">
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
        <Columns space="20px" align="start">
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
        <Columns space="20px" align="end">
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
        <Columns space="20px" align="center">
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
        <Columns space="20px">
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
        <Columns space="40px">
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
        <Columns space="20px">
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
        <Columns space="20px">
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
      <Text>Column Width: varying</Text>
      <Card>
        <Columns space="20px">
          <Columns.Column width="100px">
            <Box>Column 1</Box>
          </Columns.Column>
          <Columns.Column width="150px">
            <Box>Column 2</Box>
          </Columns.Column>
          <Columns.Column width="200px">
            <Box>Column 3</Box>
          </Columns.Column>
        </Columns>
      </Card>
    </>
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
    </>
  );
}
