import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export function Footer() {
  return (
    <div className={`py-10 text-center ${poppins.className}`}>
      Bloggew. Created with love and curiosity, by{" "}
      <Link href="/marialuisacampos" className="text-yellow">
        Malu
      </Link>
      .
    </div>
  );
}
