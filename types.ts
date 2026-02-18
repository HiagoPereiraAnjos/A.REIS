import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string[];
  icon: LucideIcon;
  highlight: string;
}

export interface PainPoint {
  id: string;
  text: string;
}

export interface Persona {
  title: string;
  items: string[];
  pain?: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BrandAssets {
  logo: string;
  heroSlides: string[];
  localImage: string;
}

