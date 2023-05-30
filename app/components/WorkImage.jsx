import Image from 'next/image'
import Link from 'next/link'

const WorkImage = ({ lurl, iurl, title, description }) => {
  return (
    <>
      {lurl ? (<Link href={lurl} aria-label="View Item">
        <div className="   relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="w-full h-60 md:h-64 xl:h-80  rounded">
            <Image src={iurl} alt="website development" layout="fill" loading="lazy" className="object-cover object-center" />
          </div>

          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">
              {title}
            </p>
            <p className="text-sm tracking-wide text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </Link>) : (
      <div  aria-label="View Item">
        <div className="   relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="w-full h-60 md:h-64 xl:h-80  rounded">
            <Image src={iurl} alt="website development" layout="fill" loading="lazy" className="object-cover object-center" />
          </div>

          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">
              {title}
            </p>
            <p className="text-sm tracking-wide text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default WorkImage