import {
  GraduationCap,
  Award,
  BookOpen,
  Plane,
  Home,
  Clock,
  FileText,
  Globe,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { studentsStudyingImage, graduationImage, campusImage } from "../images";
import BookFreeConsultationFooter from "@/components/BookFreeConsultationFooter";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Skippy Education | Services - Education & Visa Consultancy in Australia",
  description:
    "Skippy Education provides expert guidance for international students seeking education opportunities and visa services in Australia.",
  generator: "v0.dev",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="">

        <div className=" mt-32 " />
        <div className=" flex items-end">
          <div className="container pb-20 md:pb-28">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Our Services
              </h1>

              <p className="text-lg md:text-xl text-primary mb-6 max-w-2xl mx-auto">
                Comprehensive education and visa consultancy services to help
                you achieve your dreams of studying in Australia.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Overview */}
      <section className="pb-16 mt-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Our Services
              </h2>
              <p className="text-gray-600 mb-4">
                At Skippy Education, we understand that studying abroad is a
                significant decision. That's why we offer a complete range of
                services designed to support you at every step of your
                educational journey.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of education consultants works closely with you to
                understand your academic background, career aspirations, and
                personal preferences to provide tailored guidance and support.
              </p>
              <p className="text-gray-600 mb-4">
                From choosing the right course and university to helping with
                visa applications and pre-departure preparations, we're with you
                every step of the way.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={studentsStudyingImage || "/placeholder.svg"}
                alt="Students studying"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="lg:text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Service Offerings</h2>
            <p className="text-gray-600 max-w-2xl lg:mx-auto">
              Explore our comprehensive range of services designed to support
              your educational journey in Australia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Education Counseling"
              description="Personalized guidance to help you choose the right course and university based on your academic background and career goals."
              icon={GraduationCap}
              href="/services/education-counseling"
            />
            <ServiceCard
              title="University Admissions"
              description="End-to-end assistance with university applications, including document preparation and submission."
              icon={BookOpen}
              href="/services/university-admissions"
            />
            <ServiceCard
              title="Visa Application"
              description="Expert guidance for student visa applications, including eligibility assessment and document verification."
              icon={Plane}
              href="/services/visa-application"
            />
            <ServiceCard
              title="Scholarship Guidance"
              description="Help you identify and apply for suitable scholarships and financial aid opportunities at Australian institutions."
              icon={Award}
              href="/services/scholarship-guidance"
            />
            <ServiceCard
              title="Pre-Departure Briefing"
              description="Comprehensive briefing to prepare you for life and study in Australia, including cultural adaptation and practical tips."
              icon={Clock}
              href="/services"
            />
            <ServiceCard
              title="Accommodation"
              description="Assistance in finding suitable accommodation options in Australia, including on-campus housing and private rentals."
              icon={Home}
              href="/services"
            />
            <ServiceCard
              title="Financial Guidance"
              description="Advice on tuition fees, living expenses, and financial planning to help you budget for your studies in Australia."
              icon={FileText}
              href="/services"
            />
            <ServiceCard
              title="Course Selection"
              description="Expert advice on choosing the right course that aligns with your career goals and academic background."
              icon={Lightbulb}
              href="/services"
            />
            <ServiceCard
              title="Post-Arrival Support"
              description="Ongoing support after you arrive in Australia to help you settle in and navigate your new environment."
              icon={Globe}
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* Education Counseling Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Education Counseling</h2>
              <p className="text-gray-600 mb-4">
                Our education counseling service is the foundation of your
                journey to study in Australia. We provide personalized guidance
                to help you make informed decisions about your education.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">
                    Assessment of academic background and career goals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">
                    Course and university recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">
                    Information on admission requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">
                    Guidance on English language requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Career pathway planning</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="secondary" className="shadow-md">
                  <Link href="/services/education-counseling">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
              <Image
                src={graduationImage || "/placeholder.svg"}
                alt="Education Counseling"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* University Admissions Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={campusImage || "/placeholder.svg"}
                alt="University Campus"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">University Admissions</h2>
              <p className="text-gray-600 mb-4">
                Our university admissions service takes the stress out of the
                application process. We provide end-to-end assistance to ensure
                your applications are submitted correctly and on time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">
                    Document preparation and verification
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">
                    Application submission to multiple universities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">
                    Follow-up with universities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Offer letter guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">
                    Acceptance and enrollment assistance
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="secondary" className="shadow-md">
                  <Link href="/services/university-admissions">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl lg:mx-auto">
              We follow a structured approach to ensure you receive the best
              guidance and support throughout your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Initial Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                We understand your academic background, career goals, and
                preferences to provide personalized guidance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Free consultation session</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Assessment of eligibility</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Understanding your goals</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Course & University Selection
              </h3>
              <p className="text-gray-600 mb-4">
                We help you choose the right course and university based on your
                academic background and career goals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
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
                  <span>Career pathway planning</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Application & Admission
              </h3>
              <p className="text-gray-600 mb-4">
                We assist with preparing and submitting applications to your
                chosen universities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
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
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Offer letter guidance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">
                Visa & Pre-Departure
              </h3>
              <p className="text-gray-600 mb-4">
                We guide you through the visa application process and prepare
                you for your journey to Australia.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Visa application assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Pre-departure briefing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Accommodation arrangements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl lg:mx-auto">
              Find answers to common questions about our services and studying
              in Australia.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Do you charge for your services?
              </h3>
              <p className="text-gray-600">
                Most of our education counseling and university application
                services are provided at no cost to students. We receive
                commissions from our partner universities. However, some
                specialized services like visa application assistance may have
                associated fees, which we will clearly communicate upfront.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                How do I get started with your services?
              </h3>
              <p className="text-gray-600">
                Getting started is easy! Simply book a free initial consultation
                through our website or by contacting our office. During this
                consultation, we'll discuss your educational background, career
                goals, and preferences to provide personalized guidance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Which universities do you work with?
              </h3>
              <p className="text-gray-600">
                We work with a wide range of universities and institutions
                across Australia, including top-ranked universities and
                specialized institutions. Our partnerships allow us to provide
                you with the most up-to-date information and support for your
                applications.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                How long does the entire process take?
              </h3>
              <p className="text-gray-600">
                The timeline varies depending on your specific circumstances,
                the courses you're applying for, and visa processing times.
                Generally, we recommend starting the process at least 6-8 months
                before your intended start date to allow sufficient time for
                applications, visa processing, and pre-departure preparations.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="secondary" className="shadow-md">
              <Link href="/contact">Contact Us for More Information</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <BookFreeConsultationFooter /> */}
    </>
  );
}
