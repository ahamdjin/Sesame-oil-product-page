import { Shield, Wrench, AlertCircle, CheckCircle } from "lucide-react";

const Warranty = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extralight text-foreground tracking-wider text-center mb-4 font-display">
          Warranty
        </h1>
        <p className="text-muted-foreground text-center mb-16 font-light">
          Made by hand. Backed by our commitment to craft.
        </p>

        <div className="space-y-16">
          {/* Coverage Overview */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Coverage Overview
              </h2>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-foreground font-medium">All Ceramics</h3>
                  <p className="text-primary text-2xl font-light font-display">Lifetime Guarantee</p>
                  <p className="text-secondary-foreground text-sm font-light">
                    Covers manufacturing defects in materials and craftsmanship. If a piece cracks,
                    chips, or fails under normal household use due to a flaw in making, we will
                    replace it.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-foreground font-medium">Shipping Damage</h3>
                  <p className="text-primary text-2xl font-light font-display">Full Replacement</p>
                  <p className="text-secondary-foreground text-sm font-light">
                    If your sesame oil bottle arrives broken or leaking, photograph the packaging and contact the seller promptly to discuss next steps.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What's Covered */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                What's Covered
              </h2>
            </div>
            <div className="space-y-3">
              {[
                "Bottle damaged during delivery",
                "Broken or missing tamper-evident seal",
                "Leaking or damaged packaging",
                "Incorrect item supplied",
                "Questions about expiry or labelling",
                "Damage that occurred during shipping",
              ].map((item) => (
                <div key={item} className="flex items-start text-sm">
                  <span className="text-primary mr-3 text-lg leading-none">•</span>
                  <span className="text-secondary-foreground leading-relaxed font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What's Not Covered */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                What's Not Covered
              </h2>
            </div>
            <div className="space-y-3">
              {[
                "Damage caused after delivery",
                "Changes following incorrect storage",
                "Opened food products may not qualify for returns",
                "Damage due to improper handling",
                "Problems unrelated to the supplied product",
                "Loss or theft",
              ].map((item) => (
                <div key={item} className="flex items-start text-sm">
                  <span className="text-muted-foreground mr-3 text-lg leading-none">×</span>
                  <span className="text-secondary-foreground leading-relaxed font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Claim Process */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Wrench className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Filing a Warranty Claim
              </h2>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <ol className="space-y-6">
                {[
                  {
                    step: "Document the Issue",
                    desc: "Take a clear photo showing the defect. Note when you first noticed it and include your order number.",
                  },
                  {
                    step: "Contact Us",
                    desc: "Email the seller with your photos, order number, and a brief description. We respond within 24 hours.",
                  },
                  {
                    step: "Review",
                    desc: "The seller may request additional photos and order details.",
                  },
                  {
                    step: "Resolution",
                    desc: "Any eligible resolution follows the seller's confirmed policy.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-primary font-display text-xl font-light min-w-[2rem]">
                      {i + 1}.
                    </span>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">{item.step}</h3>
                      <p className="text-secondary-foreground text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* A Note on Product Quality */}
          <section className="bg-secondary rounded-lg p-8 text-center space-y-4">
            <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
              A Note on Product Quality
            </h2>
            <p className="text-secondary-foreground font-light max-w-2xl mx-auto">
              Check that the sesame oil bottle is intact and properly sealed before use. If there is visible damage or a packaging concern, contact the seller with photos and your order information.
            </p>
          </section>
        </div>

        <div className="text-center mt-20">
          <p className="text-muted-foreground text-sm font-light mb-4">
            Questions about product quality?
          </p>
          <a
            href="/about"
            className="text-primary hover:text-copper-light underline text-sm uppercase tracking-wider transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
