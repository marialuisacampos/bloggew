import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Poppins } from "next/font/google";
import { useState } from "react";

interface BlogHeaderProps {
  title: string;
  linkedinLink: string;
  githubLink: string;
  resumeLink: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });

export default function BlogHeader({
  title,
  linkedinLink,
  githubLink,
  resumeLink,
}: BlogHeaderProps) {
  return (
    <header className="flex flex-col pb-12">
      <div className="flex justify-between pb-4 items-center">
        <span className="text-2xl">&#9997;</span>
        <button
          type="button"
          value={"en-US"}
          className="bg-pink rounded-md py-1 px-2 text-xs hover:bg-yellow hover:text-secondary-dark"
        >
          leia em português
        </button>
      </div>
      <div className="flex justify-between">
        <h1 className={`text-3xl ${poppins.className}`}>{title}</h1>
        <div className="flex gap-6 items-center">
          <a>
            <AiFillLinkedin size={30} />
          </a>
          <a>
            <AiFillGithub size={30} />
          </a>
          <a
            href={resumeLink}
            className={`text-yellow text-xl font-bold ${poppins.className}`}
          >
            Portfolio
          </a>
        </div>
      </div>
    </header>
  );
}
