import Image from 'next/image';
import missionImage from '../../public/mission.webp';
import treeImage from '../../public/tree.webp';

const About = () => (
  <section id="section2" className="text-gray-600 body-font overflow-hidden ">
    <div className=" bg-yellow-400  flex self-center  h-4/6 absolute -left-16 w-28 shadow-[5px_8px_70px_0px_#fed7d7] -z-10 " style={{ borderRadius: '200%' }} />
    <div className="container   py-16 ">
      <div className="flex flex-col md:flex-row z-10  ">
        <div className=" w-full  mt-12 flex-1  ">
          <div className="text-sm text-white font-bold py-1 mb-5 px-5 w-1/2 bg-blue-600 rounded-full tracking-widest">WHO WE ARE</div>
          <h1 className="text-blue-600 text-3xl font-bold mb-1">We Are Leading Software Developemnt & Digital Marketing Agency!</h1>
          <div className="flex mb-4">
          </div>
          <p className="leading-relaxed mb-1 font-medium">We are a team of experienced software developers and digital marketers dedicated to helping businesses succeed online. From website and app development to social media marketing and SEO, we offer customized solutions that help our clients stand out in the digital world. Our passion is to help our clients achieve their goals and thrive in the ever-changing digital landscape.</p>

          <div className="flex items-center ">
            <Image src={missionImage} alt="website development"  loading='lazy' width={150} className=' h-auto object-cover object-center rounded' />
            <span className="font-bold text-blue-600 text-lg">We transform businesses with creative and customized digital strategies!</span>
          </div>
        </div>

        <div className=" flex-1 md:mt-8">
          <Image src={treeImage} alt="Grow Business"  loading='lazy' className='w-full h-full object-cover object-center rounded' layout="responsive" />
        </div>
      </div>
    </div>
  </section>
);

export default About;

