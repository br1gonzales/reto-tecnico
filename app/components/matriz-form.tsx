"use client"

import { useForm } from "react-hook-form"
import { matrizFormSchema, MatrizFormValues } from "../schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import TextInput from "./text-input"
import { MatrizFormProps } from "../types"
import { defaultMatrizValue } from "../constants"

export default function MatrizForm({ setMatriz }: MatrizFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<MatrizFormValues>({
        resolver: zodResolver(matrizFormSchema),
        mode: "onChange",
        defaultValues: {
            matriz: defaultMatrizValue
        }
    })

    async function onSubmit(data: MatrizFormValues) {
        const parsedMatriz = JSON.parse(data.matriz)
        setMatriz(parsedMatriz)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-[24px]">
            <TextInput register={register} label="Matriz" name="matriz" placeholder="[ [1,2], [3,4] ]" error={errors["matriz"]?.message} />
            <button disabled={!isValid} className="p-4 w-full p-[10px_0] text-white text-[15px] border-[2px] border-black font-medium bg-black hover:bg-white hover:border-black transition duration-100 hover:cursor-pointer hover:text-black disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed">
                Generar matriz</button>
        </form>
    )
}