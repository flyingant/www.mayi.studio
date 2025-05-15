import Image from 'next/image'
import DefaultNameTag from '@/components/DefaultNameTag'
import ICPTag from '@/components/ICPTag'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
      <div className="relative w-[640px] h-[640px] transition-all duration-300 ease-in-out hover:scale-105">
        <Image
          src="/assets/studio_640_640.svg"
          alt="Studio"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <DefaultNameTag name="MaYi" />
        <ICPTag />
      </div>
    </div>
  )
}
