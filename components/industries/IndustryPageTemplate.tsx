import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

type IndustryButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

interface IndustryCta {
  href: string;
  label: string;
  variant?: IndustryButtonVariant;
  className?: string;
}

interface IndustryListItem {
  title: string;
  desc: string;
}

interface IndustryHeroProps {
  label: string;
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  primaryCta: IndustryCta;
  secondaryCta?: IndustryCta;
  labelClassName?: string;
}

interface IndustryOverviewProps {
  tag: string;
  title: string;
  description: ReactNode;
  items: IndustryListItem[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  imageAspectClassName?: string;
  panelClassName?: string;
}

interface IndustryBenefitsProps {
  benefits: IndustryListItem[];
  sectionClassName?: string;
}

interface IndustryOperationsProps {
  title: string;
  description: ReactNode;
  tags: string[];
  sectionClassName?: string;
}

interface IndustryFinalCtaProps {
  title: string;
  description: string;
  primaryCta: IndustryCta;
  secondaryCta?: IndustryCta;
  sectionClassName?: string;
  containerClassName?: string;
}

interface IndustryPageTemplateProps {
  hero: IndustryHeroProps;
  overview: IndustryOverviewProps;
  benefits?: IndustryBenefitsProps;
  operations?: IndustryOperationsProps;
  operationsFooter?: ReactNode;
  finalCta: IndustryFinalCtaProps;
}

function IndustryLinkButton({
  href,
  label,
  variant = "default",
  className,
}: IndustryCta) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size: "lg" }), className)}
    >
      {label}
    </Link>
  );
}

function IndustryHero({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
  labelClassName,
}: IndustryHeroProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 z-0 bg-slate-900">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span
            className={cn(
              "mb-6 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400",
              labelClassName,
            )}
          >
            {label}
          </span>
          <h1 className="mb-8 text-4xl font-bold leading-[1.1] text-white md:text-6xl">
            {title}
          </h1>
          <div className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            {description}
          </div>
          <div className="flex flex-wrap gap-4">
            <IndustryLinkButton
              {...primaryCta}
              className={cn(
                "shadow-xl shadow-emerald-900/40 hover:-translate-y-1",
                primaryCta.className,
              )}
            />
            {secondaryCta ? (
              <IndustryLinkButton {...secondaryCta} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryOverview({
  tag,
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  imageCaption,
  imageAspectClassName = "aspect-video",
  panelClassName,
}: IndustryOverviewProps) {
  return (
    <section className="border-b border-slate-100 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              tag={tag}
              title={title}
              description={
                typeof description === "string" ? description : undefined
              }
            />
            {typeof description !== "string" ? (
              <div className="-mt-8 mb-12 text-lg leading-relaxed text-slate-600">
                {description}
              </div>
            ) : null}
            <ul className="space-y-6">
              {items.map((item, index) => (
                <FadeIn key={item.title} delay={index * 100}>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm font-bold text-emerald-600">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold uppercase tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>

          <FadeIn delay={300}>
            <div
              className={cn(
                "relative rounded-[2rem] border border-slate-100 bg-slate-50 p-8 shadow-inner",
                panelClassName,
              )}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-xl border border-white shadow-2xl",
                  imageAspectClassName,
                )}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  {imageCaption}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function IndustryBenefits({
  benefits,
  sectionClassName = "bg-slate-50 py-20 lg:py-32",
}: IndustryBenefitsProps) {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 100}>
              <div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {benefit.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryOperations({
  title,
  description,
  tags,
  sectionClassName = "bg-white py-24 lg:py-32",
}: IndustryOperationsProps) {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900">{title}</h2>
            <div className="text-lg leading-relaxed text-slate-600">
              {description}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-xl bg-slate-900 p-6 text-xs font-bold uppercase tracking-tight text-white shadow-lg"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryFinalCta({
  title,
  description,
  primaryCta,
  secondaryCta,
  sectionClassName = "bg-white py-24 text-center lg:py-32",
  containerClassName = "mx-auto max-w-4xl px-4",
}: IndustryFinalCtaProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <SectionHeading title={title} description={description} centered />
        <div className="flex flex-wrap justify-center gap-6">
          <IndustryLinkButton {...primaryCta} />
          {secondaryCta ? <IndustryLinkButton {...secondaryCta} /> : null}
        </div>
      </div>
    </section>
  );
}

export default function IndustryPageTemplate({
  hero,
  overview,
  benefits,
  operations,
  operationsFooter,
  finalCta,
}: IndustryPageTemplateProps) {
  return (
    <main className="min-h-screen bg-white">
      <IndustryHero {...hero} />
      <IndustryOverview {...overview} />
      {benefits ? <IndustryBenefits {...benefits} /> : null}
      {operations ? <IndustryOperations {...operations} /> : null}
      {operationsFooter ? (
        <section
          className={cn(
            operations?.sectionClassName || "bg-white py-24 lg:py-32",
            "pt-0",
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {operationsFooter}
          </div>
        </section>
      ) : null}
      <IndustryFinalCta {...finalCta} />
    </main>
  );
}
