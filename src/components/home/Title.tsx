import Image from 'next/image';

const Title = () => {
  return (
    <div className="flex items-center justify-center flex-wrap w-full h-1/4">
        <Image src="/imagen.png" alt='image' width={200} height={200} />
        <p className='text-4xl text-teal-500'>Mapa de Argentina - Quiz</p>
    </div>
  )
}

export default Title