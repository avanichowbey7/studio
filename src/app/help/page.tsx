
import { MainLayout } from "@/components/MainLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageSquare, Info } from "lucide-react";

export default function HelpPage() {
  const faqs = [
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment through our website's 'Book Appointment' page or by visiting the hospital reception between 9:00 AM and 5:00 PM."
    },
    {
      q: "What documents do I need for registration?",
      a: "Please bring a government-issued photo ID (Aadhar Card, Voter ID, or Driving License). For BPL Card holders, please bring the original card to avail of free consultations."
    },
    {
      q: "Can I cancel my appointment online?",
      a: "Currently, online cancellations are not supported. If you cannot attend, please inform the helpdesk at least 24 hours in advance so the slot can be given to another patient."
    },
    {
      q: "What are the visiting hours for patients?",
      a: "General visiting hours are from 4:00 PM to 6:00 PM daily. Only one visitor is allowed per patient to maintain hygiene and silence in wards."
    },
    {
      q: "Is there an emergency department?",
      a: "Yes, our Emergency and Trauma Center is open 24/7. No prior appointment is needed for emergency cases."
    }
  ];

  return (
    <MainLayout>
      <div className="p-8 md:p-12 space-y-12 max-w-5xl mx-auto">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-900 font-headline">How can we help you?</h1>
          <p className="text-gray-600">Find answers to common questions or reach out to our dedicated support team.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-blue-500" />
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-blue-50">
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-blue-600 py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex items-start gap-4">
              <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-blue-900">Health Awareness Tip</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Always wash your hands before and after visiting the hospital. Wear a mask if you have symptoms of cold or flu to protect yourself and others.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <Card className="shadow-lg border-none overflow-hidden">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase">Call 24/7</p>
                    <p className="text-2xl font-black text-red-600">102 or 108</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle>Hospital Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">Location</p>
                    <p className="text-sm text-gray-600">Central Government Hospital, Civil Lines Area, New Delhi - 110001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">Email Address</p>
                    <p className="text-sm text-gray-600">help@swasthyamitra.gov.in</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">Reception</p>
                    <p className="text-sm text-gray-600">+91 11 2345 6789</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
