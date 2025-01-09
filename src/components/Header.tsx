"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Terminal } from "lucide-react";
import Languages from "./Languages";
import { ModeToggle } from "./ModeToggle";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function Page({
  data: { name, title },
}: {
  data: {
    name: string;
    title: string;
  };
}) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="space-y-4 text-center md:text-left">
        <Languages />
        <ModeToggle />
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-400">
          Leonardo Axel Ortiz
        </h1>
        <p className="text-xl text-slate-950 dark:text-slate-50">
          Fullstack Developer & Computer Systems Engineer
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Link
            href="https://github.com/Axel8555"
            passHref
          >
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
            >
              <LuGithub className="mr-2 w-4 h-4" />
              GitHub
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/laoz8555n"
            passHref
          >
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
            >
              <LuLinkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </Link>
          <Link
            href="mailto:leonardoaxelortiz@gmail.com"
            passHref
          >
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/photo.jpg"
          alt="Leonardo Axel Ortiz"
          width={150}
          height={150}
          className="rounded-full border-4 border-indigo-400 shadow-lg"
        />
        <span className="absolute bottom-0 right-0 bg-zinc-100 dark:bg-black rounded-full p-2 shadow-md border-2">
          <Terminal className="h-6 w-6 text-zinc-900 dark:text-white " />
        </span>
      </div>
    </header>
  );
}
