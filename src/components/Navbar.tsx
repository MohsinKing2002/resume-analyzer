import Image from "next/image";
import RA_logo from "@/Medias/RA_logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-4 px-12 flex items-center justify-between">
      <Image className="h-12 w-12 rounded-full" src={RA_logo} alt="RA logo" />

      <div className="w-3/4 flex items-center justify-around">
        <Link href="/">Home</Link>
        <Link href="/analyzer">Analyzer</Link>
        <Link href="/feedback">Feedback</Link>
        <Link href="/feedback">Source Code</Link>
      </div>
    </div>
  );
};

export default Navbar;
