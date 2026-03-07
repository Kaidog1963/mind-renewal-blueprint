import React from "react";

const EBOOK_IMG = "/images/quicktrack-ebook.jpg";

const colors = {
  navy: "#0F172A",
  navyMed: "#1E3A5F",
  white: "#FFFFFF",
  offWhite: "#F8F9FA",
  lightGray: "#F1F5F9",
  gold: "#C9A84C",
  sage: "#4A7C59",
  sageLt: "#EAF2EC",
  coral: "#E8876B",
  coralLt: "#FDF0EC",
  slate: "#475569",
  charcoal: "#1E293B",
  red: "#DC2626",
  amazon: "#FF9900",
  amazonHover: "#e68a00",
};

// Amazon-style oval order button with 3D pressable shadow
function OrderButton() {
  return (
    <button
      style={{
        backgroundColor: colors.amazon,
        color: colors.navy,
        border: "none",
        borderRadius: "60px",
        padding: "10px 56px",
        fontSize: "clamp(15px, 2vw, 17px)",
        fontWeight: 800,
        cursor: "pointer",
        letterSpacing: "0.01em",
        boxShadow: "0 8px 0px #b36b00, 0 10px 20px rgba(255,153,0,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
        width: "100%",
        maxWidth: "500px",
        lineHeight: 1.3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px",
        transition: "transform 0.1s ease, box-shadow 0.1s ease",
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(4px)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 0px #b36b00, 0 6px 12px rgba(255,153,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 0px #b36b00, 0 10px 20px rgba(255,153,0,0.45), inset 0 1px 0 rgba(255,255,255,0.25)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 0px #b36b00, 0 10px 20px rgba(255,153,0,0.45), inset 0 1px 0 rgba(255,255,255,0.25)";
      }}
    >
      <span>Yes! Add The Quick Track For Just $37 →</span>
      <span style={{ fontSize: "13px", fontWeight: 600, color: colors.navy }}>
        <span style={{ textDecoration: "line-through", color: colors.red }}>$97</span>
        {" "}— You Save $60 Today
      </span>
    </button>
  );
}

export default function Downsell() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: colors.offWhite, color: colors.navy, lineHeight: 1.7 }}>

      {/* ── HEADER BANNER ── */}
      <section style={{ backgroundColor: colors.coral, padding: "28px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 900, color: colors.white, margin: 0, letterSpacing: "0.02em", lineHeight: 1.3 }}>
          ⚠️ Wait — Before You Go, We Have One Final Offer Just For You
        </p>
      </section>

      {/* ── HERO SECTION ── */}
      <section style={{ backgroundColor: colors.navy, padding: "64px 20px 56px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>

          <p style={{ fontSize: "14px", fontWeight: 700, color: colors.coral, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
            A Special One-Time Offer For Mind Renewal Blueprint Students
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 800,
            color: colors.white,
            lineHeight: 1.25,
            marginBottom: "24px",
          }}>
            Let Us Make This A Simple, No Brainer, Done For You Solution!
          </h1>

          <p style={{ fontSize: "clamp(17px, 2.5vw, 20px)", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "32px", maxWidth: "640px", margin: "0 auto 32px" }}>
            You just invested in the Mind Renewal Blueprint — 34 pages of the most powerful, scientifically-backed brain renewal strategies available anywhere. That was a bold, smart decision. And we want to make absolutely sure you succeed with it.
          </p>

        </div>
      </section>

      {/* ── EMPATHY BRIDGE ── */}
      <section style={{ backgroundColor: colors.white, padding: "60px 20px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontWeight: 800,
            color: colors.navy,
            marginBottom: "28px",
            lineHeight: 1.35,
          }}>
            Here's the honest truth about why most people don't get results from programs like this — even great ones.
          </h2>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            It's not willpower. It's not intelligence. It's not even motivation.
          </p>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            It's the gap between <strong style={{ color: colors.navy }}>knowing what to do</strong> and <strong style={{ color: colors.navy }}>actually doing it every single day.</strong>
          </p>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            The Mind Renewal Blueprint gives you everything you need to know. But life is busy. Days get away from you. You open the Blueprint with the best intentions and then... something comes up. The kids. The grandkids. A doctor's appointment. A long afternoon nap. And before you know it, a week has gone by and you haven't started.
          </p>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            We've seen it happen thousands of times. And it breaks our hearts — because the science works. The protocol works. <strong style={{ color: colors.navy }}>The only thing that fails is the follow-through.</strong>
          </p>

          {/* Callout box */}
          <div style={{ backgroundColor: colors.coralLt, border: `2px solid ${colors.coral}`, borderRadius: "12px", padding: "28px 32px", marginBottom: "20px" }}>
            <p style={{ fontSize: "18px", fontWeight: 700, color: colors.navy, marginBottom: "12px" }}>
              That's exactly why we created the 15-Minute Mind Renewal Quick Track.
            </p>
            <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, margin: 0 }}>
              It takes everything inside your Blueprint and breaks it down into a <strong style={{ color: colors.navy }}>simple, pre-planned daily system</strong> that tells you exactly what to do, when to do it, and how to track your progress — in just 15 minutes a day.
            </p>
          </div>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9 }}>
            No guesswork. No overwhelm. No "where do I even start?" Just open it, follow the plan, and check the box. That's it.
          </p>

        </div>
      </section>

      {/* ── EBOOK + PRICE ── */}
      <section style={{ backgroundColor: colors.white, padding: "48px 20px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          {/* Bigger cover image */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
            <img
              src={EBOOK_IMG}
              alt="15-Minute Mind Renewal Quick Track"
              style={{
                height: "420px",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 12px 32px rgba(15,23,42,0.18))",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Smaller price box */}
          <div style={{
            display: "inline-block",
            backgroundColor: colors.navy,
            border: `2px solid ${colors.gold}`,
            borderRadius: "10px",
            padding: "10px 28px",
            marginBottom: "24px",
          }}>
            <p style={{ fontSize: "11px", color: colors.gold, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px" }}>
              Today Only — One-Time Price
            </p>
            <p style={{ fontSize: "13px", color: "#94A3B8", textDecoration: "line-through", marginBottom: "0px" }}>
              Regular Price: $97.00
            </p>
            <p style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 900, color: colors.white, lineHeight: 1, marginBottom: "2px" }}>
              $37
            </p>
            <p style={{ fontSize: "11px", color: "#94A3B8", margin: 0 }}>
              You save $60 — 62% off
            </p>
          </div>

          {/* Order button under price box */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
            <OrderButton />
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ backgroundColor: colors.lightGray, padding: "60px 20px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontWeight: 800,
            color: colors.navy,
            textAlign: "center",
            marginBottom: "12px",
            lineHeight: 1.35,
          }}>
            Here's Everything You Get With The Quick Track
          </h2>
          <p style={{ textAlign: "center", color: colors.slate, fontSize: "16px", marginBottom: "40px" }}>
            A complete done-for-you implementation system — yours for just $37 today
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: "📅", title: "Pre-Planned Daily 15-Minute Sessions", desc: "Every day is mapped out for you. Morning, afternoon, and evening — you always know exactly what to do next. No thinking required." },
              { icon: "✅", title: "Printable Daily Checklists", desc: "Simple, satisfying checkboxes that keep you on track and give you a visible record of your progress. Seeing those checks pile up is one of the most powerful motivators there is." },
              { icon: "📊", title: "Progress Tracking Charts", desc: "Watch your brain health improve week by week with easy-to-use tracking charts. What gets measured gets improved." },
              { icon: "🛒", title: "Done-For-You Grocery List", desc: "No more standing in the supplement aisle wondering what to buy. Every brain-boosting food and supplement is listed for you, organized and ready to go." },
              { icon: "⚡", title: "The 5-Pillar Quick Reference Card", desc: "A one-page summary of all five pillars from the Blueprint so you always have the key principles at your fingertips — no need to flip through 34 pages every morning." },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                backgroundColor: colors.white,
                borderRadius: "12px",
                padding: "22px 24px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
              }}>
                <div style={{ fontSize: "28px", flexShrink: 0, lineHeight: 1 }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: colors.navy, marginBottom: "6px" }}>{item.title}</p>
                  <p style={{ fontSize: "15px", color: colors.slate, lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── URGENCY / SCARCITY ── */}
      <section style={{ backgroundColor: colors.navy, padding: "56px 20px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>

          <p style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 800, color: colors.white, lineHeight: 1.4, marginBottom: "24px" }}>
            Your brain is generating <span style={{ color: colors.gold }}>700 new neurons every single day.</span>
          </p>

          <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
            Every one of those neurons is waiting for the right conditions to thrive. Every day you have the Blueprint but don't follow through is another day those neurons don't get what they need.
          </p>

          <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, marginBottom: "20px" }}>
            The Quick Track makes following through effortless. It removes every excuse, every moment of uncertainty, every "I'll start tomorrow." It turns your Blueprint from a document you <em>intend</em> to use into a system you <em>actually</em> use.
          </p>

          <p style={{ fontSize: "18px", fontWeight: 700, color: colors.gold, lineHeight: 1.7 }}>
            This is the missing piece. And today, it's just $37.
          </p>

        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section style={{ backgroundColor: colors.white, padding: "56px 20px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "28px", alignItems: "flex-start", backgroundColor: colors.sageLt, border: `2px solid ${colors.sage}`, borderRadius: "16px", padding: "36px 32px" }}>
            <div style={{ fontSize: "48px", flexShrink: 0 }}>🛡️</div>
            <div>
              <p style={{ fontSize: "20px", fontWeight: 800, color: colors.navy, marginBottom: "12px" }}>
                60-Day "Use It or It's Free" Guarantee
              </p>
              <p style={{ fontSize: "16px", color: colors.slate, lineHeight: 1.9, margin: 0 }}>
                Use the Quick Track for 60 days. If you don't feel more organized, more consistent, and more in control of your brain health journey — for any reason at all — we'll refund every penny. No questions asked. No hassle. You have nothing to lose and everything to gain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section style={{ backgroundColor: colors.offWhite, padding: "64px 20px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>

          {/* Bigger, centered cover image */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
            <img
              src={EBOOK_IMG}
              alt="15-Minute Mind Renewal Quick Track"
              style={{
                height: "380px",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 10px 28px rgba(0,0,0,0.20))",
                borderRadius: "8px",
              }}
            />
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontWeight: 800,
            color: colors.navy,
            marginBottom: "16px",
            lineHeight: 1.35,
          }}>
            Add The Quick Track To Your Order Now
          </h2>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "28px" }}>
            One payment. Instant access. And the peace of mind that comes from knowing you have a clear, simple plan to follow every single day.
          </p>

          {/* Price display */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "16px", color: "#94A3B8", textDecoration: "line-through", marginBottom: "4px" }}>
              Regular Price: $97.00
            </p>
            <p style={{ fontSize: "clamp(48px, 8vw, 72px)", fontWeight: 900, color: colors.navy, lineHeight: 1, marginBottom: "4px" }}>
              $37
            </p>
            <p style={{ fontSize: "15px", color: colors.sage, fontWeight: 600 }}>
              You save $60 today — 62% off
            </p>
          </div>

          {/* Amazon-style CTA Button */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <OrderButton />
          </div>

          <p style={{ fontSize: "13px", color: "#94A3B8", marginBottom: "32px" }}>
            🔒 Secure checkout · Instant digital access · 60-day money-back guarantee
          </p>

          {/* Decline link */}
          <p style={{ fontSize: "13px", color: "#94A3B8" }}>
            <a
              href="#"
              style={{ color: "#94A3B8", textDecoration: "underline", fontSize: "13px" }}
              onClick={(e) => e.preventDefault()}
            >
              No thank you — I don't need help implementing the Blueprint.
            </a>
          </p>

        </div>
      </section>

      {/* ── P.S. ── */}
      <section style={{ backgroundColor: colors.lightGray, padding: "40px 20px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "16px", color: colors.slate, lineHeight: 1.9, marginBottom: "16px" }}>
            <strong style={{ color: colors.navy }}>P.S.</strong> — This $37 offer is only available right here, right now, on this page. Once you leave, the Quick Track goes back to its regular price of $97. This is our way of saying thank you for being a Mind Renewal Blueprint student — and making sure you have every tool you need to succeed.
          </p>
          <p style={{ fontSize: "16px", color: colors.slate, lineHeight: 1.9, margin: 0 }}>
            <strong style={{ color: colors.navy }}>P.P.S.</strong> — Remember: you're protected by a full 60-day money-back guarantee. There is zero risk. The only thing you risk by saying no is continuing to have the Blueprint sitting on your device without a clear plan to use it.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <section style={{ backgroundColor: colors.navy, padding: "28px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.8, margin: 0 }}>
          © Mind Renewal Blueprint | All Rights Reserved<br />
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
        </p>
      </section>

    </div>
  );
}
