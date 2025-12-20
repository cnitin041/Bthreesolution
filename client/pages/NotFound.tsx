import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-black text-[#0F0F0F]">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F0F]">Page Not Found</h2>
          <p className="text-xl text-[#828282] max-w-2xl mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="pt-6">
            <a 
              href="/" 
              className="inline-block px-8 py-4 bg-[#0F0F0F] hover:bg-[#828282] text-[#FEFEFE] rounded-lg transition-all transform hover:scale-105 font-bold shadow-lg"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;