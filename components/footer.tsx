import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img
                  src="/images/logo4.png"
                  alt="Skippy Education and Visa Services"
                  className="h-20 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Your trusted partner for education and visa consultancy services
              in Australia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/skippyeducation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/skippyeducation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>

              <a
                href="https://linkedin.com/company/skippyeducation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-story"
                  className="text-sm text-gray-600 hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-600 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/story-book"
                  className="text-sm text-gray-600 hover:text-primary">
                  Storybook
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">
                  115 Onkaparinga Cres, Canberra, ACT 2617, Australia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <Link
                  href="tel:+61433618691"
                  className="text-sm text-gray-600 hover:text-primary">
                  +61 433 618 691
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <Link
                  href="mailto:info@skippyeducation.com"
                  className="text-sm text-gray-600 hover:text-primary">
                  info@skippyeducation.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-6">
          <p className="text-sm text-gray-600 pb-2">
          <strong>Acknowledgement of Country:</strong> Skippy Education and Visa Services Pty. Ltd. acknowledges the Traditional Custodians of the land across Australia and respects their cultures and Elders, past, present, and emerging.
          </p>
          <p className="text-sm text-gray-600">
          <strong>Disclaimer:</strong> Information provided on this website is for general guidance only and does not constitute legal or migration advice. Education and visa requirements may change, and outcomes depend on individual circumstances. Skippy Education is not responsible for any loss arising from reliance on this information.
          </p>
        </div>
        <div className="border-t mt-12 mb-12 lg:mb-0 pt-6">
          <p className="text-center text-sm text-gray-600">
            © 2026 Skippy Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
