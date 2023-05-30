'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, number, subject }),
      });
      const data = await response.text();
      toast.success('Email sent successfully!');
      setLoading(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setNumber('');
    } catch (error) {
      toast.error('Internal Server Error!');
      setLoading(false);
    }
  };

  return (
    <>

      <section id="section5" className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13780.80393093548!2d78.060078755603!3d30.288339499304236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682778841417!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container px-5 py-16 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">GET FREE QUOTE </h2>
            <p className="leading-relaxed mb-5 text-gray-600">Contact our team for questions, feedback, or support</p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="text" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="number" className="leading-7 text-sm text-gray-600">Phone</label>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button type="submit" className="text-white font-medium bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">{loading ? 'Loading...' : 'Submit'}</button>
              {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
            </form>
            {/* <ToastContainer className="z-50" style={{zIndex:50}} /> */}
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </section>
    </>

  )
}

export default Contact