import pone from '../../public/p1.webp';
import ptwo from '../../public/p2.webp';
import pfive from '../../public/p5.webp';
import portfolio2 from '../../public/portfolio2.webp';
import portfolio3 from '../../public/portfolio3.webp';
import portfolio4 from '../../public/portfolio4.webp';
import portfolio5 from '../../public/portfolio5.webp';
import portfolio13 from '../../public/portfolio13.webp';
import portfolio1 from '../../public/portfolio1.webp';
import WorkImg from '../components/WorkImage'

const Work = () => (
  <>
    <section id="section4" className="text-gray-600 body-font overflow-hidden mt-10 ">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">

        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)" width="52" height="24"></rect>
              </svg>
            </span>
            OUR WORK / PORTFOLIO
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Check out some of our latest projects and see how we&apos;ve helped our clients achieve their business goals.
          </p>
        </div>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3  md:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">

        <WorkImg lurl="https://flashfeed.netlify.app/login" iurl={pone} title="FlashFeed" description="It is an application is a platform that allows users to upload, share, and view images. These platforms can be used for personal purposes, such as sharing photos with friends and family, or for professional purposes, such as displaying a portfolio of work or marketing products and services." />

        <WorkImg lurl="https://sid-youtube-clone.netlify.app/" iurl={ptwo} title="Video Streaming App" description="My video streaming app allows users to stream and watch their favorite videos online. With a vast collection of movies, TV shows, and other videos, users can easily search and discover new content to enjoy. The app provides a user-friendly interface that allows users to easily navigate and find what they're looking for" />

        <WorkImg lurl="/" iurl={portfolio1} title="Portfolio Website" description="A portfolio website is an online platform that showcases your skills, experience, and accomplishments to potential clients or employers. It is a place where you can highlight your best work, share your story, and make a strong first impression." />

        <WorkImg lurl="http://siddhant-singh.great-site.net/" iurl={pfive} title="Gym Mangement System" description="A gym management system is a software application that assists gym owners and managers in managing their gym operations. It provides tools for member management, scheduling, payment processing, staff management, and reporting etc." />

        <WorkImg iurl={portfolio2} title="Nft Website" description="Explore a groundbreaking NFT website, where art and collectibles thrive. Discover unique digital assets, connect with artists, and own provably scarce pieces. Immerse yourself in the world of blockchain-based ownership and creativity. Welcome to the future of digital art!" />

        <WorkImg iurl={portfolio3} title="SkillMentor" description="he premier online platform for course creators and learners alike. Our website empowers you to share your expertise by uploading and offering your own courses, reaching a global audience hungry for knowledge. As a learner, you have access to a vast library of high-quality courses, covering a wide range of topics and taught by passionate instructors. " />

        <WorkImg iurl={portfolio4} title="Business Landing Page" description="Welcome to our business landing page, a shining star in our software portfolio. With our comprehensive suite of tools and resources, we empower businesses to create a powerful online presence. Explore our captivating design templates and discover effective marketing strategies. " />

        <WorkImg iurl={portfolio5} title="Medical Buisness Website" description="our medical business website, designed to provide a seamless online experience for patients and healthcare professionals. Discover our comprehensive range of services, cutting-edge technologies, and dedicated team of experts. From appointment scheduling to accessing valuable resources, our website delivers convenience and personalized care." />

        <WorkImg iurl={portfolio13} title="Grocery store website" description="Welcome to our game-changing grocery store website, tailored to elevate your business to new heights. With our cutting-edge platform, you can revolutionize the way you serve your customers and expand your reach in the digital landscape." />

      </div>
      <div className="text-center">
        <a
          href="/portfolio"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          EXPLORE MORE
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </section>
  </>
);

export default Work;



