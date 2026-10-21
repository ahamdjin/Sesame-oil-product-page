import { Link } from "react-router-dom";
import { Package, RotateCcw, Clock, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extralight text-foreground tracking-wider text-center mb-4 font-display">
          Shipping & Returns
        </h1>
        <p className="text-muted-foreground text-center mb-16 font-light">
          Information about ordering and receiving sesame oil. Confirm delivery options and rates at checkout.
        </p>

        <div className="space-y-16">
          {/* Shipping */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Shipping
              </h2>
            </div>
            <div className="bg-secondary rounded-lg p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Standard Shipping</h3>
                  <p className="text-secondary-foreground text-sm font-light">Confirm at checkout</p>
                  <p className="text-primary text-sm">Confirm at checkout</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Express Shipping</h3>
                  <p className="text-secondary-foreground text-sm font-light">Confirm at checkout</p>
                  <p className="text-primary text-sm">Confirm at checkout</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Overnight</h3>
                  <p className="text-secondary-foreground text-sm font-light">Confirm at checkout</p>
                  <p className="text-primary text-sm">Confirm at checkout</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">International</h3>
                  <p className="text-secondary-foreground text-sm font-light">Confirm at checkout</p>
                  <p className="text-primary text-sm">Confirm at checkout</p>
                </div>
              </div>
            </div>
          </section>

          {/* Processing */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Processing Time
              </h2>
            </div>
            <p className="text-secondary-foreground font-light leading-relaxed">
              Processing times will be confirmed when you place your order. Orders should be securely packaged to protect the sesame oil bottle in transit. You will receive a
              shipping confirmation email with tracking information once your order has shipped.
              During new collection releases, processing times may extend to Confirm at checkout
              due to high demand.
            </p>
          </section>

          {/* Coverage */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Where We Ship
              </h2>
            </div>
            <p className="text-secondary-foreground font-light leading-relaxed">
              Shipping coverage depends on the seller's available delivery destinations. For details, contact{" "}
              <a href="mailto:hello@example.com" className="text-primary hover:text-copper-light underline transition-colors">
                hello@example.com
              </a>{" "}
              to confirm availability.
            </p>
          </section>

          {/* Returns */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Returns & Exchanges
              </h2>
            </div>
            <div className="space-y-4 text-secondary-foreground font-light leading-relaxed">
              <p>
                Return eligibility for food products may depend on whether the bottle has been opened and on local requirements. Please confirm the seller's return policy before ordering.
              </p>
              <p>
                If your sesame oil arrives damaged during shipping, please contact the seller for assistance.
                Photograph the bottle and packaging and contact the seller promptly.
              </p>
              <div className="bg-muted rounded-lg p-6 mt-6">
                <h3 className="text-foreground font-medium mb-3">To initiate a return:</h3>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">1.</span>
                    Email <a href="mailto:returns@example.com" className="text-primary underline">returns@example.com</a> with your order number
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">2.</span>
                    The seller will explain whether a return is available
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">3.</span>
                    Keep the sesame oil in its original packaging where possible
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">4.</span>
                    Drop off at any authorized shipping location
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">5.</span>
                    Refund processed within Confirm at checkout of receipt
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-20">
          <p className="text-muted-foreground text-sm font-light mb-4">
            Have questions? We're here to help.
          </p>
          <a
            href="mailto:hello@example.com"
            className="text-primary hover:text-copper-light underline text-sm uppercase tracking-wider transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
