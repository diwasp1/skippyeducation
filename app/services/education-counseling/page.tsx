import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  GraduationCap,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { studentsStudyingImage, graduationImage } from "../../images";
import BookFreeConsultationFooter from "@/components/BookFreeConsultationFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Skippy Education | Education Counseling - Education & Visa Consultancy in Australia",
  description:
    "Skippy Education provides expert guidance for international students seeking education opportunities and visa services in Australia.",
  generator: "v0.dev",
};

export default function EducationCounselingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2000&auto=format&fit=crop"
          alt="Sydney Opera House and Harbor"
          fill
          className="object-cover brightness-[1.1]"
          priority
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041e3a]/60 to-[#041e3a]/40 " />

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-20 md:pb-28">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Education Counseling
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Personalized guidance to help you choose the right course and
                university in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Expert Education Counseling
              </h2>
              <p className="text-gray-600 mb-4">
                Choosing the right course and university is a crucial decision
                that can shape your future career. Our education counseling
                service provides personalized guidance to help you make informed
                decisions about your education in Australia.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced education consultants works closely with
                you to understand your academic background, career aspirations,
                and personal preferences. We then provide tailored
                recommendations based on this information and our in-depth
                knowledge of Australian education institutions.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Personalized course and university recommendations
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Assessment of academic background and eligibility
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Information on admission requirements
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Guidance on English language requirements
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">Career pathway planning</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={studentsStudyingImage || "/placeholder.svg"}
                alt="Education Counseling"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Counseling Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure you receive the best
              guidance for your educational journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Initial Assessment</h3>
              <p className="text-gray-600 mb-4">
                We begin by understanding your academic background, career
                goals, and personal preferences through a detailed consultation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Review of academic transcripts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Discussion of career aspirations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Assessment of eligibility</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Course & University Selection
              </h3>
              <p className="text-gray-600 mb-4">
                Based on our assessment, we provide personalized recommendations
                for courses and universities that align with your goals.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Course recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>University comparisons</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Information on admission requirements</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                We provide continuous support throughout your application
                process and beyond to ensure your success.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Application assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Visa guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Pre-departure briefing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={graduationImage || "/placeholder.svg"}
                alt="Graduation Ceremony"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Benefits of Our Education Counseling
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-600">
                      Benefit from the knowledge and experience of our education
                      consultants who understand the Australian education
                      system.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Personalized Recommendations
                    </h3>
                    <p className="text-gray-600">
                      Receive tailored course and university recommendations
                      based on your academic background and career goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Time and Effort Savings
                    </h3>
                    <p className="text-gray-600">
                      Save time and effort by leveraging our knowledge and
                      connections instead of researching everything on your own.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Increased Chances of Success
                    </h3>
                    <p className="text-gray-600">
                      Improve your chances of admission by applying to
                      institutions that match your profile and aspirations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Education Counseling
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our approach to education counseling is designed to provide you
              with the best possible guidance for your educational journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                We understand that every student is unique, with different
                academic backgrounds, career aspirations, and personal
                preferences. Our counseling is tailored to your specific needs
                and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Up-to-Date Information</h3>
              <p className="text-gray-600">
                We maintain strong relationships with Australian universities
                and institutions, ensuring that we provide you with the most
                current and relevant information about courses, admission
                requirements, and scholarships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Holistic Support</h3>
              <p className="text-gray-600">
                Our education counseling is part of our comprehensive support
                system, which includes assistance with university applications,
                visa guidance, and pre-departure preparations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookFreeConsultationFooter />
    </>
  );
}
