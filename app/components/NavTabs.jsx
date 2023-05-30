import Link from 'next/link';

const NavTabs = ({ isActive, name, url }) => {
    return (
        <>
            {isActive ? (
                <Link href={url}
                    className="px-2 py-1 relative rounded group text-sm text-white font-small inline-block">
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500" />
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500" />
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500" />
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500" />
                    <span className="relative">{name}</span>

                </Link>
            ) : (
                <Link href={url}
                    className="px-2 py-1 relative rounded group overflow-hidden font-small text-gray-900 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90" />
                    <span className="relative group-hover:text-white">{name}</span>

                </Link>
            )}
        </>
    );
};

export default NavTabs;