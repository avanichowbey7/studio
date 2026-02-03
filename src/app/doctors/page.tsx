
"use client";

import { MainLayout } from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star, Clock, MapPin, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialty: "Senior Cardiologist",
    experience: "15+ Years",
    rating: 4.8,
    availability: "Mon, Wed, Fri",
    location: "Block A, 2nd Floor",
    imgId: "doctor-card-1",
  },
  {
    id: 2,
    name: "Dr. Anjali Gupta",
    specialty: "Pediatric Specialist",
    experience: "10+ Years",
    rating: 4.9,
    availability: "Daily",
    location: "Children's Ward, Ground Floor",
    imgId: "doctor-card-2",
  },
  {
    id: 3,
    name: "Dr. Sanjay Patil",
    specialty: "Orthopedic Surgeon",
    experience: "20+ Years",
    rating: 4.7,
    availability: "Tue, Thu, Sat",
    location: "Trauma Center, 1st Floor",
    imgId: "doctor-card-3",
  }
];

export default function DoctorsPage() {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <div className="p-8 md:p-12 space-y-12 max-w-7xl mx-auto">
        <header className="space-y-4">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none font-bold">Specialists</Badge>
          <h1 className="text-4xl font-bold text-blue-900 font-headline">{t("specialistsHeader")}</h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            {t("specialistsSub")}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => {
            const docImg = PlaceHolderImages.find(img => img.id === doctor.imgId);
            return (
              <Card key={doctor.id} className="group hover:shadow-2xl transition-all duration-300 border-none shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={docImg?.imageUrl || ""}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="Doctor Portrait"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-xl">{doctor.name}</p>
                    <p className="text-blue-200 text-sm font-medium">{doctor.specialty}</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4 flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{t("experience")}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <Award className="h-4 w-4 text-blue-500" />
                        {doctor.experience}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{t("availability")}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <Clock className="h-4 w-4 text-blue-500" />
                        {doctor.availability}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{t("clinicLocation")}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      {doctor.location}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="/book" className="w-full">
                    <Button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border-blue-100 shadow-none transition-colors h-11">
                      {t("requestConsultation")}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}
