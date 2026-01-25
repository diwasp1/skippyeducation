import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Award, BookOpen, Search, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { graduationImage, studentsStudyingImage } from "../../images";
import BookFreeConsultationFooter from "@/components/BookFreeConsultationFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Skippy Education | Scholarship Guidance - Education & Visa Consultancy in Australia",
  description:
    "Skippy Education provides expert guidance for international students seeking education opportunities and visa services in Australia.",
  generator: "v0.dev",
};

export default function ScholarshipGuidancePage() {
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
                Scholarship Guidance
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Expert assistance to help you identify and apply for
                scholarships at Australian institutions.
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
                Comprehensive Scholarship Support
              </h2>
              <p className="text-gray-600 mb-4">
                Financing your education in Australia is a significant
                consideration. Our scholarship guidance service helps you
                identify and apply for suitable scholarships and financial aid
                opportunities to make your Australian education more affordable.
              </p>
              <p className="text-gray-600 mb-4">
                Our team stays up-to-date with the latest scholarship
                opportunities at Australian universities and external
                organizations. We provide personalized guidance based on your
                academic background, field of study, and other relevant factors.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Scholarship eligibility assessment
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Identification of suitable scholarships
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Application preparation assistance
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Scholarship essay and statement review
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Interview preparation (if required)
                  </span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={graduationImage || "/placeholder.svg"}
                alt="Scholarship Recipient"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Scholarships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help you explore various scholarship opportunities available
              for international students in Australia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                University Scholarships
              </h3>
              <p className="text-gray-600 mb-4">
                Many Australian universities offer scholarships specifically for
                international students based on academic merit, leadership, or
                other criteria.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Merit-based scholarships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Leadership scholarships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Diversity scholarships</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Government Scholarships
              </h3>
              <p className="text-gray-600 mb-4">
                The Australian government and other governments offer
                scholarships for international students to study in Australia.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Australia Awards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Endeavour Scholarships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Home country government scholarships</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">External Scholarships</h3>
              <p className="text-gray-600 mb-4">
                Various organizations, foundations, and companies offer
                scholarships for international students studying in Australia.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Industry-specific scholarships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Foundation scholarships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Corporate scholarships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Scholarship Guidance Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to help you identify and apply for
              suitable scholarships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Eligibility Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                We assess your eligibility for various scholarships based on
                your academic background, achievements, and other relevant
                factors.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
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
                  <span>Assessment of extracurricular activities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Evaluation of work experience</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Scholarship Identification
              </h3>
              <p className="text-gray-600 mb-4">
                We identify suitable scholarships based on your eligibility,
                field of study, and other criteria.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>University scholarships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Government scholarships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>External scholarships</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Application Preparation
              </h3>
              <p className="text-gray-600 mb-4">
                We assist you in preparing compelling scholarship applications
                that highlight your strengths and achievements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Essay and statement review</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Document preparation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Application submission</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Follow-up & Support
              </h3>
              <p className="text-gray-600 mb-4">
                We provide ongoing support throughout the scholarship
                application process, including interview preparation if
                required.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Application status monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Interview preparation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Scholarship acceptance guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={studentsStudyingImage || "/placeholder.svg"}
                alt="Students Studying"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Benefits of Our Scholarship Guidance
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Access to Opportunities
                    </h3>
                    <p className="text-gray-600">
                      Gain access to a wide range of scholarship opportunities
                      that you might not discover on your own.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-600">
                      Benefit from our expertise in scholarship applications and
                      understanding of what scholarship committees look for.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Financial Savings
                    </h3>
                    <p className="text-gray-600">
                      Potentially save thousands of dollars in tuition fees and
                      living expenses through scholarships.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Competitive Edge
                    </h3>
                    <p className="text-gray-600">
                      Stand out from other applicants with professionally
                      prepared scholarship applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookFreeConsultationFooter />
    </>
  );
}
