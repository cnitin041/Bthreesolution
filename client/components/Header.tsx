import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onGetStartedClick?: () => void;
}

export function Header({ onGetStartedClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-[#333333] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo-small.jpg"
              alt="Bthreesolutions Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick("home")}
              className="text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("why")}
              className="text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              Why Us
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={onGetStartedClick}
            className="hidden sm:block px-6 py-2.5 bg-[#FEFEFE] hover:bg-[#E0E0E0] text-[#0F0F0F] rounded-lg transition-all transform hover:scale-105 font-bold text-sm shadow-md"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#333333] py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick("home");
                }}
                className="text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors text-sm font-semibold uppercase tracking-wider px-2 py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick("services");
                }}
                className="text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors text-sm font-semibold uppercase tracking-wider px-2 py-2 text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick("why");
                }}
                className="text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors text-sm font-semibold uppercase tracking-wider px-2 py-2 text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick("contact");
                }}
                className="text-[#FEFEFE] hover:text-[#A0A0A0] transition-colors text-sm font-semibold uppercase tracking-wider px-2 py-2 text-left"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onGetStartedClick?.();
                }}
                className="w-full px-6 py-2.5 bg-[#FEFEFE] hover:bg-[#E0E0E0] text-[#0F0F0F] rounded-lg transition-all font-bold text-sm shadow-md text-center"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
