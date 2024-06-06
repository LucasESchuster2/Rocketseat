import Image from 'next/image'
import logoImg from '../assets/Logo.svg'

export default function Header() {
  return (
    <header className="py-8 w-full max-w-[1180px] mx-auto mt-0">
      <Image src={logoImg} alt="" />
    </header>
  )
}
