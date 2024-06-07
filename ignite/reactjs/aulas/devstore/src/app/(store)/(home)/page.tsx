import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <div className="w-[860px] h-[860px] bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          Imagem
        </div>
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold text-nowrap">
            R$ 129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <div className="w-full h-full bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          Imagem
        </div>
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold text-nowrap">
            R$ 129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <div className="w-full h-full bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          Imagem
        </div>
        <div className="absolute bottom-10 right-28 h-10 flex items-center gap-2 max-w-[280px] rounded-full border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold text-nowrap">
            R$ 129
          </span>
        </div>
      </Link>
    </div>
  )
}
