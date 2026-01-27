import { z } from 'zod';

export const rotateMatrizFormSchema = z.object({
    matriz: z.string().check(ctx => {
        try {
            const matriz = JSON.parse(ctx.value)
            const unevenItem = matriz.find((array: number[]) => array.length !== matriz.length)
            if (unevenItem !== undefined) {
                ctx.issues.push({
                    code: "custom",
                    message: "Por favor, ingrese un listado bidimensional.",
                    input: ctx.value
                });
            }
        } catch {
            ctx.issues.push({
                code: "custom",
                message: "Por favor, ingrese un listado bidimensional.",
                input: ctx.value
            });
        }
    }),
})

export type RotateMatrizFormValues = z.infer<typeof rotateMatrizFormSchema>;