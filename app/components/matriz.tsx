import { MatrizProps } from "../types"
import Heading from "./heading"

export default function Matriz({ data, title, reverse, className }: MatrizProps) {
    const matriz = reverse ? reverseMatriz(data) : data
    return (
        <article className={`${className} flex flex-col space-y-[12px] mx-auto min-w-[280px]`}>
            <div className="flex space-x-[12px] max-w-[280px]">
                <Heading text={title} />
                <p>{JSON.stringify(matriz)}</p>
            </div>
            <div className={`mx-auto`}>
                {matriz.map((row, rowIndex) => {
                    return (
                        <div className={`flex`} key={rowIndex}>
                            {row.map((num, colIndex) => (
                                <div className={`border border-black border-[1px] w-[60px] h-[60px] flex items-center justify-center`} key={`${rowIndex}-${colIndex}`}>
                                    <small className={`text-[24px] text-black`}>{num}</small>
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
            {reverse ? <legend className="max-w-[280px] text-gray-500">Matriz rotada 90° en sentido antihorario.</legend> : null}
        </article>
    )
}

function reverseMatriz(matriz: number[][]) {
    return matriz[0].map((_, index) => ((matriz.map(row => row[index])))
    ).reverse()
}
