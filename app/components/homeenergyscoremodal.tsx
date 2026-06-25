"use client";

import { supabase } from "@/supabase";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Step = "intro" | "questions" | "calculating" | "result" | "capture" | "success";

interface Answers {
  propertyType: string;
  ownership: string;
  concern: string;
  homeFeel: string;
  direction: string;
  homeAge: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function HomeEnergyScoreModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    propertyType: "",
    ownership: "",
    concern: "",
    homeFeel: "",
    direction: "",
    homeAge: "",
  });
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const questions = [
    {
      key: "propertyType" as keyof Answers,
      question: "What type of property do you live in?",
      options: ["Flat", "Villa", "Independent House"],
    },
    {
      key: "ownership" as keyof Answers,
      question: "Do you own or rent this property?",
      options: ["Owned", "Rented"],
    },
    {
      key: "concern" as keyof Answers,
      question: "What's your primary concern?",
      options: ["Finance", "Peace", "Health", "Career", "Just exploring"],
    },
    {
      key: "homeFeel" as keyof Answers,
      question: "How does your home feel?",
      options: ["Calm", "Neutral", "Heavy", "Uncertain"],
    },
    {
      key: "direction" as keyof Answers,
      question: "Main entrance direction (if known)?",
      options: ["East", "West", "North", "South", "Not sure"],
    },
    {
      key: "homeAge" as keyof Answers,
      question: "How old is your home?",
      options: ["New", "2–5 years", "5+ years"],
    },
  ];

  const calculateScore = () => {
    let calculatedScore = 100;
    if (answers.concern !== "Just exploring") calculatedScore -= 15;
    if (answers.homeFeel === "Heavy") calculatedScore -= 20;
    if (answers.direction === "Not sure") calculatedScore -= 10;
    if (answers.homeAge === "5+ years") calculatedScore -= 10;
    return Math.max(calculatedScore, 35);
  };

  const handleAnswer = (value: string) => {
    const currentQ = questions[currentQuestion];
    setAnswers({ ...answers, [currentQ.key]: value });

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setStep("calculating");
        setTimeout(() => {
          const finalScore = calculateScore();
          setScore(finalScore);
          setStep("result");
        }, 2500);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    const newErrors = {
      name: !formData.name.trim() ? "Name is required" : "",
      phone: !/^[6-9]\d{9}$/.test(formData.phone)
        ? "Valid 10-digit number required"
        : "",
    };

    setErrors(newErrors);
    if (newErrors.name || newErrors.phone) return;

    setIsSubmitting(true);

    const { error } = await supabase.from("energy_score_leads").insert({
      name: formData.name.trim(),
      phone: formData.phone,
      email: formData.email?.trim() || null,
      message: formData.message?.trim() || null,
      score: score,
      property_type: answers.propertyType,
      ownership: answers.ownership,
      concern: answers.concern,
      home_feel: answers.homeFeel,
      direction: answers.direction,
      home_age: answers.homeAge,
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Supabase error:", error);
    }

    setStep("success");
  };

  const reset = () => {
    setStep("intro");
    setCurrentQuestion(0);
    setAnswers({
      propertyType: "",
      ownership: "",
      concern: "",
      homeFeel: "",
      direction: "",
      homeAge: "",
    });
    setScore(0);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setErrors({ name: "", phone: "" });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  const getScoreColor = () => {
    if (score <= 40) return "text-red-600";
    if (score <= 70) return "text-orange-600";
    return "text-green-600";
  };

  const getScoreMessage = () => {
    if (score <= 40)
      return "Your home energy needs attention. Let's fix this together.";
    if (score <= 70)
      return "Your home has moderate energy. Small changes can make a big difference.";
    return "Your home has balanced energy. Let's optimize it further.";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition"
        >
          <X className="w-5 h-5 text-slate-700" />
        </button>

        {step === "intro" && (
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-3xl">🏠</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Check Your Home Energy Score™
            </h2>
            <p className="text-lg text-slate-600">
              Free · Takes less than 60 seconds
            </p>
            <button
              onClick={() => setStep("questions")}
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === "questions" && (
          <div className="p-6 md:p-10 space-y-6">
            <div className="flex items-center justify-between mb-4">
              {currentQuestion > 0 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <div className="ml-auto text-sm font-semibold text-slate-600">
                Step {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8">
              {questions[currentQuestion].question}
            </h3>

            <div className="grid gap-3 mt-6">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left bg-slate-50 hover:bg-amber-50 border-2 border-slate-200 hover:border-amber-400 rounded-xl font-semibold text-slate-900 transition-all hover:scale-[1.02]"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "calculating" && (
          <div className="p-12 md:p-16 text-center space-y-6">
            <Loader2 className="w-16 h-16 mx-auto text-amber-500 animate-spin" />
            <h3 className="text-2xl font-bold text-slate-900">
              Analyzing energy alignment…
            </h3>
            <p className="text-slate-600">Evaluating directional harmony…</p>
          </div>
        )}

        {step === "result" && (
          <div className="p-8 md:p-12 text-center space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Your Home Energy Score
            </h3>

            <div className="relative w-40 h-40 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(score / 100) * 440} 440`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-5xl font-extrabold ${getScoreColor()}`}>
                  {score}
                </span>
              </div>
            </div>

            <p className="text-lg text-slate-700 max-w-md mx-auto">
              {getScoreMessage()}
            </p>

            <button
              onClick={() => setStep("capture")}
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl shadow-xl transition-all hover:scale-105"
            >
              Unlock Personalized Report
            </button>
          </div>
        )}

        {step === "capture" && (
          <div className="p-6 md:p-10 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
              Unlock Your Personalized Correction Summary
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Full Name *
                </label>
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-300 focus:ring-amber-500"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Phone Number *
                </label>
                <input
                  value={formData.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "");
                    if (digits.length <= 10) {
                      setFormData({ ...formData, phone: digits });
                    }
                  }}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-300 focus:ring-amber-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Email (Optional)
                </label>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  placeholder="Any specific concerns?"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Unlocking...
                  </>
                ) : (
                  "Unlock My Report"
                )}
              </button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Report Unlocked!
            </h3>
            <p className="text-lg text-slate-600">
              We'll send your personalized correction summary shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={() => {
                    router.push(`/?service=vastu&msg=Personalized%20Correction%20Consultation%20(Energy%20Score:%20${score})#consultation-form`);
                    handleClose();
                }}
                className="px-10 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-slate-900/10 hover:scale-105 active:scale-95 transition-all"
              >
                Book Consultation
              </button>
              <button className="px-10 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-green-500/20 hover:scale-105 active:scale-95 transition-all">
                Chat on WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
