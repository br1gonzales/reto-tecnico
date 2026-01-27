import { ChangeEvent } from "react"
import { UseFormRegister } from "react-hook-form";
import { RotateMatrizFormValues } from "./schemas";

export interface TextInputProps {
    label: string,
    placeholder: string,
    name: string
    register: UseFormRegister<RotateMatrizFormValues>,
    error: string | undefined
}

export interface MatrizProps {
    title: string,
    data: number[][],
    className?: string
}

export interface RotateFormProps {
    setInput: ChangeEvent<Element>
}

export interface InvalidMatrizMessageProps {
    message: string,
    className?: string
}

export interface HeadingProps {
    text: string,
    className?: string
}