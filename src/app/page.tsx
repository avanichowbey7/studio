import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Cross, Calendar } from "lucide-react";

export default function Home() {
  const doctorImg = PlaceHolderImages.find(img => img.id === "doctor-illustration");
  const hospitalImg = PlaceHolderImages.find(img => img.id === "hospital-building");

  return (
    <MainLayout>
      <div className="hero-gradient min-h-screen flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
        {/* Decorative Hospital Background - faint */}
        <div className="absolute inset-0 opacity-10 grayscale z-0 pointer-events-none">
          <Image
            src={hospitalImg?.imageUrl || ""}
            alt="Hospital Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-black text-blue-900 font-headline tracking-tighter">
                स्वास्थ्य मित्र
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700/80 tracking-[0.2em] uppercase">
                Swasthya Mitra
              </h2>
            </div>

            <div className="space-y-4 bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-white/50 inline-block">
              <p className="text-xl md:text-2xl text-blue-800 font-medium leading-relaxed">
                डॉक्टर तक पहुँचना आसान,<br /> हर मरीज का सम्मान
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">HELLO</p>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">नमस्ते</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/book">
                <Button className="h-16 px-10 rounded-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold shadow-xl shadow-green-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 border-none">
                  Book Appointment
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </Link>
              <Link href="/doctors">
                <Button variant="outline" className="h-16 px-10 rounded-full border-2 border-blue-200 text-blue-700 text-xl font-bold hover:bg-white shadow-xl shadow-blue-50 transition-all hover:scale-105">
                  View Doctors
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 justify-center lg:justify-start opacity-60">
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-xs font-bold text-blue-800 uppercase tracking-widest">
                <Cross className="h-3 w-3 text-red-600 fill-red-600" />
                Govt. Initiative
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <p className="text-sm font-medium">Free Consultations for BPL Cards</p>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative group perspective-1000 hidden lg:block">
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto transform transition-transform duration-700 hover:scale-105">
              {/* Doctor Background Circle */}
              <div className="absolute inset-0 bg-blue-100 rounded-[4rem] rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-[4rem] -rotate-3 group-hover:-rotate-1 transition-transform duration-500 border border-white" />
              
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src={doctorImg?.imageUrl || ""}
                  alt="Doctor Illustration"
                  fill
                  className="object-cover"
                  data-ai-hint="Smiling Doctor"
                />
              </div>

              {/* Decorative elements around doctor */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-bounce duration-[3000ms]">
                <Calendar className="h-10 w-10 text-green-600" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-blue-50">
                <p className="text-xs font-bold text-gray-500 uppercase">Average Wait Time</p>
                <p className="text-xl font-black text-blue-900">15-20 Mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
