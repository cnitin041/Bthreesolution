export function CountriesSlider() {
  const countries = [
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "USA", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "UK", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "UAE", flag: "https://flagcdn.com/w320/ae.png" },
    { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
  ];

  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-[#0F0F0F] mb-8">
          Assignment Help Services Across the Globe!
        </h2>
        
        {/* Slider Container */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {/* First set of countries */}
            {countries.map((country, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-32 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center border-4 border-[#E0E0E0] bg-white overflow-hidden"
              >
                <div className="text-center w-full h-full flex flex-col items-center justify-center p-4">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-32 h-20 object-cover rounded-lg shadow-md mb-2"
                  />
                  <p className="text-sm font-bold text-[#0F0F0F]">{country.name}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {countries.map((country, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-32 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center border-4 border-[#E0E0E0] bg-white overflow-hidden"
              >
                <div className="text-center w-full h-full flex flex-col items-center justify-center p-4">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-32 h-20 object-cover rounded-lg shadow-md mb-2"
                  />
                  <p className="text-sm font-bold text-[#0F0F0F]">{country.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center mt-8 text-[#828282] text-base">
          We serve students in 60+ countries with professional assignment help services
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
