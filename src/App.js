import React from "react";
import { Columns } from "./Columns";
import { ThemeProvider } from "emotion-theming";
import ExampleHOF from "./Example";
import { Text, Box } from "./components";

const Example = ExampleHOF({ scope: { Columns, Box } });

function InlineExamples() {
  return (
    <>
      <Text size="24" padding="0 0 8px 0">
        Inline
      </Text>
      <Example
        cardProps={{ width: "max-content" }}
        code={`
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
`}
      />
    </>
  );
}
function AlignYExamples() {
  return (
    <>
      <Text size="24">AlignY</Text>
      <Text padding="0 0 8px 0">Start</Text>
      <Example
        code={`
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
`}
      />

      <br />
      <Text padding="0 0 8px 0">End</Text>
      <Example
        code={`
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
`}
      />

      <br />
      <Text padding="0 0 8px 0">Center</Text>
      <Example
        code={`
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
`}
      />
    </>
  );
}

function AlignExamples() {
  return (
    <>
      <Text size="24">Align</Text>
      <Text padding="0 0 8px 0">Start</Text>
      <Example
        code={`
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
`}
      />
      <br />
      <Text padding="0 0 8px 0">End</Text>
      <Example
        code={`
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
        `}
      />
      <br />
      <Text padding="0 0 8px 0">Center</Text>
      <Example
        code={`
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
        `}
      />
      <br />
      <Text padding="0 0 8px 0">Space Between</Text>
      <Example
        code={`
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
      `}
      />

      <br />
      <Text padding="0 0 8px 0">Space Around</Text>
      <Example
        code={`
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
      `}
      />

      <br />
      <Text padding="0 0 8px 0">Space Evenly</Text>
      <Example
        code={`
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
      `}
      />
    </>
  );
}
function ColumnGapExamples() {
  return (
    <>
      <Text size="24">Column Gap</Text>
      <Text padding="0 0 8px 0">Column Gap: 20px</Text>
      <Example
        code={`
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
      `}
      />
      <br />
      <Text padding="0 0 8px 0">Column Gap: 40px</Text>
      <Example
        code={`
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
      `}
      />
    </>
  );
}
function ColumnWidthExamples() {
  return (
    <>
      <Text size="24">Column Width</Text>
      <Text padding="0 0 8px 0">Column Width: 100px</Text>
      <Example
        code={`
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
</Columns>`}
      />
      <br />
      <Text padding="0 0 8px 0">Column Width: 150px</Text>
      <Example
        code={`
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
</Columns>`}
      />
      <br />
      <Text padding="0 0 8px 0">Column Width: content</Text>
      <Example
        code={`
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
</Columns>`}
      />
      <br />
      <Text padding="0 0 8px 0">Column Width: varying</Text>
      <Example
        code={`
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
</Columns>`}
      />
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
      <Text size="24" padding="0 0 8px 0">
        Theming(scale based)
      </Text>
      <Example
        code={`
// space: [0, "4px", "8px", "12px", "16px", "20px"]
// sizes: [0, "100px", "150px", "200px"]

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
`}
      />
    </ThemeProvider>
  );
}
export default function App() {
  return (
    <>
      <Text size="30" padding="0 0 10px 0">
        Column Layout(Component) using CSS Grid
      </Text>
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
