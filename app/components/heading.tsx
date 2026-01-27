import { HeadingProps } from "../types";

export default function Heading({ text, className }: HeadingProps) {
    return (
        <h6 className={`text-[15px] ${className}`}>{text}</h6>
    )
}