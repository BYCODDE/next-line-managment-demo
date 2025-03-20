import Link from "next/link";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center justify-center border shadow-md p-4 bg-amber-100 text-amber-700 rounded-full uppercase font-bold">
          <Medal className="mr-2 h-6 w-6" />
          No 1 task management app
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-bold">
          LineTasky helps you get things done
        </h1>
        <div className="text-3xl md:6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 py-2 rounded-md  w-fit font-bold">
          work forward.
        </div>
      </div>

      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-sm md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate,manage projects and track progress all in one place,from any
        device .
      </div>
      <Button
        variant="outline"
        className="mt-6 bg-black text-white"
        size={"lg"}
        asChild
      >
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
