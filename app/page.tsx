import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  BookOpen,
  Plane,
  Home,
  Clock,
  Globe,
  BookMarked,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import BookingDialog from "@/components/Cal.com";
import ReusuableLinkButton from "@/components/ReusuableButton";
import BookFreeConsultationFooter from "@/components/BookFreeConsultationFooter";

export default function HomePage() {
  return (
    <>
      <section className="relative max-sm:h-[450px] sm:min-h-[700px] h-[100vh] xl:h-[85vh]  md:min-h-[450px] w-full overflow-hidden">
        {/* <Image
          src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2000&auto=format&fit=crop"
          alt="Sydney Opera House and Harbor"
          fill
          className="object-cover brightness-[1.1] "
          priority
        /> */}

<video
    src="/videos/herovideo.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover brightness-[1.1]"
  />

        <div className="absolute inset-0 bg-gradient-to-b from-[#041e3a]/60 to-[#041e3a]/40 " />

        <div className="absolute inset-0 flex items-end">
          <div className="container pb-20 md:pb-28">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className=" text-2xl md:text-4xl  font-bold text-white leading-tight mb-4">
                Your Journey to Australian Education Starts Here
              </h1>

              <p className="hidden md:block text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Expert guidance for international students seeking quality
                education and visa services in Australia.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="hidden md:block">
                <BookingDialog noButton={true}  />
                </div>
          
<div>
<a
  href="https://wa.me/61433618691"
  target="_blank"
  rel="noopener noreferrer"
  className="
    uppercase cursor-pointer
    px-6 py-3
    text-white text-md font-medium tracking-wide
    rounded-xl
    bg-white/15
    backdrop-blur-md
    border border-white/30
    shadow-lg shadow-black/10
    hover:bg-white/25
    hover:shadow-xl
    transition-all duration-300
    inline-flex items-center justify-center gap-2
    hover:border-white/60
    
  "
>
  Chat on WhatsApp
</a>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Skippy Education and Visa Services
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Skippy Education and Visa Services is a dedicated education and
                migration consultant agency focused on connecting students with
                Australian education opportunities.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                With a team of certified education consultants and migration
                experts, we provide personalized guidance to help you navigate
                the complexities of studying abroad. Our partnerships with
                leading Australian institutions ensure you receive the best
                advice for your educational journey.
              </p>
              <ReusuableLinkButton
                text="Learn More About Us"
                href="/our-story"
                color="primary"
              />
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-b-4 border-primary hover:shadow-xl transition-shadow">
                <Globe className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-xl mb-2">
                  Global Perspective
                </h3>
                <p className="text-gray-600">
                  International education experts with local Australian
                  knowledge
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-b-4 border-primary hover:shadow-xl transition-shadow">
                <BookMarked className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-xl mb-2">
                  Certified Advisors
                </h3>
                <p className="text-gray-600">
                  Qualified education and migration consultants
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-b-4 border-primary hover:shadow-xl transition-shadow">
                <Lightbulb className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-xl mb-2">
                  Personalized Approach
                </h3>
                <p className="text-gray-600">
                  Tailored guidance for your unique educational goals
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-b-4 border-primary hover:shadow-xl transition-shadow">
                <Award className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-xl mb-2">
                  Quality Partnerships
                </h3>
                <p className="text-gray-600">
                  Connected with leading Australian institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 lg:py-20 bg-gray-50">
        <div className="container">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl lg:mx-auto">
              We provide comprehensive education and visa consultancy services
              to help you achieve your dreams of studying in Australia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Education Counseling"
              description="Personalized guidance to help you choose the right course and university."
              icon={GraduationCap}
              href="/services/education-counseling"
              color="primary"
            />
            <ServiceCard
              title="University Admissions"
              description="End-to-end assistance with university applications and admissions."
              icon={BookOpen}
              href="/services/university-admissions"
              color="primary"
            />
            <ServiceCard
              title="Visa Application"
              description="Expert guidance for student visa applications with high success rates."
              icon={Plane}
              href="/services/visa-application"
              color="primary"
            />
            <ServiceCard
              title="Scholarship Guidance"
              description="Help you identify and apply for suitable scholarships and financial aid."
              icon={Award}
              href="/services/scholarship-guidance"
              color="primary"
            />
            <ServiceCard
              title="Pre-Departure Briefing"
              description="Comprehensive briefing to prepare you for life and study in Australia."
              icon={Clock}
              href="/services/pre-departure-briefing"
              color="primary"
            />
            <ServiceCard
              title="Accommodation"
              description="Assistance in finding suitable accommodation options in Australia."
              icon={Home}
              href="/services/accommodation"
              color="primary"
            />
          </div>
          <div className="text-center mt-10">
            <ReusuableLinkButton
              text="View All Services"
              href="/services"
              color="primary"
            />
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      {/* <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Popular Study Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Australia offers diverse study destinations, each with its unique
              lifestyle and educational opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920&h=1080&auto=format&fit=crop"
                  alt="Sydney"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105  brightness-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Sydney</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-4">
                  Australia's largest city offers a vibrant lifestyle, beautiful
                  beaches, and world-renowned institutions like the University
                  of Sydney and UNSW.
                </p>
                <ReusuableLinkButton
                  text="Learn more"
                  href="/story-book"
                  color="primary"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=1920&h=1080&auto=format&fit=crop"
                  alt="Melbourne"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 brightness-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Melbourne</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-4">
                  Known as Australia's cultural capital, Melbourne offers a rich
                  arts scene, excellent coffee, and top institutions like the
                  University of Melbourne.
                </p>

                <ReusuableLinkButton
                  text="Learn more"
                  href="/story-book"
                  color="primary"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920&h=1080&auto=format&fit=crop"
                  alt="Brisbane"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 brightness-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Brisbane</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-4">
                  Brisbane offers a subtropical climate, relaxed lifestyle, and
                  quality education at institutions like the University of
                  Queensland.
                </p>
                <ReusuableLinkButton
                  text="Learn more"
                  href="/story-book"
                  color="primary"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <ReusuableLinkButton
              text="Explore All Study Destinations"
              href="/story-book"
              color="primary"
            />
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Choose Skippy Education
            </h2>
            <p className="text-gray-600 max-w-2xl lg:mx-auto">
              We're committed to providing exceptional service and support
              throughout your educational journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              content="Our personalized approach ensures that each student receives guidance tailored to their unique educational goals and career aspirations."
              author="Personalized Guidance"
              role="Our Commitment"
              initials="PG"
              color="primary"
            />
            <TestimonialCard
              content="We maintain strong relationships with Australian universities and institutions to provide you with the most current and relevant information."
              author="University Connections"
              role="Our Network"
              initials="UC"
              color="primary"
            />
            <TestimonialCard
              content="From initial consultation to arrival in Australia, we provide comprehensive support at every step of your educational journey."
              author="End-to-End Support"
              role="Our Service"
              initials="ES"
              color="primary"
            />
          </div>
        </div>
      </section>

      {/* <BookFreeConsultationFooter /> */}
    </>
  );
}
