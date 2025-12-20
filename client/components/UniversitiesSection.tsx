export function UniversitiesSection() {
  // Using free university logos from a reliable source
  const universities = [
    {
      name: "Harvard University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/320px-Harvard_University_logo.svg.png"
    },
    {
      name: "Stanford University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Stanford_tree_logo.svg/320px-Stanford_tree_logo.svg.png"
    },
    {
      name: "MIT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/320px-MIT_logo.svg.png"
    },
    {
      name: "University of Cambridge",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Coat_of_arms_of_the_University_of_Cambridge.svg/320px-Coat_of_arms_of_the_University_of_Cambridge.svg.png"
    },
    {
      name: "University of Oxford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Oxford-University-Circlet.svg/320px-Oxford-University-Circlet.svg.png"
    },
    {
      name: "University of Toronto",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/University_of_Toronto_logo.svg/320px-University_of_Toronto_logo.svg.png"
    },
    {
      name: "UNSW Sydney",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/UNSW_Australia.svg/320px-UNSW_Australia.svg.png"
    },
    {
      name: "University of Melbourne",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Seal_of_the_University_of_Melbourne.svg/320px-Seal_of_the_University_of_Melbourne.svg.png"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FEFEFE] to-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F0F0F] mb-4">
            Trusted by Students from Leading Universities
          </h2>
          <p className="text-[#828282] text-lg max-w-2xl mx-auto">
            We are proud to support students from top universities worldwide in achieving academic excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {universities.map((uni, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-[#E0E0E0] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <img 
                  src={uni.logo} 
                  alt={`${uni.name} logo`}
                  className="max-h-12 max-w-full object-contain"
                  onError={(e) => {
                    // If the image fails to load, hide it and show the university name
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML += `<span class="text-sm text-[#828282] text-center">${uni.name}</span>`;
                  }}
                />
              </div>
              <p className="text-xs text-[#828282] text-center hidden">
                {uni.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#828282]">
            Join thousands of students from 60+ countries who trust Bthreesolutions for their academic success
          </p>
        </div>
      </div>
    </section>
  );
}