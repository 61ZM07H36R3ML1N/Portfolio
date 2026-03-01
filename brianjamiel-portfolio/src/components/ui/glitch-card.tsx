"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // This fixes the 'Cannot find name cn' error

interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
  status: string;
  className?: string;
}

export function GlitchCard({ title, description, tags = [], status, className }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn("relative group cursor-pointer", className)}
    >
      <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 -z-10 rounded-xl transition-opacity" />
      
      <Card className="border-muted bg-background/50 backdrop-blur-sm overflow-hidden border-2 group-hover:border-secondary transition-all">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="font-mono text-xl tracking-tighter uppercase">
              {title}
            </CardTitle>
            <Badge variant="outline" className="border-secondary text-secondary">
              {status}
            </Badge>
          </div>
          <CardDescription className="text-muted-foreground line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={`${tag}-${index}`} className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default GlitchCard;