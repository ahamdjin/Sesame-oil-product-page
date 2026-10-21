import { Link, useLocation } from "react-router-dom";
import bottle from "@/assets/sesame-oil/goso-transparent-03.png";

const pageNames: Record<string, string> = {
  "/shop": "The shop",
  "/about": "Our story",
  "/shipping": "Shipping & returns",
  "/warranty": "Warranty information",
};

const ComingSoon = () => {
  const { pathname } = useLocation();
  const title = pathname.startsWith("/shop/") ? "Discover Goso" : pageNames[pathname] ?? "Something lovely";

  return (
    <main className="min-h-[75vh] bg-black text-foreground px-6 py-20 md:py-24 flex flex-col items-center justify-center text-center">
      <p className="text-primary text-xs uppercase tracking-[0.35em] mb-6">goso & soul · 곧 만나요</p>
      <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl leading-tight">{title}</h1>
      <p className="font-display text-2xl md:text-3xl mt-3 text-primary">Coming soon ♡</p>
      <img src={bottle} alt="Goso & Soul sesame oil" className="w-full max-w-[180px] sm:max-w-[210px] h-auto object-contain mt-10" />
      <p className="text-muted-foreground max-w-md leading-relaxed mt-8">
        We're putting the finishing touches on this part of our little world.
        Thanks for being here — we'll see you soon.
      </p>
      <Link to="/" className="mt-9 inline-flex rounded-full border border-primary/60 px-8 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
        Back to home
      </Link>
    </main>
  );
};

export default ComingSoon;
