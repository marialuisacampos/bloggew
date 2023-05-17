import { Poppins } from "next/font/google";

interface PortTitleProps {
  title: string;
  author: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function PostTitle({ title, author }: PortTitleProps) {
  return (
    <h1 className={`text-3xl font-black ${poppins.className}`}>{title}</h1>
  );
}
