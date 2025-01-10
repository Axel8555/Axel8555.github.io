"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  link: string;
  description: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Project One",
    link: "https://example.com/project-one",
    description: "This is a description for Project One.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Project Two",
    link: "https://example.com/project-two",
    description: "This is a description for Project Two.",
    techStack: ["Next.js", "Node.js", "Express"],
  },
  {
    title: "Project Three",
    link: "https://example.com/project-three",
    description: "This is a description for Project Three.",
    techStack: ["Vue", "JavaScript", "Vuetify"],
  },
  {
    title: "Project Four",
    link: "https://example.com/project-four",
    description: "This is a description for Project Four.",
    techStack: ["Angular", "TypeScript", "Bootstrap"],
  },
];

export default function Proyects() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  {project.title}
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <>{tech}</>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
