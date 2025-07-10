import styled from "styled-components";
import { CounterSize } from "./PropTypes";

 const sizeMap: Record<CounterSize, string> = {
  XS: '30px',
  Small: '50px',
  Large: '70px',
}

const StyledCounter = styled.div<{size:CounterSize }>`
  width: ${({ size }) => sizeMap[size]};
  height:${({ size }) => sizeMap[size]};
background-color:red;
border-radius: 100%;
display:flex;
justify-content:center;
align-items:center;
`;
export default StyledCounter;


