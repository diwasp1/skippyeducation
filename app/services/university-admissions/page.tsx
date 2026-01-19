import Link from "next/link"
import Image from "next/image"
import { CheckCircle, BookOpen, FileText, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { campusImage, graduationImage } from "../../images"

export default function UniversityAdmissionsPage() {
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
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">University Admissions</h1>

        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
        End-to-end assistance with university applications and admissions to Australian institutions.
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
              <h2 className="text-3xl font-bold mb-6">Comprehensive Admissions Support</h2>
              <p className="text-gray-600 mb-4">
                Applying to universities in Australia can be a complex process, especially for international students.
                Our university admissions service provides end-to-end assistance to ensure your applications are
                submitted correctly and on time.
              </p>
              <p className="text-gray-600 mb-4">
                We guide you through every step of the application process, from document preparation to acceptance and
                enrollment. Our team has process, from document preparation to acceptance and enrollment. Our team has
                extensive experience with Australian university applications and understands the specific requirements
                of different institutions.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">Document preparation and verification</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">Application submission to multiple universities</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">Follow-up with universities</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">Offer letter guidance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-600">Acceptance and enrollment assistance</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={campusImage || "/placeholder.svg"}
                alt="University Campus"
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
            <h2 className="text-3xl font-bold mb-4">Our Admissions Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure your university applications are successful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Document Preparation</h3>
              <p className="text-gray-600 mb-4">
                We help you prepare all required documents for your university applications, ensuring they meet the
                specific requirements of each institution.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Academic transcripts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Statement of purpose</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>English proficiency tests</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Application Submission</h3>
              <p className="text-gray-600 mb-4">
                We submit your applications to your chosen universities, ensuring all requirements are met and deadlines
                are respected.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Online application completion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Document upload</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Application fee payment</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Offer Management</h3>
              <p className="text-gray-600 mb-4">
                We help you manage and evaluate offers from universities, providing guidance on the best options for
                your goals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Offer letter review</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Comparison of options</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Decision guidance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">
                We assist with the acceptance and enrollment process, ensuring a smooth transition to your chosen
                university.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Acceptance confirmation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Tuition fee payment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>CoE issuance</span>
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Our Admissions Service</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">
                      Benefit from our in-depth knowledge of Australian university admission requirements and processes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Streamlined Process</h3>
                    <p className="text-gray-600">
                      Save time and reduce stress with our efficient and organized approach to university applications.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timely Submissions</h3>
                    <p className="text-gray-600">
                      Ensure your applications are submitted before deadlines, maximizing your chances of acceptance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Higher Acceptance Rates</h3>
                    <p className="text-gray-600">
                      Improve your chances of acceptance with professionally prepared applications that highlight your
                      strengths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our university admissions service.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How many universities can I apply to?</h3>
              <p className="text-gray-600">
                We typically recommend applying to 3-5 universities to maximize your chances of acceptance while keeping
                the process manageable. However, we can assist with applications to as many universities as you wish.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What documents do I need for university applications?</h3>
              <p className="text-gray-600">
                Common documents include academic transcripts, English proficiency test results (IELTS, TOEFL, PTE),
                statement of purpose, resume/CV, and letters of recommendation. Specific requirements may vary by
                university and program.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does the application process take?</h3>
              <p className="text-gray-600">
                The application process typically takes 4-6 weeks from document preparation to receiving an offer.
                However, this timeline can vary depending on the university and the time of year. We recommend starting
                the process at least 3-4 months before your intended start date.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What if my application is rejected?</h3>
              <p className="text-gray-600">
                If your application is rejected, we'll work with you to understand the reasons and explore alternative
                options. This may include applying to different universities or programs, improving your application, or
                considering pathway programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply to Australian Universities?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Contact us today to get started with your university applications and take the first step towards your
            future in Australia.
          </p>
          <Button asChild size="lg" variant="white" className="shadow-md">
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
