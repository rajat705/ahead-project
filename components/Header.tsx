import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-4">
          <Image src="data:image/jpeg;base64,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" alt="Logo" width={50} height={50} />
        </div>
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Emotions</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Manifesto</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Self-awareness test</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Work With Us</a>
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/" legacyBehavior>
            <a className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">
              Download app
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline">Emotions</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline">Manifesto</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline">Self-awareness test</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline">Work With Us</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 block text-center">
                  Download app
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
