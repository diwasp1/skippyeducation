"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

export default function BookingDialog({
  btnVarient = "ghost",
  noButton = false,
  isScrolled = false,
  btnText = "BOOK CONSULTATION",
}: {
  btnVarient?:
    | "primary"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "white"
    | "cancel";
  noButton?: boolean;
  isScrolled?: boolean;
  btnText?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"standard" | "afterhour">("standard");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#041e3a" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      setIsLoading(false);
    })();
  }, []);

  // Reset loading state whenever we switch views
  const handleSwitchView = (newView: "standard" | "afterhour") => {
    setIsLoading(true);
    setView(newView);
  };

  //   const currentLink =
  //     view === "standard"
  //       ? "skippyeducation/30min"
  //       : "skippyeducation/afterhourmeeting";

  return (
    <>
      {!noButton ? (
        <Button
          variant={btnVarient}
          size="sm"
          onClick={() => {
            handleSwitchView("standard");
            setIsOpen(true);
          }}
          className={`text-sm ${btnVarient ? "" : isScrolled ? "text-primary" : "text-white"} transition-all  hover:scale-105  duration-200 bg-white/15 backdrop-blur-md border shadow-lg shadow-black/10 hover:bg-white/15  hover:shadow-xl`}>
          {btnText}
        </Button>
      ) : (
        // <p
        //   className={`uppercase border-b-2 cursor-pointer border-white text-white pb-1 text-md font-medium tracking-wide hover:font-bold  transition-all duration-100`}
        //   onClick={() => {
        //     handleSwitchView("standard");
        //     setIsOpen(true);
        //   }}>
        //   Book a Free Consultation
        // </p>
<p
  className="
    uppercase cursor-pointer
    px-4 py-2
    text-white text-sm font-medium tracking-wide
    rounded-lg
    bg-white/15
    backdrop-blur-md
    border border-white/30
    shadow-lg shadow-black/10
    hover:bg-white/25
    hover:shadow-xl
    transition-all duration-300
    hover:border-white/60
  "
  onClick={() => {
    handleSwitchView("standard");
    setIsOpen(true);
  }}
>
  Book a Free Consultation
</p>

      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="md:max-w-4xl sm:max-w-4xl h-[90vh] overflow-x-scroll  overflow-y-scroll flex flex-col ">
          <ScrollArea className="no-scrollbar">
            <DialogHeader>
              <DialogTitle>
                {view === "standard"
                  ? "Book Your Consultation"
                  : " After Hour Consultation"}
              </DialogTitle>
            </DialogHeader>

            <div className="mb-2">
              <button
                // onClick={() =>
                //   handleSwitchView(
                //     view === "standard" ? "afterhour" : "standard",
                //   )
                // }
                className="text-blue-500 hover:underline text-sm font-medium">
                {view === "standard"
                  ? "Need Help or Guidance? We’re Available 24/7"
                  : "← Back to Standard Hours"}
              </button>
            </div>

            <div className="flex w-full max-w-full bg-slate-50 rounded-md ">
              <Cal
                calLink="skippyeducation/24hr"
                style={{ width: "100%", height: "100%", minWidth: "100%" }}
                onLoad={(e) => console.log("loaded", e)}
                config={{
                  theme: "light",
                  layout: "month_view",
                }}
              />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
