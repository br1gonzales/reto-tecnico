import Matriz from "./components/matriz";
import RotateMatrizForm from "./components/rotate-matriz-form";
import { initialMatriz } from "./constants";

export default function HomePage() {
  return (
    <main className="p-[13px_20px]">
      <RotateMatrizForm />
      <section className="flex flex-col space-x-[40px] mt-[20px]">
        <Matriz title="Input" data={initialMatriz} className="mt-[16px]" />
        <Matriz title="Output (rotated)" data={initialMatriz} className="mt-[54px]" />
      </section>
    </main>

  )
}