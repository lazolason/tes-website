/**
 * Core type definitions for TES Website components
 * Centralizes all data types for type-safety and maintainability
 */

import type { ReactNode, ComponentType, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

// ============================================
// Navigation Types
// ============================================

export interface IconProps {
    className?: string;
    'aria-hidden'?: boolean;
}

export interface NavSubItem {
    href: string;
    label: string;
    icon?: ComponentType<IconProps>;
    desc?: string;
}

export interface NavItem {
    href: string;
    label: string;
    type?: 'dropdown' | 'mega';
    items?: NavSubItem[];
    cta?: boolean;
}

// ============================================
// UI Component Types
// ============================================

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    asChild?: boolean;
}

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

// ============================================
// Industry & Content Types
// ============================================

export interface Industry {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    icon?: ComponentType<IconProps>;
    benefits?: string[];
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
}

export interface Stat {
    id: string;
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    description?: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    subtitle: string;
    detail: string;
}

// ============================================
// Form Types
// ============================================

export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
    interest?: 'pilot' | 'consultation' | 'general';
}

export interface FormFieldProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'tel' | 'textarea';
    placeholder?: string;
    required?: boolean;
    error?: string;
}

// ============================================
// Case Study Types
// ============================================

export interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    industry: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    image?: string;
    publishedAt?: string;
}

// ============================================
// Knowledge Hub Types
// ============================================

export interface Resource {
    id: string;
    title: string;
    type: 'pdf' | 'video' | 'article' | 'webinar';
    description: string;
    url: string;
    thumbnail?: string;
    downloadCount?: number;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
}
