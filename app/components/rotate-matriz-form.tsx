"use client"

import { useForm } from "react-hook-form"
import { rotateMatrizFormSchema, RotateMatrizFormValues } from "../schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import TextInput from "./text-input"

export default function RotateMatrizForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<RotateMatrizFormValues>({
        resolver: zodResolver(rotateMatrizFormSchema),
        mode: "onChange"
    })

    async function onSubmit(data: RotateMatrizFormValues) {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-[24px]">
            <TextInput register={register} label="Matriz" name="matriz" placeholder="[ [1,2], [3,4] ]" error={errors["matriz"]?.message} />
            <button disabled={!isValid} className="p-4 w-full p-[10px_0] text-white text-[15px] border-[2px] border-black font-medium bg-black hover:bg-white hover:border-black transition duration-100 hover:cursor-pointer hover:text-black">
                Renderizar matriz</button>
        </form>
    )
}