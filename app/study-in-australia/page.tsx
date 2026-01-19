import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, GraduationCap, Building, Users, Landmark, MapPin, Sun } from "lucide-react"

export default function StudyInAustraliaPage() {
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
      <h1 className="text-4xl md:text-5xl uppercase font-bold mb-6 text-white">Storybook</h1>

        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
        Your trusted partner for education and visa consultancy services in Australia.
        </p>

      </div>
    </div>
  </div>
</section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative  overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&h=1080&auto=format&fit=crop"
                alt="Students in Australia"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">Why Study in Australia?</h2>
              <p className="text-gray-600 mb-4">
                Australia is home to some of the world's top universities and offers a high-quality education system
                recognized globally. With its diverse culture, stunning landscapes, and excellent quality of life,
                Australia is an ideal destination for international students.
              </p>
         
                <div className="mt-6">
                  <Link href="/study-in-australia"  className="uppercase border-b-2 border-[#041e3a] text-[#041e3a]  pb-1 text-md font-medium tracking-wide  hover:border-[#041e3a] transition">Read More</Link>
              </div>

            </div>
          
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative  overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&h=1080&auto=format&fit=crop"
                alt="Students in Australia"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">Why Study in Australia?</h2>
              <p className="text-gray-600 mb-4">
                Australia is home to some of the world's top universities and offers a high-quality education system
                recognized globally. With its diverse culture, stunning landscapes, and excellent quality of life,
                Australia is an ideal destination for international students.
              </p>
         
                <div className="mt-6">
                  <Link href="/study-in-australia"  className="uppercase border-b-2 border-[#041e3a] text-[#041e3a]  pb-1 text-md font-medium tracking-wide  hover:border-[#041e3a] transition">Read More</Link>
              </div>

            </div>
          
          </div>
        </div>
      </section>

      {/* Education System Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Australian Education System</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Australia offers a diverse range of study options for international students across different education
              levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Universities</h3>
              <p className="text-gray-600 mb-4">
                Australia has 43 universities offering undergraduate and postgraduate degrees across various
                disciplines. Australian universities are known for their research and innovation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Bachelor's degrees (3-4 years)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Master's degrees (1-2 years)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Doctoral degrees (3-4 years)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vocational Education</h3>
              <p className="text-gray-600 mb-4">
                Vocational Education and Training (VET) focuses on practical skills and work-specific training, offering
                certificates, diplomas, and advanced diplomas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-secondary text-xs">✓</span>
                  </div>
                  <span>Certificates I-IV (6-12 months)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-secondary text-xs">✓</span>
                  </div>
                  <span>Diplomas (1-2 years)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-secondary text-xs">✓</span>
                  </div>
                  <span>Advanced Diplomas (1.5-2 years)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">English Language Courses</h3>
              <p className="text-gray-600 mb-4">
                Australia offers a wide range of English language courses for international students to improve their
                language skills before or during their studies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>General English courses</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>English for Academic Purposes (EAP)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>IELTS preparation courses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Study Destinations */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Popular Study Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Australia offers diverse study destinations, each with its unique lifestyle and educational opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920&h=1080&auto=format&fit=crop"
                  alt="Sydney"
                  fill
                  className="object-cover brightness-[1.1] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Sydney</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Australia's largest city offers a vibrant lifestyle, beautiful beaches, and world-renowned
                  institutions like the University of Sydney and UNSW.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Landmark className="h-4 w-4 mr-1" />
                  <span>5 major universities</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=1920&h=1080&auto=format&fit=crop"
                  alt="Melbourne"
                  fill
                  className="object-cover brightness-[1.1] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Melbourne</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Known as Australia's cultural capital, Melbourne offers a rich arts scene, excellent coffee, and top
                  institutions like the University of Melbourne.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Landmark className="h-4 w-4 mr-1" />
                  <span>7 major universities</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1566734904496-9309bb1798b5?q=80&w=1920&h=1080&auto=format&fit=crop"
                  alt="Brisbane"
                  fill
                  className="object-cover brightness-[1.1] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Brisbane</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Brisbane offers a subtropical climate, relaxed lifestyle, and quality education at institutions like
                  the University of Queensland.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Landmark className="h-4 w-4 mr-1" />
                  <span>3 major universities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/study-in-australia">Explore All Study Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Living in Australia */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Living in Australia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Australia offers a high quality of life with its diverse culture, beautiful landscapes, and excellent
              healthcare and transportation systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
                  <p className="text-gray-600">
                    International students can choose from various accommodation options, including on-campus housing,
                    homestays, shared rentals, and private rentals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Sun className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Climate</h3>
                  <p className="text-gray-600">
                    Australia has a diverse climate, from tropical in the north to temperate in the south. Most cities
                    enjoy warm summers and mild winters.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Culture & Lifestyle</h3>
                  <p className="text-gray-600">
                    Australia is known for its relaxed lifestyle, multicultural society, and love for outdoor
                    activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=1920&h=1080&auto=format&fit=crop"
                alt="Living in Australia"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Australian Education Journey?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and take the first step towards your future in Australia.
          </p>
          <Button asChild size="xl" variant="white" className="shadow-md">
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
