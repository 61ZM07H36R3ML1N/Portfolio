"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Name with Gradient */}
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-center text-8xl font-bold leading-none text-transparent">
        {"BRIAN JAMIEL & RJ BOWENS"}
      </span>
      
      {/* Fixed Typing Animation using children */}
      <div className="z-10 mt-4 h-8">
        <TypingAnimation className="text-xl font-mono text-secondary uppercase tracking-[0.2em]">
          {"IT Assistant // TTRPG Architect // Looter-Shooter Dev"}
        </TypingAnimation>
      </div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10 mt-8 flex gap-4"
      >
        <Button variant="outline" className="font-mono border-secondary text-secondary hover:bg-secondary hover:text-background">
          {"VIEW_PROJECTS.LOG"}
        </Button>
        <Button className="font-mono bg-foreground text-background">
          {"RESUME.EXE"}
        </Button>
      </motion.div>

      <RetroGrid />
    </div>
  );
}