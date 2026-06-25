"use client";

import { Clock, Play, Users, X, Lock, KeyRound, CheckCircle2 } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ProtectedVideoPlayer from "./protectedvideoplayer";

type Course = {
  id: string;
  title: string;
  level: string;
  duration: string;
  students: string;
  priceStr: string;
  desc: string;
  highlights: string[];
  instructor?: string;
  videoUrl?: string; // youtube preview URL
  driveUrl?: string; // Google Drive folder link for class videos
  thumbnail?: string;
  syllabus?: string[];
};

/* ------------------ Sample data: one hero + 3 courses ------------------ */
const HERO: Course = {
  id: "vastu-mastery",
  title: "Vastu Shastra Mastery",
  level: "Beginner → Advanced",
  duration: "12 Weeks",
  students: "Class Students",
  priceStr: "Student Access Only",
  desc: "Master complete Vastu principles with practical real-home case studies and live corrections. Exclusively for enrolled class students.",
  highlights: ["Directional Energies", "Room Analysis", "Corrections", "Case studies"],
  instructor: "Master Aadish Jain",
  videoUrl: "https://www.youtube.com/watch?v=wUvI9AMkSFA",
  driveUrl: "https://drive.google.com/drive/folders/1Up4anIs4cC2BSftIxXL34m3m8JQFA2Cw?usp=sharing",
  thumbnail: "",
  syllabus: [
    "Fundamentals of Vastu & Energy",
    "Practical room-by-room analysis",
    "Southwest corrections & remedies",
    "Final project & case study",
  ],
};

const COURSES: Course[] = [
  HERO,
  {
    id: "vastu-course-1",
    title: "Vastu Fundamentals Course",
    level: "Beginner",
    duration: "8 Weeks",
    students: "Class Students",
    priceStr: "Student Access Only",
    desc: "Learn the fundamentals of Vastu Shastra with comprehensive video lessons. Access exclusive course content securely.",
    highlights: ["Basic Principles", "Directional Analysis", "Home Layout", "Practical Tips"],
    instructor: "Master Aadish Jain",
    videoUrl: "",
    driveUrl: "https://drive.google.com/drive/folders/1Up4anIs4cC2BSftIxXL34m3m8JQFA2Cw?usp=sharing",
    thumbnail: "/thumbnail.png",
    syllabus: ["Introduction to Vastu", "Five Elements", "Directional Energies", "Room-by-room guidance"],
  },
  {
    id: "vastu-course-2",
    title: "Advanced Vastu Techniques",
    level: "Intermediate",
    duration: "10 Weeks",
    students: "Class Students",
    priceStr: "Student Access Only",
    desc: "Deep dive into advanced Vastu techniques and remedies. Secure access to premium course videos.",
    highlights: ["Advanced Remedies", "Energy Corrections", "Case Studies", "Expert Guidance"],
    instructor: "Master Aadish Jain",
    videoUrl: "",
    driveUrl: "https://drive.google.com/drive/folders/1E1Jv5FiqKoF02kG7MZq5AyMCOEsKA6Uo?usp=sharing",
    thumbnail: "/thumbnail.png",
    syllabus: ["Complex corrections", "Yantra placement", "Timing & muhurat", "Real-world applications"],
  },
  {
    id: "vastu-course-3",
    title: "Professional Vastu Mastery",
    level: "Advanced",
    duration: "12 Weeks",
    students: "Class Students",
    priceStr: "Student Access Only",
    desc: "Master professional Vastu consultation skills with protected course content. Become a certified practitioner.",
    highlights: ["Professional Skills", "Client Consultation", "Business Setup", "Certification"],
    instructor: "Master Aadish Jain",
    videoUrl: "",
    driveUrl: "https://drive.google.com/drive/folders/1WGCRqVJbti6FNoE37kfYSdu0HFS_JhCs?usp=sharing",
    thumbnail: "/thumbnail.png",
    syllabus: ["Professional practice", "Client management", "Advanced diagnostics", "Business development"],
  },
];

/* -------------------- Helpers -------------------- */
function getYouTubeId(url?: string) {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}
function youtubeThumbnail(url?: string) {
  const id = getYouTubeId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

/* -------------------- Component -------------------- */
export default function CoursesSection() {
  const t = useTranslations('coursesSection');
  const router = useRouter();
  const hero = HERO;
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState<Set<string>>(new Set());

  // Password Verification State
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [courseToUnlock, setCourseToUnlock] = useState<Course | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("unlocked_courses");
    if (saved) {
      try {
        setEnrolledCourses(new Set(JSON.parse(saved)));
      } catch (e) {}
    }
  }, []);

  const saveEnrollment = (courseId: string) => {
    const updated = new Set(enrolledCourses).add(courseId);
    setEnrolledCourses(updated);
    localStorage.setItem("unlocked_courses", JSON.stringify(Array.from(updated)));
  };

  const heroThumb = useMemo(
    () => hero.thumbnail || youtubeThumbnail(hero.videoUrl) || "/courses/preview-default.jpg",
    [hero]
  );

  function openCourseDetails(course: Course) {
    setSelectedCourse(course);
    setDetailOpen(true);
    setIsHeroPlaying(false);
    setVideoPlayerOpen(false);
  }

  function closeDetails() {
    setDetailOpen(false);
    setSelectedCourse(null);
  }

  function handleCourseAccess(course: Course) {
    if (enrolledCourses.has(course.id)) {
      // Already unlocked, open directly
      if (course.driveUrl) {
        setCurrentVideoUrl(course.driveUrl);
        setCurrentVideoTitle(course.title);
        setVideoPlayerOpen(true);
        setDetailOpen(false);
      }
    } else {
      // Needs password
      setCourseToUnlock(course);
      setPasswordModalOpen(true);
    }
  }

  function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPasswordError("");
    const normalizedPass = passwordInput.trim().toUpperCase();

    // Student access passwords
    if (normalizedPass === "JAINVASTU" || normalizedPass === "STUDENT2026") {
      if (courseToUnlock) {
        saveEnrollment(courseToUnlock.id);
        if (courseToUnlock.driveUrl) {
          setCurrentVideoUrl(courseToUnlock.driveUrl);
          setCurrentVideoTitle(courseToUnlock.title);
          setVideoPlayerOpen(true);
        }
      }
      setPasswordModalOpen(false);
      setCourseToUnlock(null);
      setPasswordInput("");
      setDetailOpen(false);
    } else {
      setPasswordError("Incorrect password. Please contact the class administrator.");
    }
  }

  function closeVideoPlayer() {
    setVideoPlayerOpen(false);
    setCurrentVideoUrl("");
    setCurrentVideoTitle("");
  }

  function playHeroVideo() {
    if (!hero.videoUrl) return;
    setIsHeroPlaying(true);
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-purple-50 to-orange-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-300 rounded-full">
            <Lock className="w-4 h-4 text-amber-700" />
            <span className="text-sm text-amber-900 font-medium">Student Portal Only</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 leading-tight">
            Class Course Material
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Vastu Student Dashboard
            </span>
          </h2>

          <p className="text-slate-700 max-w-2xl mx-auto mt-3">
            Exclusively for registered students of Jain Vastu Solution. Enter your student password to access course files and video lectures.
          </p>
        </div>

        {/* Hero preview */}
        <div className="mx-auto mb-12 max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden border border-amber-200/50 shadow-xl bg-white flex flex-col">
            {/* Top Video Preview */}
            <div className="relative w-full aspect-video bg-black">
              {hero.videoUrl && isHeroPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(hero.videoUrl)}?autoplay=1&rel=0`}
                  title={`${hero.title} preview`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="w-full h-full relative">
                  <Image 
                    src={heroThumb} 
                    alt={`${hero.title} preview`} 
                    fill
                    className="object-cover object-center" 
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    {hero.videoUrl && (
                      <button
                        onClick={playHeroVideo}
                        aria-label="Play course preview"
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-2xl hover:scale-105 transition"
                      >
                        <Play className="w-6 h-6 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Details (Fully responsive: stacks on mobile, side-by-side on desktop) */}
            <div className="p-6 md:p-8 bg-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="text-white space-y-1 max-w-xl text-left">
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Featured Course</span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">{hero.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">{hero.desc}</p>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <button
                  onClick={() => openCourseDetails(hero)}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition text-xs uppercase tracking-wider border border-white/10"
                >
                  Course Details
                </button>

                <button
                  onClick={() => handleCourseAccess(hero)}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  {enrolledCourses.has(hero.id) ? "Access Videos" : "Unlock Course"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* grid of courses (3 cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.slice(1, 4).map((c) => {
            const thumb = c.thumbnail || youtubeThumbnail(c.videoUrl) || "/thumbnail.png";
            const isUnlocked = enrolledCourses.has(c.id);
            
            return (
              <article key={c.id} className="group bg-white border border-amber-200 rounded-2xl p-5 transition hover:scale-[1.02] hover:shadow-lg relative flex flex-col h-full">
                {/* Enrollment Badge */}
                {isUnlocked && (
                  <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Unlocked
                  </div>
                )}

                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-slate-800">
                  <Image 
                    src={thumb} 
                    alt={c.title} 
                    fill
                    className="object-cover" 
                  />
                </div>

                <h4 className="text-lg font-bold text-slate-900">{c.title}</h4>
                <p className="text-amber-700 text-xs mt-1">{c.level} · {c.duration}</p>

                <p className="text-slate-600 text-sm mt-3 line-clamp-3">{c.desc}</p>

                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {c.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 flex items-center justify-between gap-3 border-t border-slate-100">
                  <div>
                    <div className="text-amber-700 font-bold text-sm">{c.priceStr}</div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {c.duration}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCourseAccess(c)}
                      className={`px-4 py-2 ${
                        isUnlocked 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600' 
                          : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                      } text-white rounded-lg text-sm font-semibold transition shadow-md flex items-center gap-2`}
                    >
                      {isUnlocked ? (
                        <>
                          <Play className="w-4 h-4" />
                          Watch Videos
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          Enter Password
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* DETAILS MODAL */}
      {detailOpen && selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeDetails}
          />
          <div className="relative z-10 w-full max-w-3xl bg-white/95 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between p-5 border-b">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{selectedCourse.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{selectedCourse.level} · {selectedCourse.duration}</p>
              </div>
              <button onClick={closeDetails} className="p-2 hover:bg-slate-100 rounded-md">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-6">
              <div className="relative w-full aspect-[16/9] rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedCourse.thumbnail || "/thumbnail.png"}
                  alt={selectedCourse.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Course Curriculum</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {selectedCourse.syllabus?.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-amber-500 rounded-full" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Access Information</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{selectedCourse.desc}</p>

                  <div className="mt-4">
                    <div className="text-lg font-bold text-amber-700">{selectedCourse.priceStr}</div>
                    <div className="text-xs text-slate-500">
                      Access code is required to open class files.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button onClick={closeDetails} className="px-4 py-2 bg-white/60 rounded-lg border hover:bg-white transition">Close</button>
                <button
                  onClick={() => handleCourseAccess(selectedCourse)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg font-bold shadow-lg flex items-center gap-2 transition"
                >
                  <Lock className="w-5 h-5" />
                  {enrolledCourses.has(selectedCourse.id) ? "Watch Class Videos" : "Unlock with Password"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STUDENT PASSWORD MODAL */}
      {passwordModalOpen && courseToUnlock && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              setPasswordModalOpen(false);
              setCourseToUnlock(null);
              setPasswordInput("");
              setPasswordError("");
            }}
          />
          <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-amber-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-50 rounded-xl">
                  <KeyRound className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Enter Class Password</h3>
              </div>
              <button 
                onClick={() => {
                  setPasswordModalOpen(false);
                  setCourseToUnlock(null);
                  setPasswordInput("");
                  setPasswordError("");
                }}
                className="p-1 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <p className="text-slate-500 text-xs font-semibold leading-relaxed mb-6">
              Please enter the student password provided by your class instructor to unlock the study files for **{courseToUnlock.title}**.
            </p>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter Password (e.g. JAINVASTU)"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 outline-none text-sm font-bold uppercase tracking-wider"
                  autoFocus
                />
                {passwordError && (
                  <p className="text-[10px] font-bold text-red-500 mt-2">{passwordError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition shadow-lg"
              >
                Verify & Unlock Access
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PROTECTED VIDEO PLAYER MODAL */}
      {videoPlayerOpen && currentVideoUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90">
          <div className="relative w-full max-w-6xl h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl">
            <ProtectedVideoPlayer
              driveUrl={currentVideoUrl}
              title={currentVideoTitle}
              onClose={closeVideoPlayer}
            />
          </div>
        </div>
      )}
    </section>
  );
}
