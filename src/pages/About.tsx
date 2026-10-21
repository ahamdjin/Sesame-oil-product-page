import heroBg from "@/assets/hero-bg.jpg";

const teamMembers = [
  {
    name: "Our sesame oil",
    links: [
      { label: "Learn more", href: "/shop/flora-pitcher" },
      
    ],
  },
  {
    name: "Made for everyday cooking",
    links: [
      { label: "Explore the product", href: "/shop/flora-pitcher" },
    ],
  },
];

const About = () => {
  return (
    <div className="bg-black min-h-screen text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 md:gap-20">
          {/* Left column — brand + team */}
          <div className="space-y-12">
            <h1 className="text-2xl font-normal font-sans tracking-normal">
              Sesame Oil
            </h1>

            <div className="space-y-10">
              {teamMembers.map((member) => (
                <div key={member.name} className="space-y-2">
                  <h3 className="text-base font-medium font-sans">{member.name}</h3>
                  <div className="flex flex-col gap-1">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-sm text-primary underline hover:text-primary/80 transition-colors w-fit"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — mission + image */}
          <div className="space-y-12">
            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed">
              Sesame oil is a simple ingredient with an unmistakable place in the kitchen.
              Whether whisked into a dressing, added to a marinade or drizzled
              over a finished dish, its nutty character brings everyday food to life.
              This site is dedicated to exploring sesame oil, its flavour and the
              many ways it can be enjoyed.
            </p>

            <img
              src={heroBg}
              alt="Sesame oil featured imagery"
              className="w-full rounded-2xl object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
