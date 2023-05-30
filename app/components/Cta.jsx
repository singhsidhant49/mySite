import Link from 'next/link'
const Cta = () => {
    return (
        <section className="container mx-auto my-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
            <div className="px-8 py-20 lg:flex lg:justify-between">
                <div className="">
                    <h2 className="text-3xl font-bold text-gray-100">
                        Take the first step towards your success
                    </h2>
                    <p className="mt-2 text-gray-100 text-md">
                        Ready to experience the SHERO INCORP advantage? Contact us today for a free consultation and let us take your business to new heights!
                    </p>
                </div>
                <Link
                    className="block px-8 py-2 mt-6 text-lg font-medium text-center text-white bg-indigo-800 rounded "
                    href="/contact"
                >Get In Touch</Link>
            </div>
        </section>

    )
}

export default Cta