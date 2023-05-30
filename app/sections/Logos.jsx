import Image from 'next/image'
import coty from '../../public/coty.svg'
import ge from '../../public/ge.svg'
import corner  from '../../public/corner.webp'  
import sbueaty  from '../../public/sbueaty.webp'
import javelin  from '../../public/javelin.webp'
import logic  from '../../public/logic.webp'
import zeina  from '../../public/zeina.webp'
import oldr  from '../../public/oldr.webp'

const Logos = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden pt-20 ">
      <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
    
        <div className="flex items-center justify-center">
         
          <Image src={coty} alt="website development" loading='lazy' className='w-50 h-50 object-cover object-center rounded'/>
          
        </div>
        <div className="flex items-center justify-center">
          
          <Image src={ge} alt="software development" loading='lazy' className='w-50 h-50 object-cover object-center rounded'/>
        </div>
        <div className="flex items-center justify-center">
        <Image src={corner} alt="website development" loading='lazy' className='w-50 h-50 object-cover object-center rounded'/>
          
        </div>
        <div className="flex items-center justify-center">
        <Image src={sbueaty} alt="software development" loading='lazy' className='w-50 h-50 object-cover object-center rounded'/>
          
        </div>
        <div className="flex items-center justify-center">
        <Image src={javelin} alt="mobile app development" loading='lazy' className='w-50 h-50 object-cover object-center rounded'/>
          
        </div>
        <div className="flex items-center justify-center">
        <Image src={logic} alt="website development" loading='lazy' className='w-50 h-50 object-cover object-center rounded'/>

        </div>
        <div className="flex items-center justify-center">
        <Image src={zeina} alt="website development" loading='lazy' className='w-50 h-50 object-cover object-center rounded'/>

        </div>
        <div className="flex items-center justify-center">
        <Image src={oldr} alt="software development" loading='lazy' className='w-50 h-50 object-cover object-center rounded'/>

        </div>
      </div>
      <p className="mt-10 text-base font-medium text-center text-gray-500">
        From startups to Fortune&apos;s the world&apos;s best teams use our tool to power their internal apps.
      </p>
    </section>
  )
}

export default Logos