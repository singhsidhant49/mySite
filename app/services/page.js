import Image from 'next/image';
import serviceBanner from '../../public/servicebanner.webp';
import Services from '../sections/Services';
import Cta from '../components/Cta';
import Process from '../sections/Process';

export const metadata = {
    title: 'Best Website & Software Development Services in Dehradun| Shero Incorp',
    description: 'Looking for a Best reliable website and software development, Digital Marketing company to Boots your online presence at affordable Prices, Look no other than shero incorp Trust our expert team to deliver exceptional results for your business!',
    verification: {
        google: "google-site-verification=lhklmf_1C9VGhHNUP66-Jn7jmei9shUUriDTzUs9Z1Y"
    }
};

const page = () => {
    return (
        <>
            <div className="dark:bg-violet-400 dark:text-gray-900">
                <Image src={serviceBanner} alt="best website & software development serivces" className=' w-full h-auto object-cover object-center rounded' />
            </div>
            <Services />

            <section className='px-3 lg:px-28'>
                <Process />
                <Cta />
            </section>

        </>
    )
}

export default page