import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  GraduationCap,
  Building,
  Users,
  Landmark,
  MapPin,
  Sun,
} from "lucide-react";
import BookFreeConsultationFooter from "@/components/BookFreeConsultationFooter";
import { storyBookData } from "./data";

export default function StudyInAustraliaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mt-28">
        {/* Content */}
          <div className="container ">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Storybook
              </h1>
        </div>
      </section>

      {storyBookData.map((story) => (
  <section
    key={story.id}
    className="bg-gradient-to-b from-white to-slate-50 py-12"
  >
    <div className="container">
      <div
        className="
          group
          grid grid-cols-1 lg:grid-cols-2
          gap-8
          rounded-3xl
          overflow-hidden
          border border-slate-200
          bg-white
          shadow-lg hover:shadow-2xl
          transition-all duration-300

          h-auto lg:h-[420px]
        "
      >
        {/* Image Side */}
        <div className="relative overflow-hidden h-[260px] lg:h-full">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-between p-6 md:p-8 h-full">
          <div>
            <h2 className="text-xs tracking-widest text-[#041e3a] uppercase font-semibold mb-2">
              {story.category}
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              {story.title}
            </h3>

            <p className="italic text-slate-500 mb-4">
              {story.subtitle}
            </p>

            <p className="text-slate-600 leading-relaxed line-clamp-3">
              {story.article}
            </p>
          </div>

          <div className="mt-6">
            <Link
              href={`/story-book/${story.slug}`}
              className="inline-flex items-center gap-2 text-[#041e3a] font-semibold tracking-wide uppercase text-sm border-b-2 border-transparent hover:border-[#041e3a] transition-all"
            >
              Read the Story
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
))}

    </>
  );
}
