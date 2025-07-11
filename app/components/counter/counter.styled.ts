import styled from "styled-components";
import { CounterSize, CounterColor, Kind } from "./PropTypes";

 const widthMap: Record<CounterSize, number> = {
  XS: 20,
  Small: 30,
  Large: 35,
}

 const heightMap: Record<CounterSize, number> = {
  XS: 20,
  Small: 30,
  Large: 35,
}

 const colorMap: Record<CounterColor, string> = {
  Primary: '#0073ea',
  Negative: '#d83a52',
  Dark: '#323338',
  Light: '#e7e9ef'
}

const textLinelMap: Record<CounterColor, string> = {
  Primary: '#0073ea',
  Negative: '#d83a52',
  Dark: '#323338',
  Light: '#000000'
}

const textFilllMap: Record<CounterColor, string> = {
  Primary: '#ffffff',
  Negative: '#ffffff',
  Dark: '#ffffff',
  Light: '#000000'
}

const fontMap: Record<CounterSize, number> = {
  XS: 6,
  Small: 8,
  Large: 16,
}

const StyledCounter = styled.div<{size:CounterSize, color:CounterColor, kind: Kind, count: number, maxDigits: number }>`
    color: ${({color, kind}) => kind === "line" ? `${textLinelMap[color]}` : textFilllMap[color] };
    font-size: ${({ size }) =>`${fontMap[size]}px`};
    min-width: ${({ size }) => `${widthMap[size]}px`}; 
    height:${({ size }) => `${heightMap[size]}px`};
    padding: 0 6px;
    background-color:${({color, kind}) => kind !== "line" ? colorMap[color] : "" };
    border-radius: ${({ count }) => (count.toString().length ==1)? '50%': "12px"};
    display:flex;
    justify-content:center;
    align-items:center;
    border: ${({color, kind}) => kind === "line" ? `${colorMap[color]} solid 1px` : "" };
    box-sizing: border-box;
    overflow: hidden; 
`;
export default StyledCounter;


