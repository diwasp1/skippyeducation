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
  btnText = "Book Consultation",
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

  console.log("isScrolled in BookingDialog:", isScrolled);

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
          onClick={() => {
            handleSwitchView("standard");
            setIsOpen(true);
          }}
          className={`text-lg ${btnVarient ? "" : isScrolled ? "text-primary" : "text-white"} transition-all  hover:scale-105 duration-200`}>
          {btnText}
        </Button>
      ) : (
        <p
          className={`uppercase border-b-2 cursor-pointer border-white text-white pb-1 text-md font-medium tracking-wide hover:font-bold  transition-all duration-100`}
          onClick={() => {
            handleSwitchView("standard");
            setIsOpen(true);
          }}>
          Book Consultation
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
                  ? "Free 30 mins with Registered Migration Agent"
                  : "← Back to Standard Hours"}
              </button>
            </div>

            <div className="flex w-full max-w-full bg-slate-50 rounded-md ">
              <Cal
                calLink="skippyeducation/afterhourmeeting"
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
