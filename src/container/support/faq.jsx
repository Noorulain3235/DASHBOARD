import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "How do I reset my password?", answer: "You can reset your password from the account settings page." },
  { question: "How can I add a new patient to the system?", answer: "Navigate to the Patients tab and click 'Add New'." },
  { question: "How do I schedule an appointment?", answer: "Go to the Appointments section and select 'Create Appointment'." },
  { question: "Can I export patient data?", answer: "Yes, export options are available in the Reports section." },
  { question: "How do I generate billing reports?", answer: "Navigate to the Billing section and select 'Generate Report'." },
  { question: "How can I manage staff schedules?", answer: "Use the Staff tab to assign and update staff schedules." },
  { question: "What should I do if I encounter an error?", answer: "Check the support center or submit a support ticket." },
  { question: "How do I update patient insurance information?", answer: "Go to the patient's profile and edit their insurance details." },
  { question: "Can I customize the dashboard?", answer: "Yes, widgets on the dashboard can be added, removed, or rearranged." },
  { question: "How do I set up automated appointment reminders?", answer: "Enable reminders in the Notification Settings." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto md:p-6 py-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
      <p className=" mt-1">
        Find answers to common questions about using the clinic management system
      </p>

      {/* Search */}
      <div className="mt-4 border rounded-lg flex items-center px-3 py-2">
        
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full outline-none bg-transparent"
        />
      </div>

      {/* FAQ Accordion */}
      <div className="mt-6 border rounded-lg divide-y">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-4 pb-3"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
