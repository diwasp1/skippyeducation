import React from "react";
import BookingDialog from "./Cal.com";

const BookFreeConsultationFooter = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Australian Education Journey?
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation and take the first step
          towards your future in Australia.
        </p>
        <BookingDialog btnVarient="white" btnText="Book a free Consulation" />
      </div>
    </section>
  );
};

export default BookFreeConsultationFooter;
