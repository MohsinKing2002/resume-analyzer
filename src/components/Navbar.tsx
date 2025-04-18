import Image from "next/image";
import RA_logo from "@/Medias/RA_logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-4 px-12 flex-bt">
      <div className="flex-cen">
        <Image className="h-10 w-10 rounded-full" src={RA_logo} alt="RA logo" />
        <h1 className="ml-2 text-xl font-bold">
          <span className="text-primary">Resume </span>
          <span className="text-secondary">Analyzer</span>
        </h1>
      </div>

      <div className="w-3/4 flex-ar font-semibold text-secondary">
        <Link href="/">Home</Link>
        <Link href="/analyzer">Analyzer</Link>
        <Link href="/feedback">Feedback</Link>
        <Link href="/feedback">Source Code</Link>
      </div>
    </div>
  );
};

export default Navbar;
