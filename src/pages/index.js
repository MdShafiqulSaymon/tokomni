import Image from "next/image";

export default function Home() {
  return (
    <header className="bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md border-b-2">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Image
            src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/suidata-logo.svg"
            alt="Suridata Logo"
            width={150}
            height={40}
          />
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#platform" className="hover:text-orange-600">
            Platform
          </a>
          <a href="#use-cases" className="hover:text-orange-600">
            Use Cases
          </a>
          <a href="#resources" className="hover:text-orange-600">
            Resources
          </a>
          <a href="#company" className="hover:text-orange-600">
            Company
          </a>
        </div>
        <button className="bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600">
          Request a Demo
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none focus:ring"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Header Section */}
      <div
        className="text-center py-16 px-6 sm:px-10 md:px-20 lg:px-32 bg-cover bg-center h-screen flex justify-center flex-col items-center 
    bg-none md:bg-[url('https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/suridata-homepage-start-optimized.png')]"
      >
        <div className="md:w-5/12">
          <h1 className="text-3xl md:text-5xl text-gray-900">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Omnitelecom
            </span>{" "}
            Crafting Communication
          </h1>
          <p className="mt-4 text-gray-700 md:text-lg">
            Secure the use of SaaS applications from a single platform,
            proactively.
          </p>
          <button className="mt-6 bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 text-white px-6 py-3 rounded-md shadow hover:opacity-90\">
            Explore the Platform
          </button>
        </div>
      </div>
    </header>
  );
}
