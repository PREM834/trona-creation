import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Sustainability", href: "#sustainability" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        // If we're on the home page, just scroll to the section
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If we're on another page, navigate to home and then scroll
        navigate("/", { state: { scrollTo: href.substring(1) } });
      }
    } else {
      navigate(href, { state: { from: location.pathname } });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center space-x-2 group"
          >
            <img
              src="/src/assest/logoSvg.svg"
              alt="Trona Creations Logo"
              className="w-10 h-10 group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-bold text-gradient group-hover:opacity-80 transition-opacity">
              Trona Creations
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-600 hover:text-blue-600 transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-4 space-y-4 animate-fade-in">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
