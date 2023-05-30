import Image from 'next/image';
import processImage from '../../public/aboutimg.webp';

const Process = () => (
  <>
    <section className="text-gray-600  body-font overflow-hidden">

      <div className="  py-12  ">
        <div className=" mx-auto flex flex-wrap bg-gray-200 ">

          <div className="lg:w-2/5 w-full lg:h-4/5  h-64 object-cover bg-slate-300 object-center rounded ">

         <Image src={processImage} alt="development-work-process" loading="lazy" className=' h-full w-full object-cover object-center '/> 
          </div>
          <div className="lg:w-3/5 w-full px-3 lg:px-5 lg:py-6  mt-6 lg:mt-0">
            <div className="text-sm text-white font-bold py-1 mb-5 px-5 w-1/2 bg-blue-600 rounded-full tracking-widest">HOW WE WORK?</div>
            <h1 className="text-gray-800   text-lg font-bold mb-5">A proven process for delivering high-quality software development and digital marketing services!</h1>
            <div className="flex mt-6 items-center pb-5   mb-5">
              <div className="space-y-3 w-full sm:mx-auto ">
                <div className="flex items-center p-4 duration-300 transform border border-blue-600 rounded shadow hover:scale-105 sm:hover:scale-110">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800  font-bold text-md">
                    Discovery: We deeply understand our client&apos;s needs and goals, ensuring tailored solutions that drive business growth.
                  </span>
                </div>
                <div className="flex items-center p-4 duration-300 transform border border-blue-600 rounded shadow hover:scale-105 sm:hover:scale-110">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800  font-bold text-md">Strategy: Our experts develop a comprehensive plan aligned with your goals, so every step we take is purposeful and effective.</span>
                </div>
                <div className="flex items-center p-4 duration-300 transform border border-blue-600 rounded shadow hover:scale-105 sm:hover:scale-110">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800  font-bold text-md">Design: From software wireframes to marketing plans, our team creates detailed blueprints for a strong foundation.</span>
                </div>
                <div className="flex items-center p-4 duration-300 transform border border-blue-600 rounded shadow hover:scale-105 sm:hover:scale-110">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800  font-bold text-md">
                    Development: Our experienced developers and marketers build and deploy high-quality software and campaigns that drive results.
                  </span>
                </div>
                <div className="flex items-center p-2 duration-300 transform border border-blue-600 rounded shadow hover:scale-105 sm:hover:scale-110">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800  font-bold text-md">
                    Testing and Quality Assurance: We conduct extensive testing and quality assurance.
                  </span>
                </div>

                <div className="flex items-center p-2 duration-300 transform border border-blue-600 rounded shadow hover:scale-105 sm:hover:scale-110">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800  font-bold text-md">
                    Launch: We launch with precision, ensuring everything runs smoothly and effectively.
                  </span>
                </div>

                <div className="flex items-center p-2 duration-300 transform border border-blue-600 rounded shadow hover:scale-105 sm:hover:scale-110">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800  font-bold text-md">
                    Optimization and Maintenance: We continue to monitor and optimize campaigns or provide ongoing maintenance and support for software development projects.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Process;
