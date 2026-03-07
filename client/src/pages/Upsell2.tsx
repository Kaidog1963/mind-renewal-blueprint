import React, { useRef, useState } from "react";

const BOTTLE_IMG = "/images/methylene-blue-bottle.jpg";
const VIDEO_SRC = "/videos/methylene-blue-video.mp4";

const colors = {
  black: "#000000",
  nearBlack: "#0A0A0A",
  darkGray: "#111111",
  white: "#FFFFFF",
  offWhite: "#F8F8F8",
  lightGray: "#E8E8E8",
  gold: "#C9A84C",
  goldLight: "#F5D98B",
  blue: "#1A56DB",
  orange: "#D97706",
  orangeLight: "#F59E0B",
  red: "#DC2626",
  navy: "#0F172A",
  charcoal: "#1E293B",
};

const pricingOptions = [
  {
    id: 1,
    title: "Buy 1, Get 1 Free",
    bottleCount: 2,
    price: "$39.94",
    retail: "$99.98",
    savingsPerUnit: "You save $49/ea",
    badge: null,
    extras: [],
    highlight: false,
  },
  {
    id: 2,
    title: "Buy 2, Get 2 Free",
    bottleCount: 4,
    price: "$79.88",
    retail: "$199.96",
    savingsPerUnit: "You save $99/ea",
    badge: "#1 Best Seller",
    extras: ["Free Tracked Shipping"],
    highlight: true,
  },
  {
    id: 3,
    title: "Buy 3, Get 3 Free",
    bottleCount: 6,
    price: "$119.82",
    retail: "$299.94",
    savingsPerUnit: "You save $180",
    badge: null,
    extras: ["Free Tracked Shipping + Gift (Value $35)"],
    highlight: false,
  },
];

function BottleGroup({ count }: { count: number }) {
  const bottleStyle = (zIndex: number, translateX: string, rotate: string, height: number): React.CSSProperties => ({
    height: `${height}px`,
    width: "auto",
    objectFit: "contain" as const,
    position: "relative",
    zIndex,
    transform: `translateX(${translateX}) rotate(${rotate})`,
    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))",
    flexShrink: 0,
  });

  if (count === 2) {
    return (
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "0px", minWidth: "120px" }}>
        <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(1, "10px", "-5deg", 110)} />
        <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(2, "-10px", "3deg", 120)} />
      </div>
    );
  }
  if (count === 4) {
    return (
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "0px", minWidth: "150px" }}>
        <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(1, "20px", "-8deg", 100)} />
        <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(2, "8px", "-3deg", 110)} />
        <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(3, "-8px", "3deg", 110)} />
        <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(4, "-20px", "7deg", 100)} />
      </div>
    );
  }
  // 6 bottles
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "0px", minWidth: "170px" }}>
      <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(1, "28px", "-10deg", 90)} />
      <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(2, "14px", "-5deg", 100)} />
      <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(3, "0px", "0deg", 110)} />
      <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(4, "-14px", "5deg", 100)} />
      <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(5, "-28px", "9deg", 90)} />
      <img src={BOTTLE_IMG} alt="Methylene Blue" style={bottleStyle(6, "-42px", "12deg", 85)} />
    </div>
  );
}

export default function Upsell2() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: colors.black, color: colors.white, lineHeight: 1.7 }}>

      {/* ── HEADER ── */}
      <section style={{ backgroundColor: colors.nearBlack, padding: "36px 20px 28px", textAlign: "center", borderBottom: `3px solid ${colors.gold}` }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 800, color: colors.gold, lineHeight: 1.3, margin: 0, letterSpacing: "-0.01em" }}>
            Hold On — Watch This 1-Minute Video to Maximize Memory Renewal Before You Go!
          </p>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section style={{ backgroundColor: colors.darkGray, padding: "40px 20px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", border: `2px solid ${colors.gold}`, boxShadow: "0 8px 40px rgba(201,168,76,0.25)" }}>
            {!videoError ? (
              <video
                ref={videoRef}
                controls
                playsInline
                style={{ width: "100%", display: "block", backgroundColor: "#000" }}
                onError={() => setVideoError(true)}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div style={{ padding: "60px 20px", textAlign: "center", color: colors.gold }}>
                <p style={{ fontSize: "18px" }}>Video loading... Please refresh the page.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── COPY SECTION ── */}
      <section style={{ backgroundColor: colors.black, padding: "56px 20px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Important callout */}
          <div style={{ borderLeft: `4px solid ${colors.gold}`, paddingLeft: "24px", marginBottom: "40px" }}>
            <p style={{ fontSize: "19px", fontWeight: 700, color: colors.gold, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Important:
            </p>
            <p style={{ fontSize: "18px", color: colors.white, margin: 0, lineHeight: 1.8 }}>
              We cover Methylene Blue in detail in the MRB. If there is any supplement you need to always make sure is in your daily intake, <strong style={{ color: colors.gold }}>this one is it.</strong>
            </p>
          </div>

          {/* Research block */}
          <div style={{ marginBottom: "36px" }}>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
              <strong style={{ color: colors.white }}>2014 Aging Journal. 2016 Aging Journal. 2018 Journal of Alzheimer's Disease.</strong> Over 100 patients. Complete reversal — not slow decline. <em>Actual reversal.</em> UCLA follow-up study: <strong style={{ color: colors.gold }}>84% improvement.</strong>
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
              This isn't some fringe theory. This is published research. And get this — you generate <strong style={{ color: colors.gold }}>700 new neurons every single day</strong> in the memory center of your brain. Your brain <em>wants</em> to heal. It just needs the right conditions.
            </p>
            <p style={{ fontSize: "20px", fontWeight: 800, color: colors.white, textAlign: "center", margin: "32px 0", letterSpacing: "-0.01em" }}>
              Fix the mitochondria. That's where it starts.
            </p>
          </div>

          {/* History & credibility */}
          <div style={{ marginBottom: "36px" }}>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
              This compound has been around since <strong style={{ color: colors.white }}>1876</strong>. Hospitals use it for brain emergencies. It's literally on the <strong style={{ color: colors.white }}>WHO's list of essential medicines.</strong>
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
              It works as an electron carrier in your mitochondria — basically, it keeps the power plants running when they start to fail. It crosses into your brain. It protects neurons. It's been studied for cognitive decline for decades.
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
              It's called <strong style={{ color: colors.gold }}>Methylene Blue.</strong>
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9 }}>
              RFK takes it daily. Joe Rogan's talked about it. Mel Gibson. Brian Johnson. These people aren't waiting for neurologists to catch up. They understand how the brain actually works.
            </p>
          </div>

          {/* Vision / imagination block */}
          <div style={{ backgroundColor: "#0F172A", border: `1px solid #1E3A5F`, borderRadius: "12px", padding: "36px 32px", marginBottom: "36px" }}>
            <p style={{ fontSize: "18px", fontWeight: 700, color: colors.gold, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Here's What Happens When You Actually Fix the Mitochondria:
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 2.0, marginBottom: "14px" }}>
              Imagine your mom remembering your name — not sometimes. <strong style={{ color: colors.white }}>Every single time.</strong>
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 2.0, marginBottom: "14px" }}>
              Imagine finishing a sentence without losing the word halfway through.
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 2.0, marginBottom: "14px" }}>
              Imagine waking up and your brain is just <strong style={{ color: colors.white }}>on</strong> — no warm-up, no fog, no standing in the kitchen going, <em>"Why did I come in here?"</em>
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 2.0, marginBottom: "14px" }}>
              Imagine looking at your spouse and they see <strong style={{ color: colors.white }}>you</strong> again — not the confusion, not the fog.
            </p>
            <p style={{ fontSize: "17px", color: colors.gold, fontWeight: 700, lineHeight: 1.8, marginBottom: 0 }}>
              That's not fantasy. That's what the research shows. That's what happens when your neurons get the energy they need.
            </p>
          </div>

          {/* Warning / purity block */}
          <div style={{ marginBottom: "36px" }}>
            <p style={{ fontSize: "20px", fontWeight: 800, color: colors.white, marginBottom: "20px" }}>
              But here's the problem...
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
              Most Methylene Blue on the market? <strong style={{ color: "#F87171" }}>It's not pharmaceutical grade.</strong> It's industrial dye. Fish tank cleaner from Chinese suppliers — $2.50 on Alibaba, repackaged with a nice label.
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
              There are only <strong style={{ color: colors.white }}>two facilities in North America</strong> that produce real USP-grade Methylene Blue. One in Utah. One in Florida. That's it. <strong style={{ color: colors.white }}>Two.</strong>
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
              So if you've tried Methylene Blue before and felt nothing — you weren't taking real MB. You were taking Chinese dye.
            </p>
          </div>

          {/* Source credibility */}
          <div style={{ backgroundColor: "#0A1628", border: `2px solid ${colors.gold}`, borderRadius: "12px", padding: "28px 32px", textAlign: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: 800, color: colors.gold, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Our Source
            </p>
            <p style={{ fontSize: "17px", color: colors.white, lineHeight: 1.9, margin: 0 }}>
              We source from the <strong style={{ color: colors.gold }}>Florida facility</strong> — the same batch, the same hospital stockpile used for emergencies. Same grade. <strong style={{ color: colors.white }}>Third-party tested for purity and potency.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section style={{ backgroundColor: colors.offWhite, padding: "64px 20px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: colors.navy, textAlign: "center", marginBottom: "12px", lineHeight: 1.3 }}>
            Choose Your Supply of NeuroRenew® Methylene Blue 1%
          </h2>
          <p style={{ textAlign: "center", color: "#64748B", fontSize: "16px", marginBottom: "40px" }}>
            Pharmaceutical Grade · USP Certified · Third-Party Tested · 1 FL OZ (30 ML) per bottle
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {pricingOptions.map((opt) => (
              <div
                key={opt.id}
                style={{
                  position: "relative",
                  backgroundColor: colors.white,
                  border: opt.highlight ? `2px solid ${colors.orange}` : "1.5px solid #D1D5DB",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  boxShadow: opt.highlight ? "0 4px 24px rgba(217,119,6,0.15)" : "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {/* Best Seller Badge */}
                {opt.badge && (
                  <div style={{
                    position: "absolute",
                    top: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: colors.orange,
                    color: colors.white,
                    fontSize: "14px",
                    fontWeight: 800,
                    padding: "6px 20px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.03em",
                    boxShadow: "0 2px 8px rgba(217,119,6,0.4)",
                  }}>
                    {opt.badge}
                  </div>
                )}

                {/* Bottle group */}
                <div style={{ flexShrink: 0 }}>
                  <BottleGroup count={opt.bottleCount} />
                </div>

                {/* Pricing info */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 800, color: colors.navy, marginBottom: "6px", lineHeight: 1.3 }}>
                    {opt.title}
                  </p>

                  {opt.extras.length > 0 && (
                    <div style={{ marginBottom: "8px" }}>
                      {opt.extras.map((extra, i) => (
                        <span key={i} style={{ display: "inline-block", backgroundColor: "#F1F5F9", color: "#475569", fontSize: "13px", fontStyle: "italic", padding: "4px 10px", borderRadius: "8px", marginRight: "6px", marginBottom: "4px" }}>
                          {extra}
                        </span>
                      ))}
                    </div>
                  )}

                  <p style={{ fontSize: "15px", color: "#64748B", marginBottom: "4px" }}>
                    {opt.savingsPerUnit}
                  </p>
                </div>

                {/* Price block */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 900, color: colors.navy, marginBottom: "2px", lineHeight: 1 }}>
                    {opt.price}
                  </p>
                  <p style={{ fontSize: "16px", color: "#94A3B8", textDecoration: "line-through", marginBottom: "10px" }}>
                    {opt.retail}
                  </p>
                  <button
                    style={{
                      backgroundColor: opt.highlight ? colors.orange : colors.navy,
                      color: colors.white,
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Add to My Order →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid #E2E8F0" }}>
            {["GMP Certified", "USP Grade", "Lab Tested", "Formaldehyde-Free", "Alcohol-Free"].map((badge) => (
              <div key={badge} style={{ textAlign: "center" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#EFF6FF", border: "2px solid #BFDBFE", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px" }}>
                  <span style={{ fontSize: "18px" }}>✓</span>
                </div>
                <p style={{ fontSize: "12px", color: "#475569", fontWeight: 600, margin: 0 }}>{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER DISCLAIMER ── */}
      <section style={{ backgroundColor: colors.nearBlack, padding: "32px 20px", textAlign: "center", borderTop: `2px solid #1E293B` }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.8, margin: 0 }}>
            © NeuroRenew® | All Rights Reserved<br />
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
          </p>
        </div>
      </section>

    </div>
  );
}
