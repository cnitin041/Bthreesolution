import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { ArrowLeft, Check, Clock } from "lucide-react";
import servicesData from "@/data/services.json";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  features: string[];
  pricing: {
    basic: string;
    standard: string;
    premium: string;
  };
  deliveryTime: string;
  benefits: string[];
}

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceData | null>(null);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.id === serviceId);
    if (foundService) {
      setService(foundService as ServiceData);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FEFEFE]">
        <Header onGetStartedClick={() => setIsContactDialogOpen(true)} />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-black text-[#0F0F0F] mb-4">
            Service Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#0F0F0F] text-[#FEFEFE] rounded-lg hover:bg-[#828282] transition-all font-bold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header onGetStartedClick={() => setIsContactDialogOpen(true)} />
      <ContactFormDialog
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/80 to-[#0F0F0F]/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-[#FEFEFE] hover:text-[#828282] transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
            <h1 className="text-5xl md:text-6xl font-black text-[#FEFEFE] mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-[#FEFEFE] max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-white p-8 rounded-xl border-2 border-[#E0E0E0] shadow-md">
              <h2 className="text-3xl font-black text-[#0F0F0F] mb-6">
                What's Included in Our Assignment Help
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-[#0F0F0F] text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl border-2 border-[#E0E0E0] shadow-md">
              <h2 className="text-3xl font-black text-[#0F0F0F] mb-6">
                Assignment Help Pricing
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b-2 border-[#E0E0E0]">
                  <span className="font-bold text-[#0F0F0F]">Basic</span>
                  <span className="text-[#828282] font-semibold">
                    {service.pricing.basic}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 border-b-2 border-[#E0E0E0]">
                  <span className="font-bold text-[#0F0F0F]">Standard</span>
                  <span className="text-[#828282] font-semibold">
                    {service.pricing.standard}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 border-b-2 border-[#E0E0E0]">
                  <span className="font-bold text-[#0F0F0F]">Premium</span>
                  <span className="text-[#828282] font-semibold">
                    {service.pricing.premium}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-[#E0E0E0]">
                <div className="flex items-center gap-2 text-[#828282] mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">
                    Delivery: {service.deliveryTime}
                  </span>
                </div>
                <button
                  onClick={() => setIsContactDialogOpen(true)}
                  className="w-full px-8 py-4 bg-[#0F0F0F] hover:bg-[#828282] text-[#FEFEFE] rounded-lg transition-all transform hover:scale-105 font-black shadow-lg"
                >
                  Get Assignment Help
                </button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16 bg-white p-8 rounded-xl border-2 border-[#E0E0E0] shadow-md">
            <h2 className="text-3xl font-black text-[#0F0F0F] mb-6">
              Benefits of Our Assignment Help
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-lg"
                >
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-[#0F0F0F] font-semibold">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
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
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    Essay Writing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    Assignment Help
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    Dissertation Help
                  </button>
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
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    Our Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    Contact
                  </button>
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
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#FEFEFE] transition-colors font-medium text-left"
                  >
                    Why Us
                  </button>
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
