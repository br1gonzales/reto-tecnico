"use client"

import { useState } from "react";
import Matriz from "./components/matriz";
import RotateMatrizForm from "./components/rotate-matriz-form";
import { initialMatriz } from "./constants";

export default function HomePage() {
  const [matriz, setMatriz] = useState(initialMatriz)
  return (
    <main className="p-[13px_20px]">
      <RotateMatrizForm setMatriz={setMatriz} />
      <section className="flex flex-col space-x-[40px] mt-[20px]">
        <Matriz title="Input" data={matriz} className="mt-[16px]" />
        <Matriz reverse={true} title="Output (rotado)" data={matriz} className="mt-[54px]" />
      </section>
    </main>
  )
}