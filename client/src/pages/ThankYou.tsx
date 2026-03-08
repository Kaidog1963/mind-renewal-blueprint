import React from "react";

const EBOOK_IMG = "/images/quicktrack-ebook.jpg";

const colors = {
  navy: "#0F172A",
  navyMed: "#1E3A5F",
  white: "#FFFFFF",
  offWhite: "#F8F9FA",
  lightGray: "#F1F5F9",
  gold: "#C9A84C",
  goldLt: "#FDF8EC",
  sage: "#4A7C59",
  sageLt: "#EAF2EC",
  coral: "#E8876B",
  coralLt: "#FDF0EC",
  slate: "#475569",
  charcoal: "#1E293B",
  teal: "#0D9488",
  tealLt: "#F0FDFA",
};

export default function ThankYou() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: colors.offWhite, color: colors.navy, lineHeight: 1.7 }}>

      {/* ── HEADER BANNER ── */}
      <section style={{ backgroundColor: colors.sage, padding: "20px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 700, color: colors.white, margin: 0, letterSpacing: "0.02em" }}>
          🎉 Order Confirmed — Thank You for Your Purchase!
        </p>
      </section>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: colors.navy, padding: "72px 20px 64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>

          <div style={{ fontSize: "64px", marginBottom: "24px" }}>🧠</div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 50px)",
            fontWeight: 800,
            color: colors.white,
            lineHeight: 1.25,
            marginBottom: "24px",
          }}>
            You Just Made One of the Best Decisions You Could Make for Your Brain — and Your Life.
          </h1>

          <p style={{ fontSize: "clamp(17px, 2.5vw, 21px)", color: colors.gold, fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
            Welcome to the Mind Renewal Blueprint family. Your journey starts right now.
          </p>

        </div>
      </section>

      {/* ── CONGRATULATORY MESSAGE ── */}
      <section style={{ backgroundColor: colors.white, padding: "64px 20px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ fontSize: "19px", fontWeight: 700, color: colors.navy, lineHeight: 1.8, marginBottom: "24px" }}>
            Seriously — take a moment to feel good about what you just did.
          </p>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            In a world full of distractions, quick fixes, and empty promises, you chose something different. You chose science. You chose strategy. You chose to invest in the most important organ in your body — your brain.
          </p>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            That decision matters more than you know.
          </p>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            The Mind Renewal Blueprint — and everything you added to your order today — is built on decades of cutting-edge neuroscience, distilled into a clear, practical system that real people use to think sharper, feel better, and take back control of their mental energy at any age.
          </p>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "32px" }}>
            You now have everything you need. The knowledge. The plan. The tools. All that's left is to begin.
          </p>

          {/* Email callout */}
          <div style={{
            backgroundColor: colors.tealLt,
            border: `2px solid ${colors.teal}`,
            borderRadius: "14px",
            padding: "28px 32px",
            marginBottom: "32px",
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
          }}>
            <div style={{ fontSize: "36px", flexShrink: 0 }}>📧</div>
            <div>
              <p style={{ fontSize: "18px", fontWeight: 800, color: colors.navy, marginBottom: "8px" }}>
                What Happens Next — Check Your Email
              </p>
              <p style={{ fontSize: "16px", color: colors.slate, lineHeight: 1.9, margin: 0 }}>
                Your complete digital downloads and printables are on their way to your inbox right now. If you don't see them within a few minutes, be sure to check your spam or promotions folder.
              </p>
            </div>
          </div>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            Once you have everything, we recommend starting with the Blueprint first — then pulling out your Quick Track to map out your very first week. You'll be amazed at how quickly things start to shift when you have a clear plan to follow.
          </p>

          <p style={{ fontSize: "18px", fontWeight: 700, color: colors.navy, lineHeight: 1.7, margin: 0 }}>
            Here's to a sharper mind, more energy, and a better version of you — starting today.
          </p>

        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "6px", background: `linear-gradient(90deg, ${colors.navy}, ${colors.gold}, ${colors.navy})` }} />

      {/* ── SUPPLEMENT STACK RECOMMENDATION ── */}
      <section style={{ backgroundColor: colors.lightGray, padding: "64px 20px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ fontSize: "13px", fontWeight: 700, color: colors.coral, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>
            Important Recommendation
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(22px, 3.5vw, 34px)",
            fontWeight: 800,
            color: colors.navy,
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: 1.35,
          }}>
            One Important Recommendation Before You Begin
          </h2>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "20px" }}>
            Because Mind Renew MD is formulated with a maximum allowable amount per capsule, we strongly recommend adding just 4 additional supplements to your daily routine for truly optimal mind renewal results. We cover all of these in detail inside the Mind Renewal Blueprint.
          </p>

          <p style={{ fontSize: "17px", color: colors.slate, lineHeight: 1.9, marginBottom: "32px" }}>
            Together with Mind Renew MD, this becomes your complete <strong style={{ color: colors.navy }}>Mind Renew MD Plus Stack</strong> — the best of 23 proven supplements, simplified into just <strong style={{ color: colors.navy }}>5 per day</strong>:
          </p>

          {/* Supplement Table */}
          <div style={{ backgroundColor: colors.white, borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", marginBottom: "32px" }}>

            {/* Table Header */}
            <div style={{ backgroundColor: colors.navy, padding: "16px 28px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: colors.gold, textTransform: "uppercase", letterSpacing: "0.1em" }}>Supplement</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: colors.gold, textTransform: "uppercase", letterSpacing: "0.1em" }}>Daily Dose</span>
            </div>

            {/* Rows */}
            {[
              { name: "Mind Renew MD", dose: "As directed", highlight: true },
              { name: "Vitamin D3 + K2", dose: "D3 5,000 IU / K2 100 mcg", highlight: false },
              { name: "Fish Oil", dose: "2,000 mg", highlight: false },
              { name: "Creatine", dose: "10 grams", highlight: false },
              { name: "Methylene Blue", dose: "1 full dropper (10 drops)", highlight: false },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 28px",
                  backgroundColor: row.highlight ? colors.goldLt : i % 2 === 0 ? colors.white : colors.offWhite,
                  borderBottom: i < 4 ? "1px solid #E2E8F0" : "none",
                }}
              >
                <span style={{ fontSize: "16px", fontWeight: row.highlight ? 700 : 500, color: colors.navy }}>
                  {row.highlight ? "⭐ " : "✅ "}{row.name}
                </span>
                <span style={{ fontSize: "15px", color: colors.slate, fontWeight: 500, textAlign: "right" }}>{row.dose}</span>
              </div>
            ))}

            {/* Total callout */}
            <div style={{ backgroundColor: colors.sage, padding: "16px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: 800, color: colors.white }}>Total Daily Supplements</span>
              <span style={{ fontSize: "16px", fontWeight: 800, color: colors.white }}>5 (instead of 23)</span>
            </div>

          </div>

          {/* Additional note */}
          <div style={{
            backgroundColor: colors.coralLt,
            border: `2px solid ${colors.coral}`,
            borderRadius: "12px",
            padding: "22px 28px",
          }}>
            <p style={{ fontSize: "16px", color: colors.slate, lineHeight: 1.9, margin: 0 }}>
              <strong style={{ color: colors.navy }}>A note on flexibility:</strong> As you grow more comfortable with your routine, feel free to incorporate any of the additional mind renewal solutions highlighted in the Blueprint — such as nicotine patches and others — at your own pace.
            </p>
          </div>

        </div>
      </section>

      {/* ── CLOSING ENCOURAGEMENT ── */}
      <section style={{ backgroundColor: colors.navy, padding: "56px 20px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 800, color: colors.white, lineHeight: 1.4, marginBottom: "16px" }}>
            Your brain is ready. <span style={{ color: colors.gold }}>Are you?</span>
          </p>
          <p style={{ fontSize: "17px", color: "#CBD5E1", lineHeight: 1.9, margin: 0 }}>
            Everything you need is now in your hands. Start simple. Stay consistent. And trust the process — because the science is on your side.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <section style={{ backgroundColor: colors.charcoal, padding: "28px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.8, margin: 0 }}>
          © Mind Renewal Blueprint | All Rights Reserved<br />
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
        </p>
      </section>

    </div>
  );
}
