import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-8">
        <h1 className="text-4xl font-bold">Contact Bthreesolutions</h1>
        <p className="text-muted-foreground text-lg">
          Get in touch with our assignment help experts. We're here to assist you 24/7.
        </p>
        
        <div className="mt-12 bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Get Assignment Help Now</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="flex items-center justify-center gap-3">
              <span className="text-primary">📧</span>
              <a
                href="mailto:bthreesolutions@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                bthreesolutions@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-primary">📱</span>
              <a
                href="tel:+919587056755"
                className="text-primary hover:underline font-medium"
              >
                +91 9587056755
              </a>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-primary">📍</span>
              <span>Jaipur, India</span>
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground">
              Our support team is available 24/7 to answer your assignment help queries.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
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