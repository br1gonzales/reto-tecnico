import { Dispatch, SetStateAction } from "react"
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
    rotate?: boolean,
    title: string,
    data: number[][],
    className?: string
}

export interface FieldErrorProps {
    message: string,
    className?: string
}

export interface HeadingProps {
    text: string,
    className?: string
}

export interface RotateMatrizFormProps {
    setMatriz: Dispatch<SetStateAction<number[][]>>
}