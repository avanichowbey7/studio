
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
    hello: "HELLO 👋",
    viewDoctors: "View Doctors",
    govtInitiative: "Govt. Initiative",
    bplInfo: "Free Consultations for BPL Cards",
    waitTime: "Average Wait Time",
    mins: "15-20 Mins",
    appointmentHeader: "Book Your Appointment",
    appointmentSub: "Get the best healthcare services at our government facility. Choose a specialist or use our AI assistant to find the right department.",
    patientInformation: "Patient Information",
    fullname: "Full Name",
    mobileNumber: "Mobile Number",
    department: "Department",
    selectDoctor: "Select Doctor",
    reasonForVisit: "Reason for Visit",
    confirmAppointment: "Confirm Appointment",
    schedule: "Schedule",
    availableSlots: "Available Slots",
    specialistsHeader: "Meet Our Doctors",
    specialistsSub: "Our hospital is proud to host some of the most experienced healthcare professionals in the country. All our doctors are dedicated to providing compassionate care to every citizen.",
    experience: "Experience",
    availability: "Availability",
    clinicLocation: "Clinic Location",
    requestConsultation: "Request Consultation",
    helpHeader: "How can we help you?",
    helpSub: "Find answers to common questions or reach out to our dedicated support team.",
    faqsTitle: "Frequently Asked Questions",
    healthTipHeader: "Health Awareness Tip",
    healthTipSub: "Always wash your hands before and after visiting the hospital. Wear a mask if you have symptoms of cold or flu to protect yourself and others.",
    emergencyContact: "Emergency Contact",
    hospitalInfo: "Hospital Info",
    location: "Location",
    emailAddress: "Email Address",
    reception: "Reception",
    aiAssistant: "AI Assistant",
    suggestionToolTitle: "Not sure which doctor to see?",
    suggestionToolSub: "Describe your symptoms and our AI assistant will suggest the right department.",
    symptomsLabel: "How are you feeling?",
    historyLabel: "Any past medical history? (Optional)",
    getSuggestion: "Get Suggestion",
    analyzeSymptoms: "Analyzing Symptoms...",
    recommendation: "Recommendation",
    suggestedDoctor: "Suggested Doctor",
    why: "Why",
    aiDisclaimer: "*This is an AI recommendation. If you have an emergency, please visit the hospital immediately.",
  },
  hindi: {
    home: "होम",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    doctors: "डॉक्टर",
    help: "सहायता",
    brandName: "स्वास्थ्य मित्र",
    govtHospital: "सरकारी अस्पताल",
    tagline: "डॉक्टर तक पहुँचना आसान, हर मरीज का सम्मान",
    hello: "नमस्ते 👋",
    viewDoctors: "डॉक्टर देखें",
    govtInitiative: "सरकारी पहल",
    bplInfo: "बीपीएल कार्ड धारकों के लिए मुफ्त परामर्श",
    waitTime: "औसत प्रतीक्षा समय",
    mins: "15-20 मिनट",
    appointmentHeader: "अपनी अपॉइंटमेंट बुक करें",
    appointmentSub: "हमारे सरकारी केंद्र पर बेहतरीन स्वास्थ्य सेवाएं प्राप्त करें।",
    patientInformation: "रोगी की जानकारी",
    fullname: "पूरा नाम",
    mobileNumber: "मोबाइल नंबर",
    department: "विभाग",
    selectDoctor: "डॉक्टर चुनें",
    reasonForVisit: "आने का कारण",
    confirmAppointment: "अपॉइंटमेंट की पुष्टि करें",
    schedule: "अनुसूची",
    availableSlots: "उपलब्ध स्लॉट",
    specialistsHeader: "हमारे डॉक्टरों से मिलें",
    specialistsSub: "हमारे अस्पताल को देश के कुछ सबसे अनुभवी स्वास्थ्य पेशेवरों की मेजबानी करने पर गर्व है।",
    experience: "अनुभव",
    availability: "उपलब्धता",
    clinicLocation: "क्लिनिक स्थान",
    requestConsultation: "परामर्श का अनुरोध करें",
    helpHeader: "हम आपकी क्या मदद कर सकते हैं?",
    helpSub: "सामान्य प्रश्नों के उत्तर ढूंढें या हमारी सहायता टीम से संपर्क करें।",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न",
    healthTipHeader: "स्वास्थ्य जागरूकता टिप",
    healthTipSub: "अस्पताल आने से पहले और बाद में हमेशा अपने हाथ धोएं।",
    emergencyContact: "आपातकालीन संपर्क",
    hospitalInfo: "अस्पताल की जानकारी",
    location: "स्थान",
    emailAddress: "ईमेल पता",
    reception: "स्वागत कक्ष",
    aiAssistant: "एआई सहायक",
    suggestionToolTitle: "समझ नहीं आ रहा किस डॉक्टर को दिखाएं?",
    suggestionToolSub: "अपने लक्षणों का वर्णन करें और हमारा एआई सहायक सही विभाग का सुझाव देगा।",
    symptomsLabel: "आप कैसा महसूस कर रहे हैं?",
    historyLabel: "कोई पिछला चिकित्सा इतिहास? (वैकल्पिक)",
    getSuggestion: "सुझाव प्राप्त करें",
    analyzeSymptoms: "लक्षणों का विश्लेषण...",
    recommendation: "सिफारिश",
    suggestedDoctor: "सुझाया गया डॉक्टर",
    why: "क्यों",
    aiDisclaimer: "*यह एक एआई सिफारिश है। यदि आपको आपात स्थिति है, तो कृपया तुरंत अस्पताल जाएं।",
  },
  marathi: {
    home: "होम",
    bookAppointment: "अपॉइंटमेंट बुक करा",
    doctors: "डॉक्टर",
    help: "मदत",
    brandName: "स्वास्थ्य मित्र",
    govtHospital: "सरकारी रुग्णालय",
    tagline: "डॉक्टरपर्यंत पोहोचणे सोपे, प्रत्येक रुग्णाचा सन्मान",
    hello: "नमस्कार 👋",
    viewDoctors: "डॉक्टर पहा",
    govtInitiative: "सरकारी उपक्रम",
    bplInfo: "बीपीएल कार्ड धारकांसाठी मोफत सल्ला",
    waitTime: "सरासरी प्रतीक्षा वेळ",
    mins: "15-20 मिनिटे",
    appointmentHeader: "तुमची अपॉइंटमेंट बुक करा",
    appointmentSub: "आमच्या सरकारी केंद्रावर उत्तम आरोग्य सेवा मिळवा।",
    patientInformation: "रुग्णाची माहिती",
    fullname: "पूर्ण नाव",
    mobileNumber: "मोबाईल नंबर",
    department: "विभाग",
    selectDoctor: "डॉक्टर निवडा",
    reasonForVisit: "भेटीचे कारण",
    confirmAppointment: "अपॉइंटमेंटची पुष्टी करा",
    schedule: "वेळापत्रक",
    availableSlots: "उपलब्ध स्लॉट",
    specialistsHeader: "आमच्या डॉक्टरांना भेटा",
    specialistsSub: "आमच्या रुग्णालयाला देशातील काही अत्यंत अनुभवी आरोग्य व्यावसायिकांचे यजमानपद भूषवल्याचा अभिमान आहे।",
    experience: "अनुभव",
    availability: "उपलब्धता",
    clinicLocation: "क्लिनिकचे ठिकाण",
    requestConsultation: "सल्लामसलत विनंती करा",
    helpHeader: "आम्ही तुम्हाला कशी मदत करू शकतो?",
    helpSub: "सामान्य प्रश्नांची उत्तरे शोधा किंवा आमच्या मदत कार्यसंघाशी संपर्क साधा।",
    faqsTitle: "वारंवार विचारले जाणारे प्रश्न",
    healthTipHeader: "आरोग्य जागरूकता टीप",
    healthTipSub: "रुग्णालयाला भेट देण्यापूर्वी आणि नंतर नेहमी आपले हाथ धुवा।",
    emergencyContact: "आपत्कालीन संपर्क",
    hospitalInfo: "रुग्णालयाची माहिती",
    location: "ठिकाण",
    emailAddress: "ईमेल पत्ता",
    reception: "रिसेप्शन",
    aiAssistant: "एआई सहाय्यक",
    suggestionToolTitle: "कोणत्या डॉक्टरकडे जावे हे माहित नाही?",
    suggestionToolSub: "तुमच्या लक्षणांचे वर्णन करा आणि आमचा एआई सहाय्यक योग्य विभाग सुचवेल।",
    symptomsLabel: "तुम्हाला कसे वाटते आहे?",
    historyLabel: "काही मागील वैद्यकीय इतिहास? (पर्यायी)",
    getSuggestion: "सल्ला मिळवा",
    analyzeSymptoms: "लक्षणांचे विश्लेषण...",
    recommendation: "शिफारस",
    suggestedDoctor: "सुचवलेले डॉक्टर",
    why: "का",
    aiDisclaimer: "*ही एक एआई शिफारस आहे। आपत्कालीन परिस्थिती असल्यास, कृपया त्वरित रुग्णालयात जा।",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("english");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_language") as Language;
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred_language", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
