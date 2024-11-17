import Image from 'next/image'

interface HeaderProps {
  title: string
  backgroundImage?: string
}

export default function Header({ title, backgroundImage = "/placeholder.svg?height=400&width=1200" }: HeaderProps) {
  return (
    <div className="relative w-full min-h-[25vh]">
        <Image
          src={backgroundImage}
          alt="Contact page hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white px-4 md:px-8 pt-20">{title}</h1>
        </div>
      </div>
  )
}