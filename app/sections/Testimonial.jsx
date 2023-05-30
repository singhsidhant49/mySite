import Image from 'next/image'
import testimonial1 from '../../public/testimonial1.webp'
import testimonial2 from '../../public/testimonial2.webp'
import testimonial3 from '../../public/testimonial3.webp'

const Testimonial = () => {
  return (
    <section className="text-neutral-700 dark:text-neutral-300">
    <div className="mx-auto py-10 text-center md:max-w-xl lg:max-w-3xl">
      <h3 className="mb-6 text-3xl font-bold">WHAT ARE CLIENTS SAY ABOUT US</h3>
      <p className="mb-6 pb-2 md:mb-12 md:pb-0">
      Words of Praise from Our Valued Clients.: Discover the Impact of ABC Company on Businesses
      </p>
    </div>
    <div className="grid gap-6 text-center md:grid-cols-3">
      <div>
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
          <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
          <div
            className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <Image src={testimonial1} alt="feature"  loading="lazy"  className="h-full w-full object-cover object-center" />
          </div>
          <div className="p-6">
            <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
            <hr />
            <p className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24">
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              We are thrilled with the exceptional services provided by Shero Incorp for our website and software needs. Their team demonstrated a profound understanding of our vision and translated it into a stunning and functional website. From the initial consultation to the final delivery, their professionalism and attention to detail were evident in every step of the process 
            </p>
          </div>
        </div>
      </div>
  
      <div>
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
          <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
          <div
            className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
            <Image src={testimonial2} alt="feature"  loading="lazy"  className="h-full w-full object-cover object-center" />
          </div>
          <div className="p-6">
            <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
            <hr />
            <p className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24">
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Shero Incorp&apos;s commitment to excellence is unmatched. They meticulously crafted a user-friendly interface that beautifully showcases our brand and captivates our target audience. Their creative design solutions and intuitive navigation have greatly enhanced our online presence, resulting in increased traffic and conversions also their software help us in automating out tasks
            </p>
          </div>
        </div>
      </div>
  
     
      <div>
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
          <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
          <div
            className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
            <Image src={testimonial3} alt="feature"  loading="lazy"  className="h-full w-full object-cover object-center" />
          </div>
          <div className="p-6">
            <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
            <hr />
            <p className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24">
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              The collaboration with Shero Incorp was a seamless experience. Their communication was prompt, efficient, and transparent. They listened attentively to our ideas and requirements, providing valuable insights and suggestions along the way. Their dedication to delivering on time and within budget was impressive. Shero Incorp is the best digital partner to have.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    

  )
}

export default Testimonial