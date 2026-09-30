'use client';

interface NavigationProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Navigation({ isDark, setIsDark }: NavigationProps) {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Participation', href: '#participation' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md ${isDark ? 'bg-[#0a0e27]/90 border-gray-800' : 'bg-white/90 border-gray-200'} border-b transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className={`text-lg sm:text-xl font-bold tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>
            TANVI NIMBALKAR
          </h1>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-4 sm:gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    item.label === 'Home'
                      ? 'bg-blue-600 text-white px-3 py-1.5 rounded'
                      : `hover:text-blue-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
            >
              {isDark ? 'DARK' : 'LIGHT'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

