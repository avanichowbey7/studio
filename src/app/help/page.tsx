
"use client";

import { MainLayout } from "@/components/MainLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageSquare, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HelpPage() {
  const { t } = useLanguage();

  const faqs = [
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment through our website's 'Book Appointment' page or by visiting the hospital reception."
    },
    {
      q: "What documents do I need for registration?",
      a: "Please bring a government-issued photo ID (Aadhar Card, Voter ID, or Driving License)."
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
          <h1 className="text-4xl font-bold text-blue-900 font-headline">{t("helpHeader")}</h1>
          <p className="text-gray-600">{t("helpSub")}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-blue-500" />
                {t("faqsTitle")}
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
              <div className="space-y-2">
                <h3 className="font-bold text-blue-900 flex items-center gap-2"><Info className="h-4 w-4" /> {t("healthTipHeader")}</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  {t("healthTipSub")}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-lg border-none overflow-hidden">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle>{t("emergencyContact")}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-red-600">102 / 108</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle>{t("hospitalInfo")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{t("location")}</p>
                    <p className="text-sm text-gray-600">Civil Lines Area, New Delhi - 110001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{t("emailAddress")}</p>
                    <p className="text-sm text-gray-600">help@swasthyamitra.gov.in</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{t("reception")}</p>
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
