export type CounterSize =  "XS"  | "Small" | "Large";

export interface CounterProps {
    count: number;
    size?:CounterSize;
}

