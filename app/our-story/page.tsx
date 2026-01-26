import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Trophy, Target } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Skippy Education | Our Story - Education & Visa Consultancy in Australia",
  description:
    "Skippy Education provides expert guidance for international students seeking education opportunities and visa services in Australia.",
  generator: "v0.dev",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] max-sm:h-[450px] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2000&auto=format&fit=crop"
          alt="Sydney Opera House and Harbor"
          fill
          className="object-cover brightness-[1.1] "
          priority
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041e3a]/60 to-[#041e3a]/40 " />

        <div className="absolute inset-0 flex items-end">
          <div className="container pb-20 md:pb-28">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About Skippy Education
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Your trusted partner for education and visa consultancy services
                in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/ourstory.png"
                alt="Skippy Education Office"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <h3 className="text-xl font-bold mb-2">
                A considered approach to education guidance.
              </h3>
              <p className="text-gray-600 mb-4">
                Skippy Education was founded to offer students something
                different — calm, honest, and personalised guidance in a space
                often filled with complexity.
              </p>
              <p className="text-gray-600 mb-4">
                We take the time to understand your academic background,
                personal goals, and long-term plans before recommending any
                pathway. Every student’s journey is different, and we believe
                the advice should be too.
              </p>
              <p className="text-gray-600 mb-4">
                Our focus is not volume — it is quality, trust, and long-term
                success.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact "
                  className="uppercase border-b-2 border-[#041e3a] text-[#041e3a]  pb-1 text-md font-medium tracking-wide  hover:border-[#041e3a] transition">
                  Begin with a conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To empower international students with the knowledge, resources,
                and support they need to successfully pursue higher education in
                Australia and achieve their career goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Provide honest and transparent guidance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Simplify complex application processes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Maximize student success rates
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the most trusted education and visa consultancy for
                international students seeking to study in Australia, known for
                our integrity, expertise, and student-centered approach.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Set the industry standard for ethical practices
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Build a global network of successful alumni
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Continuously innovate our service offerings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced education consultants is dedicated to helping you achieve your academic and career
              goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-[4/3] relative">
                <Image src="/placeholder.svg?height=300&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-primary mb-3">Founder & Director</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in international education, Sarah founded Skippy Education to help
                  students navigate their educational journey.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-[4/3] relative">
                <Image src="/placeholder.svg?height=300&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-primary mb-3">Education Consultant</p>
                <p className="text-gray-600 mb-4">
                  Michael specializes in helping students find the right course and university to match their career
                  aspirations and academic background.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="aspect-[4/3] relative">
                <Image src="/placeholder.svg?height=300&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Priya Patel</h3>
                <p className="text-primary mb-3">Visa Specialist</p>
                <p className="text-gray-600 mb-4">
                  Priya has helped hundreds of students successfully navigate the Australian visa application process
                  with her expert knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Skippy Education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student-Centered</h3>
              <p className="text-gray-600">
                We put students' needs and goals at the center of everything we
                do.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all our services and interactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our services to meet evolving student
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
