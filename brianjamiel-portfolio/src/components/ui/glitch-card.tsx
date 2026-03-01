"use client";

"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  status: string;
}

export function GlitchCard({ title, description, tags, status }: ProjectProps) {
  return (
    <motion.div
      whileHover={{
        skewX: [0, -2, 2, 0],
        x: [0, -1, 1, 0],
        transition: { duration: 0.2, repeat: Infinity }
      }}
      className="relative group cursor-pointer"
    >
      {/* Ghost layer for the glitch "shadow" */}
      <motion.div 
        className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 -z-10"
        animate={{ x: [-2, 2, -2], y: [1, -1, 1] }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />
      
      <Card className="border-muted bg-background/50 backdrop-blur-sm overflow-hidden border-2 group-hover:border-secondary transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="font-mono text-xl tracking-tighter uppercase">
              {title}
            </CardTitle>
            <Badge variant="outline" className="border-secondary text-secondary animate-pulse">
              {status}
            </Badge>
          </div>
          <CardDescription className="text-muted-foreground pt-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono bg-muted px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default GlitchCard;