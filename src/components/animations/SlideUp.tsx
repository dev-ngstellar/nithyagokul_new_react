"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SlideUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  yOffset?: number;
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  yOffset = 40,
  className,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
