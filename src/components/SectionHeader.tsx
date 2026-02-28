import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
  className
}: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "mb-12 space-y-4",
        centered ? "text-center mx-auto max-w-3xl" : "text-left",
        className
      )}
    >
      {subtitle && (
        <span className={cn(
          "text-sm font-bold tracking-widest uppercase",
          light ? "text-primary-light opacity-80" : "text-primary"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold",
        light ? "text-white" : "text-slate-900"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg leading-relaxed",
          light ? "text-slate-300" : "text-slate-600"
        )}>
          {description}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-12 rounded-full bg-primary",
        centered ? "mx-auto" : ""
      )} />
    </motion.div>
  );
}
