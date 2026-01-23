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
import { Loader2 } from "lucide-react"; // Assuming you use lucide-react (standard with shadcn)
import { ScrollArea } from "./ui/scroll-area";

export default function BookingDialog({
  noButton = false,
}: {
  noButton?: boolean;
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
          variant={"ghost"}
          onClick={() => {
            handleSwitchView("standard");
            setIsOpen(true);
          }}
          className="text-lg text-white">
          Book Consultation
        </Button>
      ) : (
        <p
          className={`uppercase border-b-2 cursor-pointer border-white text-white pb-1 text-md font-medium tracking-wide hover:text-primary  hover:border-primary hover:font-bold transition`}
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
                style={{ width: "90%", height: "100%", minWidth: "90%" }}
                onLoad={(e) => console.log("loaded", e)}
                config={{
                  theme: "light",
                  layout: "month_view", // month_view is better for narrow screens
                }}
              />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
