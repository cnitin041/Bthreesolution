import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Essay Writing",
      description: "High-quality essays written by expert academic writers. Original, well-researched content delivered on time.",
      features: [
        "Original content written from scratch",
        "Proper citations and references",
        "Academic writing standards",
        "Timely delivery",
        "Unlimited revisions"
      ]
    },
    {
      id: 2,
      title: "Dissertation Help",
      description: "Comprehensive dissertation assistance from proposal to final submission. Expert guidance throughout the process.",
      features: [
        "Topic selection assistance",
        "Research methodology",
        "Data analysis support",
        "Chapter-wise writing",
        "Proofreading and editing"
      ]
    },
    {
      id: 3,
      title: "Programming Assignments",
      description: "Expert help with programming assignments in Python, Java, C++, JavaScript, and more.",
      features: [
        "Code with comments",
        "Proper documentation",
        "Step-by-step explanation",
        "Multiple testing scenarios",
        "Plagiarism-free code"
      ]
    },
    {
      id: 4,
      title: "Business Studies",
      description: "Comprehensive help with business assignments, case studies, reports, and presentations.",
      features: [
        "SWOT analysis",
        "Market research",
        "Financial analysis",
        "Strategic recommendations",
        "Proper formatting"
      ]
    },
    {
      id: 5,
      title: "Nursing Assignments",
      description: "Specialized help with nursing assignments, care plans, case studies, and research papers.",
      features: [
        "Evidence-based practice",
        "Care plan development",
        "Clinical reasoning",
        "Proper citations",
        "Academic standards"
      ]
    },
    {
      id: 6,
      title: "Mathematics Help",
      description: "Step-by-step solutions for mathematics problems, assignments, and exam preparation.",
      features: [
        "Detailed solutions",
        "Step-by-step explanation",
        "Formula breakdown",
        "Graphs and diagrams",
        "Practice problems"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl font-bold">Our Assignment Help Services</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Professional academic assistance across diverse subjects and specializations. 
            Our expert writers ensure high-quality, plagiarism-free work delivered on time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to={`/services/${service.id}`}
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help with a Different Subject?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We provide assignment help across all academic disciplines. If you don't see your subject listed, 
            contact us for specialized assistance tailored to your specific requirements.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Us for Custom Help
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}