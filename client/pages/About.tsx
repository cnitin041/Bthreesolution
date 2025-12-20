import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">About Bthreesolutions</h1>
          <p className="text-muted-foreground text-lg">
            Your trusted partner for academic success
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            At <strong>Bthreesolutions</strong>, we are dedicated to helping students achieve academic excellence through 
            professional assignment help services. With over 10 years of experience in the education sector, 
            we have assisted more than 30,000 students worldwide in reaching their academic goals.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to provide high-quality, affordable academic assistance to students across the globe. 
            We aim to bridge the gap between academic challenges and success by connecting students with expert 
            writers who understand the intricacies of educational requirements.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Expert Writers:</strong> Our team consists of 100+ professionals with advanced degrees from prestigious universities</li>
            <li><strong>Plagiarism-Free:</strong> 100% original content written from scratch with plagiarism reports</li>
            <li><strong>On-Time Delivery:</strong> 97.68% of assignments delivered on schedule</li>
            <li><strong>Affordable Rates:</strong> Most competitive pricing in the market without compromising quality</li>
            <li><strong>24/7 Support:</strong> Round-the-clock assistance for all your academic queries</li>
            <li><strong>Unlimited Revisions:</strong> Free revisions until you're completely satisfied</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Global Reach</h2>
          <p className="text-muted-foreground leading-relaxed">
            We proudly serve students from over 60 countries including Australia, USA, UK, Canada, India, 
            Singapore, and many more. Our multilingual team ensures that language barriers never hinder 
            academic success.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-3">Our Commitment to Students</h3>
            <p className="text-muted-foreground">
              We are committed to maintaining the highest standards of academic integrity while providing 
              personalized support to each student. Our services are designed to enhance learning, improve 
              understanding, and ultimately help students achieve better grades.
            </p>
          </div>
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