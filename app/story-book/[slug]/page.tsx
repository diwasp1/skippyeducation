import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { storyBookData } from "../data";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return storyBookData.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = storyBookData.find((s) => s.slug === slug);
  if (!story) return { title: "Story Not Found" };
  return {
    title: `${story.title} | Skippy Education Storybook`,
    description: story.subtitle,
    openGraph: {
      title: story.title,
      description: story.subtitle,
      images: [story.image],
    },
  };
}

export default async function StoryBookSlugPage({ params }: Props) {
  const { slug } = await params;
  const story = storyBookData.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      {/* Hero with full-width image */}
      <section className="relative mt-28 h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041e3a]/80 via-[#041e3a]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container">
            <Link
              href="/story-book"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Storybook
            </Link>
            <p className="text-white/90 text-sm uppercase tracking-widest font-semibold mb-1">
              {story.category}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {story.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-2 max-w-2xl">
              {story.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Full page content */}
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <article className="mx-auto max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
            {story.article}
            </p>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-200">
              <Link
                href="/story-book"
                className="inline-flex items-center gap-2 text-[#041e3a] font-semibold tracking-wide hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all stories
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
