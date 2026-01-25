import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Plane, FileText, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { visaPassportImage, officeMeetingImage } from "../../images";
import BookFreeConsultationFooter from "@/components/BookFreeConsultationFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Skippy Education | Visa Application - Education & Visa Consultancy in Australia",
  description:
    "Skippy Education provides expert guidance for international students seeking education opportunities and visa services in Australia.",
  generator: "v0.dev",
};

export default function VisaApplicationPage() {
  return (
    <>
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
                Visa Application
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Expert guidance for Australian student visa applications with
                high success rates.
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
                Australian Student Visa Assistance
              </h2>
              <p className="text-gray-600 mb-4">
                Navigating the Australian student visa application process can
                be complex and overwhelming. Our visa application service
                provides expert guidance to ensure your application is prepared
                correctly and submitted on time.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced visa specialists understands the
                requirements and procedures for Australian student visas. We
                provide comprehensive support throughout the entire process,
                from eligibility assessment to visa grant.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">Eligibility assessment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Document preparation and verification
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Visa application submission
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Biometrics and health check guidance
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Application status monitoring
                  </span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={visaPassportImage || "/placeholder.svg"}
                alt="Visa and Passport"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Student Visas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide guidance for various types of Australian visas based on
              your educational goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Student Visa (Subclass 500)
              </h3>
              <p className="text-gray-600 mb-4">
                The main visa for international students studying full-time in
                Australia. It allows you to stay for up to 5 years and work
                part-time during your studies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>For all levels of study</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Work up to 48 hours per fortnight</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Bring family members</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Student Guardian Visa (Subclass 590)
              </h3>
              <p className="text-gray-600 mb-4">
                For guardians of international students under 18 years of age.
                It allows you to stay in Australia as the guardian of a student
                visa holder.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>For guardians of minor students</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>No work rights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Valid for the same period as the student visa</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Temporary Graduate Visa (Subclass 485)
              </h3>
              <p className="text-gray-600 mb-4">
                For international students who have completed their studies in
                Australia and want to gain work experience.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Post-study work stream (2-4 years)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Graduate work stream (18 months)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Full work rights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Visa Application Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth visa application
              experience.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>
              <div className="space-y-12">
                <div className="relative grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-2 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">
                      1
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">
                      Initial Assessment
                    </h3>
                    <p className="text-gray-600">
                      We assess your eligibility for an Australian student visa
                      based on your educational background, financial capacity,
                      and other relevant factors.
                    </p>
                  </div>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-2 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">
                      2
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">
                      Document Preparation
                    </h3>
                    <p className="text-gray-600">
                      We guide you in preparing all required documents,
                      including financial statements, health insurance, and
                      confirmation of enrollment (CoE).
                    </p>
                  </div>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-2 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">
                      3
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">
                      Visa Application Submission
                    </h3>
                    <p className="text-gray-600">
                      We assist you in completing the online visa application
                      form and submitting it along with all required documents.
                    </p>
                  </div>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-2 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">
                      4
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">
                      Biometrics & Health Check
                    </h3>
                    <p className="text-gray-600">
                      If required, we guide you through the process of providing
                      biometrics and completing health examinations.
                    </p>
                  </div>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-2 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10">
                      5
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3">Visa Decision</h3>
                    <p className="text-gray-600">
                      We monitor your application status and keep you updated
                      throughout the process until a decision is made.
                    </p>
                  </div>
                </div>
              </div>
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
                src={officeMeetingImage || "/placeholder.svg"}
                alt="Visa Consultation"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Benefits of Our Visa Service
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-600">
                      Benefit from our in-depth knowledge of Australian visa
                      requirements and procedures.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Time Savings</h3>
                    <p className="text-gray-600">
                      Save time with our efficient and organized approach to
                      visa applications.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Reduced Stress
                    </h3>
                    <p className="text-gray-600">
                      Minimize stress and anxiety with our support throughout
                      the visa application process.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Higher Success Rates
                    </h3>
                    <p className="text-gray-600">
                      Improve your chances of visa approval with professionally
                      prepared applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visa Requirements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the key requirements for an Australian student visa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Genuine Temporary Entrant (GTE)
                  </h3>
                  <p className="text-gray-600">
                    You must demonstrate that you genuinely intend to stay in
                    Australia temporarily for study purposes. This is assessed
                    through a statement and supporting documents.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Confirmation of Enrolment (CoE)
                  </h3>
                  <p className="text-gray-600">
                    You must have a CoE from an Australian educational
                    institution registered to accept international students.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Financial Requirements
                  </h3>
                  <p className="text-gray-600">
                    You must demonstrate that you have sufficient funds to cover
                    your tuition fees, living expenses, and travel costs for
                    yourself and any accompanying family members.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    English Language Proficiency
                  </h3>
                  <p className="text-gray-600">
                    You must meet the English language requirements, typically
                    through tests like IELTS, TOEFL, or PTE, unless exempted.
                  </p>
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
