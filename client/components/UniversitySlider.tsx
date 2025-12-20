export function UniversitySlider() {
  const universities = [
    { name: "Harvard University", logo: "/assets/Images/harvard.png" },
    { name: "Stanford University", logo: "/assets/Images/stanford.png" },
    { name: "MIT", logo: "/assets/Images/massachusett.png" },
    { name: "Cambridge University", logo: "/assets/Images/cambridge.png" },
    { name: "Oxford University", logo: "/assets/Images/oxford.png" },
    { name: "University of Toronto", logo: "/assets/Images/toronto.png" },
    { name: "National University of Singapore", logo: "/assets/Images/singapore.png" },
    { name: "University of Melbourne", logo: "/assets/Images/Melbourne.png" },
    { name: "University of Sydney", logo: "/assets/Images/sydney.png" },
    { name: "University of Queensland", logo: "/assets/Images/queensland.png" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F0F0F] mb-4">
            Trusted by Students from Top Universities
          </h2>
          <p className="text-[#828282] text-lg max-w-2xl mx-auto">
            Join thousands of students from prestigious institutions who trust Bthreesolutions for their academic success
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {/* First set of universities */}
            {universities.map((uni, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-64 h-32 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center bg-white border border-[#E0E0E0]"
              >
                <div className="text-center px-4">
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    className="h-16 mx-auto object-contain"
                    onError={(e) => {
                      // Handle image loading errors by hiding the image and showing the university name
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Add fallback text
                      const parent = target.parentElement;
                      if (parent) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = "h-16 flex items-center justify-center";
                        fallbackDiv.innerHTML = `<span class="text-sm font-semibold text-[#0F0F0F]">${uni.name}</span>`;
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                  />
                  <p className="text-xs font-semibold text-[#0F0F0F] mt-2 truncate">
                    {uni.name}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {universities.map((uni, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-64 h-32 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center bg-white border border-[#E0E0E0]"
              >
                <div className="text-center px-4">
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    className="h-16 mx-auto object-contain"
                    onError={(e) => {
                      // Handle image loading errors by hiding the image and showing the university name
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Add fallback text
                      const parent = target.parentElement;
                      if (parent) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = "h-16 flex items-center justify-center";
                        fallbackDiv.innerHTML = `<span class="text-sm font-semibold text-[#0F0F0F]">${uni.name}</span>`;
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                  />
                  <p className="text-xs font-semibold text-[#0F0F0F] mt-2 truncate">
                    {uni.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}