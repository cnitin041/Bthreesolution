import { useState } from "react";
import { Header } from "@/components/Header";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { CountriesSlider } from "@/components/CountriesSlider";
import { FAQSection } from "@/components/FAQSection";
import { SubjectsSection } from "@/components/SubjectsSection";
import { UniversitySlider } from "@/components/UniversitySlider";
import {
  ArrowRight,
  BookOpen,
  PenTool,
  Zap,
  Users,
  Award,
  Quote,
  Mail,
  Phone,
  MapPin,
  Star,
} from "lucide-react";

export default function Index() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE] text-[#0F0F0F]">
      <Header onGetStartedClick={() => setIsContactDialogOpen(true)} />
      <ContactFormDialog
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
      <WhatsAppWidget phoneNumber="919587056755" />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden pb-0 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center md:min-h-[600px]">
          <div className="space-y-6 py-12">
            <div className="space-y-4">
              <p className="text-[#828282] font-semibold text-xs uppercase tracking-widest">
                Welcome to Bthreesolutions
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[#0F0F0F]">
                Best Assignment Help Service
              </h1>
              <p className="text-[#828282] text-xl leading-relaxed max-w-lg">
                ✓ Highest-rated assignment company on Google<br/>
                ✓ Most affordable rates ever<br/>
                ✓ Earn 3000 INR for each referral<br/>
                ✓ Helped more than 30k+ Students
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => setIsContactDialogOpen(true)}
                className="px-8 py-4 bg-[#0F0F0F] text-[#FEFEFE] rounded-lg hover:bg-[#828282] transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2 group shadow-lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="px-8 py-4 border-2 border-[#0F0F0F] text-[#0F0F0F] rounded-lg hover:bg-[#F5F5F5] transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
              alt="Assignment Help"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F0F]/10 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Countries Slider */}
      <CountriesSlider />

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] mt-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-[#828282] font-semibold text-xs uppercase tracking-widest">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F0F0F]">
              Assignment Help Services
            </h2>
            <p className="text-[#828282] text-lg max-w-2xl mx-auto">
              Expert assignment writing help across all subjects for students worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Essay & Report Writing",
                description:
                  "High-quality essays, reports, and dissertations written by expert writers. Original, well-researched content delivered on time.",
                image:
                  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&h=400&fit=crop",
              },
              {
                title: "Assignment Writing",
                description:
                  "Professional assignment help across all subjects. From business to programming, we deliver plagiarism-free work.",
                image:
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=400&fit=crop",
              },
              {
                title: "Exam & SOP Assistance",
                description:
                  "Expert help with exam preparation, Statement of Purpose, CV writing, and academic documentation.",
                image:
                  "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&h=400&fit=crop",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-[#FEFEFE] rounded-xl overflow-hidden border-2 border-[#E0E0E0] hover:border-[#0F0F0F] transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden bg-[#F5F5F5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-[#0F0F0F] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#828282] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F] text-[#FEFEFE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {
              [
                { number: "45,000+", label: "Assignments Completed" },
                { number: "15,000+", label: "Students Trusted Us" },
                { number: "60+", label: "Countries Serving" },
                { number: "100+", label: "Professional Experts" },
              ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center space-y-3 border-l border-[#828282] pl-6 md:border-l-0 md:pl-0"
              >
                <div className="text-5xl md:text-6xl font-black text-[#828282]">
                  {stat.number}
                </div>
                <p className="text-[#828282] text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section id="why" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FEFEFE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-[#828282] font-semibold text-xs uppercase tracking-widest">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F0F0F]">
              Your Academic Success Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Award,
                title: "Plagiarism & AI Free",
                description:
                  "100% original content written from scratch. Every assignment is checked through advanced plagiarism detection software.",
              },
              {
                icon: Zap,
                title: "On-Time Delivery",
                description:
                  "97.68% of orders delivered on time. Fast turnaround without compromising quality.",
              },
              {
                icon: Users,
                title: "Expert Writers",
                description:
                  "100+ professional experts with advanced degrees across diverse subjects and specializations.",
              },
              {
                icon: BookOpen,
                title: "Affordable Pricing",
                description:
                  "Most competitive rates in the market. Quality academic help that fits your budget.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex gap-6 p-8 bg-[#F5F5F5] rounded-xl border-2 border-[#E0E0E0] hover:border-[#0F0F0F] transition-all hover:shadow-lg group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#FEFEFE] group-hover:bg-[#0F0F0F] transition-colors border border-[#E0E0E0]">
                      <Icon className="h-8 w-8 text-[#0F0F0F] group-hover:text-[#FEFEFE] transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-[#0F0F0F]">
                      {feature.title}
                    </h3>
                    <p className="text-[#828282] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <UniversitySlider />

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-[#828282] font-semibold text-xs uppercase tracking-widest">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F0F0F]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Shefat Jamil",
                company: "International Student",
                text: "Got great services from Bthreesolutions and teams.. Keep doing good work!",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
              },
              {
                name: "Sniya Merin Antony",
                company: "University Student",
                text: "Hey, I'm so grateful …. I got my results and I passed for 2 assignments….",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
              },
              {
                name: "Pixy Girl",
                company: "Graduate Student",
                text: "It's my first time in taking their service. It was indeed a nice experience. The overall quality of their work is top-notch.",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#FEFEFE] p-8 rounded-xl border-2 border-[#E0E0E0] hover:border-[#0F0F0F] transition-all hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#0F0F0F] text-[#0F0F0F]"
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#E0E0E0] mb-4" />
                <p className="text-[#0F0F0F] mb-6 italic text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t-2 border-[#E0E0E0]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-black text-[#0F0F0F] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#828282]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-[#828282] font-semibold text-xs uppercase tracking-widest">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#FEFEFE]">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Requirements",
                description:
                  "Share your assignment details, deadline, and specific requirements with us.",
                image:
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
              },
              {
                step: "02",
                title: "Get Quote",
                description:
                  "Receive a customized quote with transparent pricing and delivery timeline.",
                image:
                  "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop",
              },
              {
                step: "03",
                title: "Expert Work",
                description:
                  "Our subject experts work on your assignment with thorough research.",
                image:
                  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
              },
              {
                step: "04",
                title: "Delivery & Revision",
                description:
                  "Receive your completed assignment and request revisions if needed.",
                image:
                  "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#0F0F0F]/40 group-hover:bg-[#0F0F0F]/20 transition-colors"></div>
                </div>
                <div className="text-4xl font-black text-[#828282] mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-black text-[#FEFEFE] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#828282] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FEFEFE]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#0F0F0F]">
              Ready to Get Assignment Help?
            </h2>
            <p className="text-lg text-[#828282] max-w-2xl mx-auto leading-relaxed">
              Let our expert writers help you achieve academic success with high-quality, plagiarism-free assignments delivered on time.
            </p>
          </div>
          <button
            onClick={() => setIsContactDialogOpen(true)}
            className="px-10 py-4 bg-[#0F0F0F] hover:bg-[#828282] text-[#FEFEFE] rounded-lg transition-all transform hover:scale-105 font-black inline-flex items-center gap-2 group shadow-lg text-base"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      
      {/* Subjects Section */}
      <SubjectsSection />



      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-[#828282] font-semibold text-xs uppercase tracking-widest">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F0F0F]">
              Contact Bthreesolutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "bthreesolutions@gmail.com",
                href: "mailto:bthreesolutions@gmail.com",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 9587056755",
                href: "tel:+919587056755",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Jaipur, India",
                href: "#",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.href}
                  className="bg-[#FEFEFE] p-8 rounded-xl border-2 border-[#E0E0E0] text-center hover:border-[#0F0F0F] transition-all group cursor-pointer hover:shadow-lg"
                >
                  <div className="mb-4 inline-block p-4 bg-[#F5F5F5] rounded-lg group-hover:bg-[#0F0F0F] transition-colors border border-[#E0E0E0]">
                    <Icon className="w-8 h-8 text-[#0F0F0F] group-hover:text-[#FEFEFE] transition-colors" />
                  </div>
                  <h3 className="text-lg font-black text-[#0F0F0F] mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-[#828282] font-semibold">
                    {contact.content}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-[#FEFEFE] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#282828]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/logo.jpg"
                  alt="B3 Logo"
                  className="footer-logo"
                />
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-black text-[#FEFEFE] uppercase text-sm tracking-widest">
                SERVICES
              </h4>
              <ul className="space-y-2 text-sm text-[#828282]">
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#FEFEFE] transition-colors font-medium"
                  >
                    Essay Writing
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#FEFEFE] transition-colors font-medium"
                  >
                    Assignment Help
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#FEFEFE] transition-colors font-medium"
                  >
                    SOP & Exam Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-black text-[#FEFEFE] uppercase text-sm tracking-widest">
                COMPANY
              </h4>
              <ul className="space-y-2 text-sm text-[#828282]">
                <li>
                  <a
                    href="#why"
                    className="hover:text-[#FEFEFE] transition-colors font-medium"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#FEFEFE] transition-colors font-medium"
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#FEFEFE] transition-colors font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-black text-[#FEFEFE] uppercase text-sm tracking-widest">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-sm text-[#828282]">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[#FEFEFE] transition-colors font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#why"
                    className="hover:text-[#FEFEFE] transition-colors font-medium"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsContactDialogOpen(true)}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#282828] pt-8 text-center text-sm text-[#828282]">
            <p>&copy; 2025 Bthreesolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
