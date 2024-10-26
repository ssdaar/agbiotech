import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        {/* Logo or Text on the Left */}
        <div className="text-xl font-bold">
          <Link href="/">AgBioTech Consultancy</Link>
        </div>

        {/* Links on the Right */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* Dropdown for Services */}
          <li className="relative group">
          <Link href="/services">
            <span className="cursor-pointer">Services</span>
            </Link>
            
            {/* Dropdown menu */}
            <ul className="absolute left-0 hidden mt-1 space-y-2 bg-gray-700 p-4 rounded-lg group-hover:block">
              <li>
                <Link href="/services/agriculture" className="block text-white hover:bg-gray-600 p-2 rounded">
                  Precision Agriculture
                </Link>
              </li>
              <li>
                <Link href="/services/ds" className="block text-white hover:bg-gray-600 p-2 rounded">
                  Bioinformatics Support
                </Link>
              </li>
              <li>
                <Link href="/services/it" className="block text-white hover:bg-gray-600 p-2 rounded">
                  IT Solutions
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
