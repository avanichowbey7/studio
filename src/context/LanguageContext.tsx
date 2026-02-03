
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "english" | "hindi" | "marathi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  english: {
    home: "Home",
    bookAppointment: "Book Appointment",
    doctors: "Doctors",
    help: "Help",
    brandName: "Swasthya Mitra",
    govtHospital: "Govt. Hospital",
    tagline: "Easy doctor appointments, respect for every patient",
    hello: "HELLO",
    viewDoctors: "View Doctors",
    govtInitiative: "Govt. Initiative",
    bplInfo: "Free Consultations for BPL Cards",
    waitTime: "Average Wait Time",
    mins: "15-20 Mins",
    appointmentHeader: "Book Your Appointment",
    appointmentSub: "Get the best healthcare services at our government facility.",
  },
  hindi: {
    home: "होम",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    doctors: "डॉक्टर",
    help: "सहायता",
    brandName: "स्वास्थ्य मित्र",
    govtHospital: "सरकारी अस्पताल",
    tagline: "डॉक्टर तक पहुँचना आसान, हर मरीज का सम्मान",
    hello: "नमस्ते",
    viewDoctors: "डॉक्टर देखें",
    govtInitiative: "सरकारी पहल",
    bplInfo: "बीपीएल कार्ड धारकों के लिए मुफ्त परामर्श",
    waitTime: "औसत प्रतीक्षा समय",
    mins: "15-20 मिनट",
    appointmentHeader: "अपनी अपॉइंटमेंट बुक करें",
    appointmentSub: "हमारे सरकारी केंद्र पर बेहतरीन स्वास्थ्य सेवाएं प्राप्त करें।",
  },
  marathi: {
    home: "होम",
    bookAppointment: "अपॉइंटमेंट बुक करा",
    doctors: "डॉक्टर",
    help: "मदत",
    brandName: "स्वास्थ्य मित्र",
    govtHospital: "सरकारी रुग्णालय",
    tagline: "डॉक्टरपर्यंत पोहोचणे सोपे, प्रत्येक रुग्णाचा सन्मान",
    hello: "नमस्कार",
    viewDoctors: "डॉक्टर पहा",
    govtInitiative: "सरकारी उपक्रम",
    bplInfo: "बीपीएल कार्ड धारकांसाठी मोफत सल्ला",
    waitTime: "सरासरी प्रतीक्षा वेळ",
    mins: "15-20 मिनिटे",
    appointmentHeader: "तुमची अपॉइंटमेंट बुक करा",
    appointmentSub: "आमच्या सरकारी केंद्रावर उत्तम आरोग्य सेवा मिळवा।",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("english");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
