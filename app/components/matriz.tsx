import { MatrizProps } from "../types"
import Heading from "./heading"

export default function Matriz({ data, title, rotate, className }: MatrizProps) {
    const matriz = rotate ? data : rotateMatriz(data)
    return (
        <article className={`${className} mx-auto`}>
            <div>
                <Heading text={title} />
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
        </article>
    )
}

function rotateMatriz(matriz: number[][]) {
    return matriz[0].map((_, index) =>
        matriz.map(row => row[index]).reverse()
    );
}
