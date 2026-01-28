import { Dispatch, SetStateAction } from "react"
import { UseFormRegister } from "react-hook-form";
import { MatrizFormValues } from "./schemas";

export interface TextInputProps {
    label: string,
    placeholder: string,
    name: string
    register: UseFormRegister<MatrizFormValues>,
    error: string | undefined
}

export interface MatrizProps {
    reverse?: boolean,
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

export interface MatrizFormProps {
    setMatriz: Dispatch<SetStateAction<number[][]>>
}