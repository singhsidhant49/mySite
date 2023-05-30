import Link from 'next/link';

export const StyleFill = ({ text }) => (
  <Link href="/" className="px-2 py-1 relative rounded group text-sm text-white font-small inline-block">
    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500" />
    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500" />
    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500" />
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500" />
    <span className="relative">{text}</span>
  </Link>
);

export const StyleHover = ({ text }) => (
  <Link href="/" className="px-2 py-1 relative rounded group overflow-hidden font-small text-gray-900 inline-block">
    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90" />
    <span className="relative group-hover:text-white">{text}</span>
  </Link>
);

export const StyleButton = ({ text }) => (
  <Link href="/" className="rounded px-2.5 py-2 flex overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
    <span className="absolute right-0 w-5 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
    <span className="relative">{text}</span>
  </Link>
);
