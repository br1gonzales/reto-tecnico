import { z } from 'zod';

export const rotateMatrizFormSchema = z.object({
    matriz: z.string().check(ctx => {
        if (ctx.value.length < 4) {
            ctx.issues.push({
                code: "too_small",
                minimum: 3,
                origin: "string",
                inclusive: true,
                message: "Por favor, ingrese un listado bidimensional.",
                input: ctx.value
            });
        }
    }),
})

export type RotateMatrizFormValues = z.infer<typeof rotateMatrizFormSchema>;