import { MatrizFormValues } from "../schemas";
import { TextInputProps } from "../types";
import { FieldError } from "./field-error";

export default function TextInput({ label, placeholder, name, register, error }: TextInputProps) {
    return (
        <fieldset className="w-full flex flex-col space-y-[4px]">
            <label className="font-medium text-[15px] text-black" htmlFor={name}>{label}</label>
            <input className="bg-[#F9F9F9] p-[6px_10px]" placeholder={placeholder} id={name} type="text" {...register(name as keyof MatrizFormValues)} />
            {error ? <FieldError className="mt-[4px]" message={error} /> : null}
        </fieldset>
    )
}