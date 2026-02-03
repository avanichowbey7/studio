
"use client";

import { MainLayout } from "@/components/MainLayout";
import { DoctorSuggestionTool } from "@/components/DoctorSuggestionTool";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock, User, Phone, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookAppointmentPage() {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <div className="p-8 md:p-12 space-y-12 max-w-6xl mx-auto">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 font-headline">{t("appointmentHeader")}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("appointmentSub")}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {/* AI Suggestion Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-400 pl-4">{t("help")}</h2>
            <DoctorSuggestionTool />
          </section>

          {/* Manual Booking Form */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-400 pl-4">{t("bookAppointment")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="shadow-lg border-none">
                  <CardHeader>
                    <CardTitle>{t("patientInformation")}</CardTitle>
                    <CardDescription>Enter details as they appear on your Aadhar or Govt ID.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2"><User className="h-4 w-4" /> {t("fullname")}</label>
                        <Input placeholder="Enter patient name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2"><Phone className="h-4 w-4" /> {t("mobileNumber")}</label>
                        <Input placeholder="+91 00000 00000" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">{t("department")}</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cardiology">Cardiology</SelectItem>
                            <SelectItem value="orthopedics">Orthopedics</SelectItem>
                            <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            <SelectItem value="general">General Medicine</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">{t("selectDoctor")}</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dr-sharma">Dr. Rajesh Sharma</SelectItem>
                            <SelectItem value="dr-gupta">Dr. Anjali Gupta</SelectItem>
                            <SelectItem value="dr-patil">Dr. Sanjay Patil</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2"><FileText className="h-4 w-4" /> {t("reasonForVisit")}</label>
                      <Input placeholder="e.g. Regular checkup, severe cough, etc." />
                    </div>

                    <div className="pt-4">
                      <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-100">
                        {t("confirmAppointment")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg border-none overflow-hidden">
                  <CardHeader className="bg-blue-600 text-white pb-6">
                    <CardTitle className="flex items-center gap-2"><CalendarIcon className="h-5 w-5" /> {t("schedule")}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Calendar className="w-full border-none rounded-none" />
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base"><Clock className="h-4 w-4" /> {t("availableSlots")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"].map(time => (
                        <Button key={time} variant="outline" className="text-xs py-1 h-auto font-medium hover:bg-blue-50">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
