import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What types of assignment help services do you offer?",
      answer:
        "We offer comprehensive assignment help across all subjects including Essay Writing, Dissertation Help, Report Writing, Case Study Analysis, Programming Assignments, Business Studies, Nursing Assignments, Engineering Projects, Mathematics Problems, Literature Reviews, and more. Our expert writers can handle any academic assignment for students worldwide.",
    },
    {
      question: "How soon can I get my assignment delivered?",
      answer:
        "Delivery timelines depend on the complexity of your assignment. Standard assignments are typically delivered within 3-5 business days. For urgent requests, we offer expedited services with 24-48 hour turnaround. Large projects like dissertations are delivered according to mutually agreed timelines. We guarantee on-time delivery for 97.68% of our orders.",
    },
    {
      question: "What is the credibility of your assignment writers?",
      answer:
        "Our team consists of experienced academic writers with advanced degrees (Masters and PhDs) from prestigious universities. All writers are thoroughly vetted, with proven track records of producing high-quality academic work. Many have years of experience as educators or researchers in their respective fields.",
    },
    {
      question: "Do you provide revisions for assignments?",
      answer:
        "Yes! We offer unlimited revisions to ensure complete satisfaction with your assignment. Your feedback is valuable to us, and we'll work with you until the assignment meets your exact requirements and university standards. Minor revisions are typically completed within 24-48 hours.",
    },
    {
      question: "How do things work? What are the steps?",
      answer:
        "Our process is simple: 1) Share your assignment requirements through our contact form, 2) Receive a customized quote and timeline, 3) Approve and make payment, 4) Our experts work on your assignment, 5) Receive your completed, plagiarism-free assignment. We keep you updated throughout the entire process.",
    },
    {
      question: "Do you ensure original, plagiarism-free assignments?",
      answer:
        "Absolutely! All our assignments are 100% original and written from scratch. We use professional plagiarism detection tools like Turnitin to verify uniqueness before delivery. Every assignment undergoes thorough quality checks to ensure it's authentic, well-researched, and tailored to your specific requirements.",
    },
    {
      question: "What are the payment options?",
      answer:
        "We accept multiple payment methods for your convenience including credit/debit cards, PayPal, bank transfers, and UPI (for Indian clients). Payment terms are flexible - you can pay 50% upfront and 50% upon delivery for larger projects, or full payment upfront for smaller orders.",
    },
    {
      question: "Do you provide complete assistance throughout the assignment process?",
      answer:
        "Yes, we provide full support from start to finish. You'll have a dedicated expert who will keep you informed, answer questions, and ensure smooth communication. We're available via email, phone, and WhatsApp to address any concerns or provide updates. Your feedback is our stairs to growth.",
    },
    {
      question: "What should I look for in a good assignment help service?",
      answer:
        "Look for experienced academic writers with advanced degrees, proven track record of student success, transparent pricing, clear communication, revision policy, on-time delivery, plagiarism-free guarantees, and positive student reviews. At Bthreeesolutions, we pride ourselves on meeting all these criteria and maintaining long-term relationships with our students.",
    },
    {
      question: "Will I get SEO-optimized content?",
      answer:
        "Yes! All our assignments are written with academic best practices in mind. We conduct thorough research, use proper citation formats, follow university guidelines, and ensure content is both academically rigorous and engaging for readers. Our goal is to help you achieve excellent grades.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0F0F0F] mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-[#828282] text-lg max-w-2xl mx-auto">
            Find answers to common questions about our assignment help services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="bg-white rounded-xl border-2 border-[#E0E0E0] hover:border-[#0F0F0F] transition-all shadow-sm hover:shadow-md"
            >
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-[#0F0F0F] hover:no-underline text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#828282] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#828282] mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#0F0F0F] hover:bg-[#828282] text-[#FEFEFE] rounded-lg transition-all font-bold shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
