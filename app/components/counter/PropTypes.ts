export type CounterSize =  "XS"  | "Small" | "Large";
export type CounterColor = "Primary" | "Negative" | "Dark" | "Light";
export type Kind = "line" | "fill";

export interface CounterProps {
    count: number;
    size:CounterSize;
    color: CounterColor;
    kind: Kind;
    maxDigits: number;
}

