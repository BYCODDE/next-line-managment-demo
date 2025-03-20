import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Roboto_Slab } from "next/font/google";
const roboto = Roboto_Slab({ weight: "800", subsets: ["latin"] });
export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 text-neutral-700 hidden md:flex ">
        <Image src={"/linelogo.png"} alt="logo" width={32} height={32} className="rounded-full" />
        <p className={cn("text-lg text-neutral-700 pt-1", roboto.className)}>
          LineTasky
        </p>
      </div>
    </Link>
  );
};
