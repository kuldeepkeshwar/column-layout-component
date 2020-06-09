import styled from "@emotion/styled";

export const yellowish = "rgb(245, 186, 76)";
export const bluish = "rgb(117, 172, 253)";
export const Card = styled.div`
  background: ${({ bg }) => bg || yellowish};
  width: ${({ width }) => width || "auto"};
`;
export const Box = styled.div`
  background: ${({ bg }) => bg || bluish};
  font-size: 20px;
  padding: 8px 0 8px 0;
  height: ${({ height }) => height || "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.div`
  font-size: ${({ size = 12 }) => `${size}px`};
  font-weight: bold;
  text-align: center;
  padding: ${({ padding }) => padding};
`;
