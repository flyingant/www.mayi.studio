import Image from 'next/image'
import DefaultNameTag from '@/components/DefaultNameTag'
import ICPTag from '@/components/ICPTag'

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <DefaultNameTag name="MaYi" />
      <ICPTag />
    </div>
  )
}
