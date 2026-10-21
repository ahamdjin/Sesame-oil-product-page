import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import heroBg from "@/assets/hero-bg.jpg";
import sectionTl from "@/assets/section-tl.jpg";
import sectionTr from "@/assets/section-tr.jpg";
import sectionBottom from "@/assets/section-bottom.jpg";
import sectionBg from "@/assets/section-bg.jpg";

const FadeIn = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1500ms] ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const storySections = [
  {
    description:
      "Small seed. Beautiful depth. A little goma brings a warm, nutty finish to the dishes worth gathering around.",
    image: sectionTl,
  },
  {
    description:
      "A golden thread through everyday cooking — a drizzle over noodles, a whisper in a dressing, the last little detail before the first bite.",
    image: sectionTr,
  },
  {
    description:
      "Some things are best kept simple. Good food, good company, and that unmistakable sesame aroma. ごま — a little goes a long way.",
    image: sectionBottom,
  },
];

const leftSpecs = [
  { label: "The seed", value: "胡麻 · Sesame" },
  { label: "The note", value: "Warm & nutty" },
  { label: "The ritual", value: "A finishing drizzle" },
];

const rightSpecs = [
  { label: "A little", value: "Goes a long way" },
  { label: "Storage", value: "Away from heat and light" },
  { label: "Allergen", value: "Contains sesame" },
];

const Index = () => {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="flex flex-col items-center w-full">
        <div className="pt-0 text-center z-10">
          <h1 className="font-display text-[8rem] md:text-[12rem] lg:text-[16rem] font-medium text-foreground leading-[0.85] tracking-tight">
            <span className="block md:inline">Goma </span>
            <span className="block md:inline">胡麻</span>
          </h1>
        </div>
        <div className="relative w-full max-w-5xl mx-auto">
          <img
            src={heroBg}
            alt="Sesame oil product"
            className="w-full h-auto object-contain"
          />
          <div className="blur-vignette" />
        </div>
      </section>

      {/* Story Sections 1-3 */}
      {storySections.map((section, i) => (
        <section key={i} className={`${i === 0 ? "pt-16 pb-32 md:pt-24 md:pb-48" : "py-32 md:py-48"}`}>
          <FadeIn>
            <div className="max-w-[900px] mx-auto px-6 space-y-12 text-center">
              <p className="text-white font-bold text-2xl md:text-[28px] leading-relaxed max-w-lg mx-auto">
                {section.description}
              </p>
              <div className="relative overflow-hidden rounded-2xl h-[60vh]">
                <img
                  src={section.image}
                  alt="Sesame oil product detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="blur-vignette" />
              </div>
            </div>
          </FadeIn>
        </section>
      ))}

      {/* Section 4 — Full Reveal + Specs */}
      <section className="py-32 md:py-48">
        <FadeIn>
          <div className="max-w-[900px] mx-auto px-6">
            <div className="relative">
              <div className="relative mx-auto max-w-[800px]">
                <img
                  src={sectionBg}
                  alt="Sesame oil product view"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="blur-vignette" />
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 pr-8">
                {leftSpecs.map((spec) => (
                  <div key={spec.label} className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-white text-xs tracking-widest uppercase">{spec.label}</p>
                      <p className="text-white/50 text-xs mt-0.5">{spec.value}</p>
                    </div>
                    <div className="w-16 h-px bg-white/20" />
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 pl-8">
                {rightSpecs.map((spec) => (
                  <div key={spec.label} className="flex items-center gap-4">
                    <div className="w-16 h-px bg-white/20" />
                    <div className="text-left">
                      <p className="text-white text-xs tracking-widest uppercase">{spec.label}</p>
                      <p className="text-white/50 text-xs mt-0.5">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:hidden mt-12 grid grid-cols-2 gap-6">
                {[...leftSpecs, ...rightSpecs].map((spec) => (
                  <div key={spec.label} className="text-center">
                    <p className="text-white text-xs tracking-widest uppercase">{spec.label}</p>
                    <p className="text-white/50 text-xs mt-0.5">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <Link
                to="/shop/flora-pitcher"
                className="inline-block bg-primary text-primary-foreground rounded-full px-10 py-4 text-sm tracking-widest lowercase hover:bg-primary/90 transition-colors"
              >
                discover goma — $185
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Index;
