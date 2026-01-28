import { z } from 'zod';

export const matrizFormSchema = z.object({
    matriz: z.string().check(ctx => {
        try {
            const matriz = JSON.parse(ctx.value)
            const unevenItem = matriz.find((array: number[]) => array.length !== matriz.length)
            if (matriz.length === 0 || unevenItem !== undefined) {
                ctx.issues.push({
                    code: "custom",
                    message: "Por favor, ingrese una matriz de NxN.",
                    input: ctx.value
                });
            }
        } catch {
            ctx.issues.push({
                code: "custom",
                message: "Por favor, ingrese una matriz de NxN.",
                input: ctx.value
            });
        }
    }),
})

export type MatrizFormValues = z.infer<typeof matrizFormSchema>;