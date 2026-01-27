import { MatrizProps } from "../types"
import Heading from "./heading"

export default function Matriz({ data, title, rotate, className }: MatrizProps) {
    return (
        <article className={`${className} mx-auto`}>
            <div>
                <Heading text={title} />
            </div>
            <div className={`mx-auto ${rotate ? '-rotate-90' : null}`}>
                {data.map((row, rowIndex) => {
                    return (
                        <div className={`flex `} key={rowIndex}>
                            {row.map((num, colIndex) => (
                                <div className={`border border-black border-[1px] w-[60px] h-[60px] flex items-center justify-center`} key={`${rowIndex}-${colIndex}`}>
                                    <small className={`text-[24px] text-black ${rotate ? 'rotate-90' : null}`}>{num}</small>
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </article>
    )
}