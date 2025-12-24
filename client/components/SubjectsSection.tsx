import { MessageSquare } from "lucide-react";

export function SubjectsSection() {
  const subjects = [
    "Essay Writing",
    "Dissertation Help",
    "Report Writing",
    "Case Study",
    "Programming",
    "Business Studies",
    "Nursing Assignment",
    "Engineering",
    "Mathematics",
    "Literature Review",
    "Research Paper",
    "Thesis Writing",
    "Accounting",
    "Finance Help",
    "Law Assignment",
    "Psychology",
    "Statistics",
    "Marketing",
    "Computer Science",
    "Economics",
    "Management",
    "Biology",
    "Chemistry",
    "Physics",
    "English Literature",
    "History",
    "Geography",
    "Political Science",
  ];

  const handleSubjectClick = (subject: string) => {
    const message = `Hi, I need help with ${subject}. Can you please provide more information?`;
    const whatsappUrl = `https://wa.me/919587056755?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#828282] font-semibold text-xs uppercase tracking-widest">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#FEFEFE]">
            Assignment Help Services Across All Subjects
          </h2>
          <p className="text-[#828282] text-lg max-w-2xl mx-auto">
            Professional academic help across diverse subjects and specializations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject, index) => (
            <button
              key={index}
              onClick={() => handleSubjectClick(subject)}
              className="group bg-[#1a1a1a] py-6 px-4 rounded-xl border-2 border-[#333333] hover:border-[#FEFEFE] transition-all duration-300 shadow-sm hover:shadow-xl text-center cursor-pointer"
            >
              <p className="text-[#FEFEFE] font-bold text-sm md:text-base group-hover:text-[#FEFEFE]">
                {subject}
              </p>
            </button>
          ))}
        </div>

        <div className="text-center mt-12 space-y-6">
          <p className="text-[#828282] text-base">
            Need help with a subject not listed? Contact us for specialized assistance!
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-10 py-4 bg-[#FEFEFE] hover:bg-[#E0E0E0] text-[#0F0F0F] rounded-lg transition-all transform hover:scale-105 font-black inline-flex items-center gap-2 shadow-lg text-base"
          >
            Get Assignment Help
          </button>
        </div>
      </div>
    </section>
  );
}
