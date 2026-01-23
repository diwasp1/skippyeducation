import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Plane, Award, Users } from "lucide-react";
import BookFreeConsultationFooter from "@/components/BookFreeConsultationFooter";

export default function VisaServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1468779036391-52341f60b55d?q=80&w=2000&auto=format&fit=crop"
          alt="Visa and Passport"
          fill
          className="object-cover brightness-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Visa Services
              </h1>
              <p className="text-xl text-white/90 max-w-xl">
                Expert guidance for Australian student visa applications with
                high success rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Australian Student Visa
              </h2>
              <p className="text-gray-600 mb-4">
                The Student visa (subclass 500) allows you to stay in Australia
                for up to 5 years to study full-time at an educational
                institution. At Skippy Education, we provide comprehensive
                guidance throughout the visa application process.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced visa specialists has a proven track
                record of successful visa applications. We understand the
                complexities of the Australian visa system and can help you
                navigate the process with ease.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Expert guidance throughout the process
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Document verification and preparation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Visa interview preparation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Regular application status updates
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Post-visa guidance and support
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="shadow-md">
                  <Link href="/contact">Get Visa Assistance</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&h=1080&auto=format&fit=crop"
                alt="Visa Consultation"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Types of Student Visas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide guidance for various types of Australian visas based on
              your educational goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
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
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
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
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-secondary text-xs">✓</span>
                  </div>
                  <span>For guardians of minor students</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-secondary text-xs">✓</span>
                  </div>
                  <span>No work rights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-secondary text-xs">✓</span>
                  </div>
                  <span>Valid for the same period as the student visa</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
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
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
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
                    <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary">
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
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
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
                    <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                      4
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary">
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
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                      5
                    </div>
                  </div>
                  <div className="md:col-span-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
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

      <BookFreeConsultationFooter />
    </>
  );
}
