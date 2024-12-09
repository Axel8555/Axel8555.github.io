"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code, Mail } from "lucide-react";
import Github from "@public/icons/github.svg";
import Linkedin from "@public/icons/linkedin.svg";

export default function Page() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-400">
          Leonardo Axel Ortiz
        </h1>
        <p className="text-xl text-slate-950 dark:text-slate-50">
          Fullstack Developer & Computer Systems Engineer
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Button
            onClick={() => window.open("", "_blank")}
            size="sm"
            variant="outline"
            className="rounded-full"
          >
            <Github className="mr-2 w-4 h-4" />
            GitHub
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
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
        <span className="absolute bottom-0 right-0 bg-zinc-100 rounded-full p-2 shadow-md">
          <Code className="h-6 w-6 text-slate-900" />
        </span>
      </div>
    </header>
  );
}
