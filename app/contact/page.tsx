import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import ConsultationForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Skippy Education | Contact Us - Education & Visa Consultancy in Australia",
  description:
    "Skippy Education provides expert guidance for international students seeking education opportunities and visa services in Australia.",
  generator: "v0.dev",
};

export default function ContactPage() {
  return (
    <>
      {/* <section
        className=""
        about="Contact Us"
        aria-details="Skippy Education | Contact Us">
        <div className="mt-40" />
        <div className="">
          <div className="container pb-20 md:pb-28">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl uppercase font-bold mb-6 text-primary">
                Contact Us
              </h1>

              <p className="text-lg md:text-xl text-primary mb-6 max-w-2xl mx-auto">
                Get in touch with our team for expert guidance on your education
                journey.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className=""
        about="Contact Us"
        aria-details="Skippy Education | Contact Us">
        <div className="mt-28 md:40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about studying in Australia? Fill out the form, and our team will get back to
                you as soon as possible.
              </p>
              <ConsultationForm />
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl md:text-3xl text-primary font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Office Address</h4>
                      <p className="text-gray-600">
                        115 Onkaparinga Cres, Canberra, ACT 2617, Australia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone / WhatsApp</h4>
                      <p className="text-gray-600">
                        <Link
                          href="tel:+61433618691"
                          className="hover:text-primary">
                          +61 433 618 691
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">
                        <Link
                          href="mailto:info@skippyeducation.com"
                          className="hover:text-primary">
                          info@skippyeducation.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/skippyeducation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </a>

                    <a
                      href="https://www.instagram.com/skippyeducation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>

                    <a
                      href="https://linkedin.com/company/skippyeducation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
                <div className="mt-5 flex flex-col">
                  <h1 className="text-xl text-primary font-medium text-center mb-4">
                    {" "}
                    Visit Our Office
                  </h1>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.530421665163!2d149.1083333764639!3d-35.21816387274032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b16532eb3e99d8f%3A0xd65930864e9114f0!2s115%20Onkaparinga%20Cres%2C%20Kaleen%20ACT%202617%2C%20Australia!5e0!3m2!1sen!2snp!4v1769182551150!5m2!1sen!2snp"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    height="450"
                    loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
       
      </section>

      {/* Map Section  */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in the heart of Sydney. Feel free to
              visit us during office hours.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[16/9] relative">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Office Location Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about contacting us and our
              services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                How can I book a consultation?
              </h3>
              <p className="text-gray-600">
                You can book a consultation by filling out the contact form on
                this page, calling our office, or sending us an email. We offer
                both in-person and virtual consultations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Is the initial consultation free?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a free initial consultation to understand your
                needs and provide general guidance. During this session, we'll
                assess your eligibility and discuss potential pathways.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                How quickly will you respond to my inquiry?
              </h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 hours during
                business days. For urgent matters, we recommend calling our
                office directly.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Do you offer services remotely?
              </h3>
              <p className="text-gray-600">
                Yes, we offer all our services remotely via video conferencing,
                phone, and email. You don't need to visit our office in person
                if it's not convenient for you.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
