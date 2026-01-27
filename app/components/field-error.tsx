import { FieldErrorProps } from "../types";

export function FieldError({ message, className }: FieldErrorProps) {
    return (
        <span className={`font-medium text-[15px] text-[#C01010] ${className}`}>{message}</span>
    )
}