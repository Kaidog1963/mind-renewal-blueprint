import { CheckCircle2, Shield, Gift, Star, ChevronRight } from "lucide-react";

/**
 * Mind Renewal Blueprint — Upsell Page
 * Design System: Matches Home.tsx "Clinical Elegance"
 * Colors: Warm Cream (#F5F1E8), Sage Green (#6B9E7F), Warm Coral (#E8876B),
 *         Deep Navy (#1B3A5C), Sky Blue (#DBEAFE), Light Gray (#F3F4F6)
 * Typography: Playfair Display (headlines) + Inter (body)
 * Spacing: Generous section padding (py-16 to py-24), consistent gaps
 */

const BOTTLE_IMG = "/images/mind-renew-md-bottle.jpg";

// Color palette (inline styles for reliability)
const colors = {
  cream: "#F5F1E8",
  sage: "#6B9E7F",
  sageLight: "#EAF3EE",
  sageMed: "#C8DFD0",
  coral: "#E8876B",
  coralLight: "#FDF0EC",
  navy: "#1B3A5C",
  navyLight: "#EBF0F6",
  skyBlue: "#DBEAFE",
  skyBlueMed: "#BFDBFE",
  skyBlueDark: "#3B82F6",
  lightGray: "#F3F4F6",
  medGray: "#E5E7EB",
  charcoal: "#2C2C2C",
  white: "#FFFFFF",
  gold: "#F59E0B",
};

const testimonials = [
  {
    name: "Linda S.",
    age: 68,
    location: "Florida",
    stars: 5,
    quote:
      "I was so overwhelmed by the Blueprint at first, but this organizer changed everything. The daily sessions are a breeze. My memory is sharper already — it's like getting my life back!",
  },
  {
    name: "Tom R.",
    age: 72,
    location: "California",
    stars: 5,
    quote:
      "No more guessing or skipping days! The checklists keep me on track, and the all-in-one supplements saved me a fortune. Highly recommend for anyone serious about real reversal.",
  },
  {
    name: "Emily T.",
    age: 67,
    location: "Texas",
    stars: 5,
    quote:
      "This made the whole process feel effortless. I love how it simplifies everything without cutting corners. Feeling more energized and focused after just two weeks!",
  },
  {
    name: "Susan M.",
    age: 71,
    location: "Arizona",
    stars: 5,
    quote:
      "I used to forget half my supplements and feel guilty about it. Now it's one easy capsule and the organizer reminds me of every step. My husband notices I'm more present and alert — thank you!",
  },
  {
    name: "Robert K.",
    age: 69,
    location: "New York",
    stars: 5,
    quote:
      "The meal planner and grocery list alone are worth it. No more staring at the fridge wondering what to eat for brain health. My recall is noticeably better already.",
  },

  {
    name: "James P.",
    age: 70,
    location: "Georgia",
    stars: 5,
    quote:
      "My doctor was amazed at my last check-up. My cognitive scores improved significantly and he asked what I was doing differently. I told him about this system and he said keep it up!",
  },
];

const quickTrackFeatures = [
  {
    title: "Your Complete 3-Session Daily Roadmap",
    subtitle: "Morning · Afternoon · Evening",
    desc: "The entire 5-pillar Blueprint is broken down into three simple 15-minute sessions spread throughout your day. Each session tells you exactly what to do — your exercise, your supplements, your holistic practice, your mental exercise, and what to avoid. You simply follow the checklist. That's it.",
  },
  {
    title: "Printable Daily Tracking Charts",
    subtitle: "",
    desc: "See your progress in black and white, every single day. There is nothing more motivating than checking off your wins and watching your streak grow. These charts are designed large-print and senior-friendly — easy to read, easy to use, easy to post on your refrigerator.",
  },
  {
    title: "Done-For-You Weekly Meal Planner",
    subtitle: "Breakfast, Lunch & Dinner",
    desc: "No more standing in front of the refrigerator wondering what to eat. Every meal is already planned for you — delicious, brain-restoring foods that the top dementia doctors recommend, laid out day by day for the entire week.",
  },
  {
    title: "Pre-Filled Brain Health Grocery List",
    subtitle: "",
    desc: "Hand this list to anyone and they can shop for you. Every item is already chosen, already brain-health approved, already organized by store section. No research required. No guessing. Just grab and go.",
  },
  {
    title: "Built-In Reminders for Every Pillar",
    subtitle: "",
    desc: "Exercise. Meals. Supplements. Holistic practices. Threats to avoid. Every pillar is accounted for, every session, every day — so nothing falls through the cracks, even on your most forgetful days.",
  },
];

const supplementBenefits = [
  "Manufactured in a certified US facility under strict GMP standards",
  "Third-party tested for purity, potency, and safety",
  "Free from cheap fillers, artificial additives, and untested ingredients",
  "Designed to work in perfect synergy with the other 4 pillars of the Blueprint",
];

const pricingOptions = [
  {
    badge: "🥉",
    title: "Starter Supply",
    bottles: "1 Bottle",
    supply: "1-Month Supply",
    bottleCount: 1,
    retail: "$49.95",
    price: "$37.00",
    perBottle: null,
    total: null,
    savings: "You Save $12.95",
    popular: false,
    highlight: "good",
  },
  {
    badge: "🥈",
    title: "Good Value",
    bottles: "2 Bottles",
    supply: "2-Month Supply",
    bottleCount: 2,
    retail: "$99.00",
    price: "Only $37.00 Per Bottle",
    perBottle: "Only $37.00 Per Bottle",
    total: "Total: $74.00",
    savings: "You Save $25.00",
    popular: false,
    highlight: "good",
  },
  {
    badge: "🥇",
    title: "MOST POPULAR",
    bottles: "3 Bottles + 1 FREE",
    supply: "4-Month Supply",
    bottleCount: 4,
    retail: "$148.00",
    price: "Only $27.75 Per Bottle",
    perBottle: "Only $27.75 Per Bottle",
    total: "Total: $111.00",
    savings: "You Save $37.00 + FREE Bottle",
    popular: true,
    highlight: "best",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "8px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} style={{ width: 16, height: 16, fill: colors.gold, color: colors.gold }} />
      ))}
    </div>
  );
}

function BottleMockup({ count, freeBottle }: { count: number; freeBottle?: boolean }) {
  if (count === 1) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "160px", marginBottom: "16px" }}>
        <img src={BOTTLE_IMG} alt="Mind Renew MD" style={{ height: "150px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }} />
      </div>
    );
  }
  if (count === 2) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "160px", marginBottom: "16px", position: "relative" }}>
        <img src={BOTTLE_IMG} alt="Mind Renew MD" style={{ height: "140px", width: "auto", objectFit: "contain", position: "relative", zIndex: 1, transform: "translateX(20px) rotate(-6deg)", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))" }} />
        <img src={BOTTLE_IMG} alt="Mind Renew MD" style={{ height: "150px", width: "auto", objectFit: "contain", position: "relative", zIndex: 2, transform: "translateX(-20px)", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.18))" }} />
      </div>
    );
  }
  // 4 bottles: 3 main + 1 free
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "160px", marginBottom: "16px", position: "relative" }}>
      {/* 3 overlapping bottles on left */}
      <img src={BOTTLE_IMG} alt="Mind Renew MD" style={{ height: "130px", width: "auto", objectFit: "contain", position: "relative", zIndex: 1, transform: "translateX(50px) rotate(-8deg)", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.10))" }} />
      <img src={BOTTLE_IMG} alt="Mind Renew MD" style={{ height: "140px", width: "auto", objectFit: "contain", position: "relative", zIndex: 2, transform: "translateX(20px) rotate(-3deg)", filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.13))" }} />
      <img src={BOTTLE_IMG} alt="Mind Renew MD" style={{ height: "150px", width: "auto", objectFit: "contain", position: "relative", zIndex: 3, transform: "translateX(-10px)", filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.18))" }} />
      {/* FREE bottle on right with badge */}
      <div style={{ position: "relative", zIndex: 4, transform: "translateX(-30px)" }}>
        <div style={{ position: "absolute", top: "-8px", right: "-8px", backgroundColor: colors.coral, color: "white", fontSize: "10px", fontWeight: "bold", padding: "2px 6px", borderRadius: "10px", zIndex: 5 }}>FREE</div>
        <img src={BOTTLE_IMG} alt="Mind Renew MD FREE" style={{ height: "130px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
      </div>
    </div>
  );
}

export default function Upsell() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: colors.cream, color: colors.charcoal, lineHeight: 1.7 }}>

      {/* ── HERO SECTION ── */}
      <section style={{ backgroundColor: colors.lightGray, padding: "60px 20px 50px", textAlign: "center", borderBottom: `4px solid ${colors.sageMed}` }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
          <p style={{ fontSize: "18px", fontWeight: 700, color: colors.sage, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
            Congratulations! — You Made It!
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: colors.navy, lineHeight: 1.2, marginBottom: "28px" }}>
            Your Blueprint Is Ready — 34 Jam-Packed Pages of Scientifically Proven Strategies That Are About to Change Your Life Forever!
          </h1>

        </div>
      </section>

      {/* ── VALIDATION + PROBLEM BRIDGE ── */}
      <section style={{ backgroundColor: colors.white, padding: "64px 20px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Congratulations! — you just made one of the most important decisions of your life.
          </p>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            You now hold the complete Mind Renewal Blueprint: the exact 5-pillar system backed by <strong>64 unique medical and scientific studies</strong> that can restore your clarity, memory, and joyful independence — without a single prescription pill.
          </p>
          <p style={{ fontSize: "18px", fontWeight: 700, color: colors.navy, marginBottom: "16px" }}>
            But here's the honest truth that most programs never admit...
          </p>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Even the most powerful, scientifically proven system in the world won't work if you never start — or if you start and stop because it feels overwhelming.
          </p>
          <p style={{ fontSize: "18px", marginBottom: "8px" }}>
            And right now, if you're like most of our <strong>students</strong>, a quiet voice in the back of your mind is already asking:
          </p>
        </div>
      </section>

      {/* ── PAIN AGITATION — INNER VOICE ── */}
      <section style={{ backgroundColor: colors.skyBlue, padding: "64px 20px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {[
            "\u201cThere\u2019s so much information here... where do I even begin?\u201d",
            "\u201cWhich of the 5 pillars do I tackle first \u2014 and what do I do tomorrow morning when I wake up?\u201d",
            "\u201cWhich supplements do I actually need to buy today? How many pills is that? How much will that cost?\u201d",
            "\u201cWhat should I eat for breakfast? Do I have the right foods in my fridge right now?\u201d",
            "\u201cWhat if I miss a day and lose all my progress?\u201d",
            "\u201cWhat if I do it wrong?\u201d",
          ].map((q, i) => (
            <div key={i} style={{ backgroundColor: colors.white, border: `2px solid ${colors.skyBlueMed}`, borderLeft: `5px solid ${colors.skyBlueDark}`, borderRadius: "10px", padding: "18px 24px", marginBottom: "14px" }}>
              <p style={{ fontSize: "17px", fontStyle: "italic", color: colors.navy, margin: 0 }}>{q}</p>
            </div>
          ))}
          <div style={{ marginTop: "32px" }}>
            <p style={{ fontSize: "17px", marginBottom: "16px" }}>
              These are completely normal concerns — especially when memory isn't at its best. The last thing you need right now is more confusion, more decisions, or more stress.
            </p>
            <p style={{ fontSize: "17px", marginBottom: "16px" }}>
              <strong>Because here is what the research shows:</strong> The single biggest predictor of whether someone reverses cognitive decline is not the quality of the protocol — it is whether they start consistently within the first 72 hours and build an automatic daily habit.
            </p>
          </div>
        </div>
      </section>

      {/* ── URGENCY BRIDGE ── */}
      <section style={{ backgroundColor: colors.sageLight, padding: "48px 20px", borderTop: `3px solid ${colors.sageMed}`, borderBottom: `3px solid ${colors.sageMed}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: colors.charcoal, marginBottom: "20px" }}>
            Every day you delay is a day your brain misses the neurogenesis window your body is already generating — <strong>700 new neurons daily</strong>, just waiting for the right conditions to thrive.
          </p>

        </div>
      </section>

      {/* ── SOLUTION INTRODUCTION ── */}
      <section style={{ backgroundColor: colors.navy, padding: "72px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap" }}>
          {/* Text — left side */}
          <div style={{ flex: "1 1 400px", textAlign: "left" }}>
            <p style={{ fontSize: "18px", color: colors.sageMed, fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              That is exactly why we created this:
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4.5vw, 42px)", fontWeight: 800, color: colors.white, lineHeight: 1.25, marginBottom: "20px" }}>
              Introducing the 15-Minute Mind Renewal Quick Track System
            </h2>
            <p style={{ fontSize: "19px", color: colors.skyBlueMed, fontStyle: "italic", marginBottom: "28px" }}>
              The "Done-For-You" Daily Roadmap That Turns the Entire Blueprint Into a Simple, Foolproof Routine You Can Start Tomorrow Morning
            </p>
            <p style={{ fontSize: "17px", color: "#CBD5E1", marginBottom: "16px" }}>
              This is not more information. This is your <strong style={{ color: colors.white }}>personal implementation system</strong> — a senior-friendly, step-by-step daily guide that takes every single decision off your plate and tells you exactly what to do, when to do it, and how to track your progress so you see real improvements fast.
            </p>
            <p style={{ fontSize: "17px", color: colors.sageMed, fontWeight: 600, margin: 0 }}>
              No guesswork. No overwhelm. No "where do I start?" Just simple, consistent action from Day 1.
            </p>
          </div>
          {/* Ebook image — right side */}
          <div style={{ flex: "0 0 220px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="/images/quicktrack-ebook.jpg"
              alt="15-Minute Mind Renewal Quick Track System"
              style={{ width: "200px", height: "auto", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.35)", border: `3px solid ${colors.sageMed}` }}
            />
          </div>
        </div>
      </section>

      {/* ── QUICK TRACK FEATURES ── */}
      <section style={{ backgroundColor: colors.white, padding: "72px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, color: colors.navy, textAlign: "center", marginBottom: "48px" }}>
            Here Is Exactly What You Get:
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {quickTrackFeatures.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start", backgroundColor: colors.lightGray, borderRadius: "14px", padding: "28px 28px" }}>
                <div style={{ flexShrink: 0, marginTop: "2px" }}>
                  <CheckCircle2 style={{ width: 28, height: 28, color: colors.sage }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: colors.navy, marginBottom: "4px" }}>
                    {f.title}
                    {f.subtitle && <span style={{ fontWeight: 400, color: colors.sage, fontSize: "15px" }}> — {f.subtitle}</span>}
                  </h3>
                  <p style={{ fontSize: "16px", color: colors.charcoal, margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPLEMENT BRIDGE ── */}
      <section style={{ backgroundColor: colors.coralLight, padding: "72px 20px", borderTop: `3px solid #F5C4B4`, borderBottom: `3px solid #F5C4B4` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: colors.navy, marginBottom: "24px" }}>
            But We Didn't Stop There.
          </h2>
          <p style={{ fontSize: "18px", fontWeight: 600, color: colors.charcoal, marginBottom: "20px" }}>
            Because even with the perfect daily roadmap, there was still one problem our students kept running into...
          </p>
          <p style={{ fontSize: "17px", marginBottom: "16px", textAlign: "left" }}>
            The Mind Renewal Blueprint identifies <strong>23 specific nutrients</strong> that the world's leading dementia researchers have proven are essential for reversing cognitive decline at the cellular level.
          </p>
          <p style={{ fontSize: "22px", fontWeight: 800, color: colors.navy, textAlign: "center", margin: "24px 0" }}>
            Twenty-three.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px", textAlign: "left" }}>
            That means 23 separate bottles. 23 different labels to read. 23 doses to track. A handful of pills every single morning. Hundreds of dollars a month. And the constant anxiety of wondering: <em>"Did I take all of them? Are these the right brands? Are they even tested for purity?"</em>
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px", textAlign: "left" }}>
            We brought this problem to a team of leading dementia-focused doctors and researchers and asked them one question: <strong>"If you could give your patients just one supplement that delivered the core brain-rejuvenating benefits of all 23 nutrients — what would it look like?"</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 700, color: colors.navy, textAlign: "center", marginTop: "32px" }}>
            The result is:
          </p>
        </div>
      </section>

      {/* ── SUPPLEMENT PRODUCT ── */}
      <section style={{ backgroundColor: colors.navyLight, padding: "72px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <img src={BOTTLE_IMG} alt="Mind Renew MD" style={{ height: "220px", width: "auto", objectFit: "contain", margin: "0 auto 24px", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }} />
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: colors.navy, marginBottom: "10px" }}>
              Mind Renew MD
            </h2>
            <p style={{ fontSize: "17px", color: colors.charcoal, fontWeight: 600, marginBottom: "6px" }}>
              The All-in-One Brain Support Formula
            </p>
            <p style={{ fontSize: "18px", fontStyle: "italic", color: colors.sage, fontWeight: 600 }}>
              The Most Crucial of 23 Proven Brain-Renewing Nutrients. One Easy-to-Swallow Capsule. Zero Guesswork.
            </p>
          </div>
          <p style={{ fontSize: "17px", marginBottom: "28px", textAlign: "center", maxWidth: "680px", margin: "0 auto 32px" }}>
            Formulated specifically for the Mind Renewal Blueprint protocol, Mind Renew MD packs the most critical brain-rejuvenating nutrients into a single daily capsule — so you get the full power of the Blueprint's supplement pillar without the confusion, the cost, or the cabinet full of bottles.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "600px", margin: "0 auto" }}>
            {supplementBenefits.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", backgroundColor: colors.white, borderRadius: "10px", padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <CheckCircle2 style={{ width: 22, height: 22, color: colors.sage, flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontSize: "16px", color: colors.charcoal, margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAILY ROUTINE TABLE ── */}
      <section style={{ backgroundColor: colors.white, padding: "72px 20px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, color: colors.navy, textAlign: "center", marginBottom: "36px" }}>
            Here Is What Your Entire Day Looks Like With This Bundle:
          </h2>
          <div style={{ borderRadius: "14px", overflow: "hidden", border: `2px solid ${colors.sageMed}`, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
            {/* Table Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", backgroundColor: colors.navy, color: colors.white, fontWeight: 700, fontSize: "15px" }}>
              <div style={{ padding: "16px 20px", borderRight: `1px solid rgba(255,255,255,0.15)` }}>Time</div>
              <div style={{ padding: "16px 20px", borderRight: `1px solid rgba(255,255,255,0.15)` }}>What You Do</div>
              <div style={{ padding: "16px 20px" }}>Time Required</div>
            </div>
            {/* Table Rows */}
            {[
              { time: "Morning", action: "Follow your Quick Track morning checklist + take 1 capsule", duration: "15 minutes" },
              { time: "Afternoon", action: "Follow your Quick Track afternoon checklist", duration: "15 minutes" },
              { time: "Evening", action: "Follow your Quick Track evening checklist", duration: "15 minutes" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", backgroundColor: i % 2 === 0 ? colors.sageLight : colors.white, borderTop: `1px solid ${colors.sageMed}` }}>
                <div style={{ padding: "18px 20px", fontWeight: 700, color: colors.navy, borderRight: `1px solid ${colors.sageMed}` }}>{row.time}</div>
                <div style={{ padding: "18px 20px", color: colors.charcoal, borderRight: `1px solid ${colors.sageMed}` }}>{row.action}</div>
                <div style={{ padding: "18px 20px", color: colors.sage, fontWeight: 700 }}>{row.duration}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <p style={{ fontSize: "20px", fontWeight: 800, color: colors.navy }}>
              That's it. 45 minutes total. Spread across your entire day.
            </p>
            <p style={{ fontSize: "17px", color: colors.charcoal, marginTop: "12px", maxWidth: "640px", margin: "12px auto 0" }}>
              No more forgetting doses. No more overwhelming shopping lists. No more wondering if you're doing it right. Just simple, consistent action that stacks tiny wins into life-changing clarity, memory, and joy — one effortless day at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ── ALL TESTIMONIALS ── */}
      <section style={{ backgroundColor: colors.skyBlue, padding: "72px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, color: colors.navy, textAlign: "center", marginBottom: "48px" }}>
            What Our Students Are Saying About This Bundle
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ backgroundColor: colors.white, borderRadius: "14px", padding: "28px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column" }}>
                <StarRating count={t.stars} />
                <p style={{ fontSize: "15px", fontStyle: "italic", color: colors.charcoal, flex: 1, marginBottom: "16px", lineHeight: 1.7 }}>
                  "{t.quote}"
                </p>
                <p style={{ fontSize: "14px", fontWeight: 700, color: colors.navy, margin: 0 }}>
                  — {t.name}, Age {t.age}, {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BONUS REVEAL ── */}
      <section style={{ backgroundColor: colors.navy, padding: "64px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎁</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, color: colors.white, marginBottom: "20px" }}>
            BONUS: Get the Complete Quick Track System FREE With Any Supplement Order
          </h2>
          <p style={{ fontSize: "17px", color: "#CBD5E1", marginBottom: "16px" }}>
            The 15-Minute Mind Renewal Quick Track System — your daily roadmap, tracking charts, meal planner, and grocery list — is a <strong style={{ color: colors.white }}>$97 value</strong>.
          </p>
          <p style={{ fontSize: "17px", color: "#CBD5E1", marginBottom: "16px" }}>
            When you add any supply of Mind Renew MD to your order today, you get the entire Quick Track System <strong style={{ color: colors.gold }}>absolutely free</strong>.
          </p>
          <p style={{ fontSize: "16px", color: colors.sageMed, fontStyle: "italic" }}>
            This bonus is only available on this page, right now, as a thank-you for being an existing Mind Renewal Blueprint student. It will not be offered again at this price.
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ backgroundColor: colors.cream, padding: "80px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: colors.navy, textAlign: "center", marginBottom: "12px" }}>
            Choose Your Supply Below — Exclusive Student Pricing
          </h2>
          <p style={{ fontSize: "16px", color: colors.charcoal, textAlign: "center", fontStyle: "italic", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
            Because you are an existing Mind Renewal Blueprint student, we have applied a special loyalty discount to your order today. This pricing is not available anywhere else.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", alignItems: "stretch" }}>
            {pricingOptions.map((opt, i) => (
              <div key={i} style={{
                backgroundColor: colors.white,
                borderRadius: "16px",
                border: opt.popular ? `3px solid ${colors.coral}` : `2px solid ${colors.medGray}`,
                boxShadow: opt.popular ? "0 8px 32px rgba(232,135,107,0.18)" : "0 2px 12px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                overflow: "visible",
                position: "relative",
              }}>
                {/* Popular Banner */}
                {opt.popular && (
                  <div style={{ backgroundColor: colors.coral, color: "white", textAlign: "center", fontWeight: 800, fontSize: "13px", letterSpacing: "0.08em", padding: "8px 16px", borderRadius: "12px 12px 0 0" }}>
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Title */}
                  <div style={{ textAlign: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "22px" }}>{opt.badge}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 800, color: colors.navy, margin: "6px 0 2px" }}>{opt.title}</h3>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: colors.sage, margin: 0 }}>{opt.bottles}</p>
                    <p style={{ fontSize: "13px", color: "#6B7280", margin: "2px 0 0" }}>{opt.supply}</p>
                  </div>

                  {/* Bottle Mockup */}
                  <BottleMockup count={opt.bottleCount} freeBottle={opt.bottleCount === 4} />

                  {/* Pricing */}
                  <div style={{ textAlign: "center", marginBottom: "16px" }}>
                    <p style={{ fontSize: "13px", color: "#9CA3AF", textDecoration: "line-through", margin: "0 0 4px" }}>Retail: {opt.retail}</p>
                    {opt.perBottle ? (
                      <>
                        <p style={{ fontSize: "26px", fontWeight: 900, color: colors.navy, margin: "0 0 4px", lineHeight: 1.1 }}>{opt.perBottle}</p>
                        <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 8px" }}>{opt.total}</p>
                      </>
                    ) : (
                      <p style={{ fontSize: "36px", fontWeight: 900, color: colors.navy, margin: "0 0 8px", lineHeight: 1.1 }}>{opt.price}</p>
                    )}
                    <div style={{ display: "inline-block", backgroundColor: colors.sageLight, color: colors.sage, fontWeight: 700, fontSize: "13px", padding: "4px 12px", borderRadius: "20px", marginBottom: "12px" }}>
                      {opt.savings}
                    </div>
                  </div>

                  {/* Free Bonus */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: colors.coralLight, borderRadius: "8px", padding: "10px 14px", marginBottom: "20px" }}>
                    <Gift style={{ width: 16, height: 16, color: colors.coral, flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", fontWeight: 600, color: colors.coral }}>FREE Quick Track System ($97 value)</span>
                  </div>

                  {/* CTA Button */}
                  <button style={{
                    width: "100%",
                    padding: "16px 20px",
                    fontSize: "16px",
                    fontWeight: 800,
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: opt.popular ? colors.coral : colors.navy,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: opt.popular ? "0 4px 16px rgba(232,135,107,0.35)" : "0 2px 8px rgba(27,58,92,0.20)",
                    marginTop: "auto",
                  }}>
                    Add to My Order <ChevronRight style={{ width: 18, height: 18 }} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Why 4-month note */}
          <div style={{ backgroundColor: colors.navyLight, border: `1px solid ${colors.skyBlueMed}`, borderRadius: "12px", padding: "24px 28px", marginTop: "36px", maxWidth: "760px", margin: "36px auto 0" }}>
            <p style={{ fontSize: "15px", color: colors.charcoal, margin: 0 }}>
              <strong style={{ color: colors.navy }}>Why most students choose the 4-month supply:</strong> Brain renewal is not a 30-day process — it is a lifestyle. The research behind the Blueprint shows that the most significant cognitive improvements are measured at the 90–120 day mark. Stocking up now also locks in today's loyalty pricing, which we cannot guarantee will be available in the future.
            </p>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section style={{ backgroundColor: colors.white, padding: "72px 20px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <Shield style={{ width: 56, height: 56, color: colors.sage, margin: "0 auto 20px" }} />
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, color: colors.navy, marginBottom: "20px" }}>
            Our Iron-Clad 60-Day "Renew or Refund" Guarantee
          </h2>
          <div style={{ backgroundColor: colors.sageLight, border: `2px solid ${colors.sageMed}`, borderRadius: "14px", padding: "32px 36px" }}>
            <p style={{ fontSize: "17px", color: colors.charcoal, marginBottom: "16px" }}>
              We are so confident that the Mind Renew MD All-in-One Formula and Quick Track System will transform your daily routine and accelerate your results that we are backing your order with a full <strong>60-day money-back guarantee</strong>.
            </p>
            <p style={{ fontSize: "17px", fontWeight: 700, color: colors.navy, marginBottom: "16px" }}>
              If you don't feel more focused, more consistent, and more in control of your brain health within 60 days — for any reason at all — simply contact us for a complete, no-questions-asked refund.
            </p>
            <p style={{ fontSize: "16px", fontStyle: "italic", color: colors.charcoal, margin: 0 }}>
              You have absolutely nothing to lose and everything to gain. The only risk is not trying it.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ backgroundColor: colors.navy, padding: "72px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: colors.white, marginBottom: "28px" }}>
            Ready to Make Brain Renewal Effortless?
          </h2>
          <button style={{
            backgroundColor: colors.coral,
            color: "white",
            fontSize: "20px",
            fontWeight: 800,
            padding: "22px 48px",
            borderRadius: "14px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 6px 24px rgba(232,135,107,0.40)",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}>
            Yes! Add My Quick Track + Mind Renew MD Bundle to My Order Now <ChevronRight style={{ width: 22, height: 22 }} />
          </button>
          <p style={{ fontSize: "14px", color: colors.sageMed, fontStyle: "italic", marginTop: "12px" }}>
            One click. No new checkout. Added instantly to your existing order.
          </p>
        </div>
      </section>

      {/* ── P.S. SECTION ── */}
      <section style={{ backgroundColor: colors.lightGray, padding: "64px 20px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", color: colors.charcoal, marginBottom: "20px", lineHeight: 1.8 }}>
            <strong>P.S.</strong> — Your brain is generating 700 new neurons every single day in the region responsible for memory and learning. Those neurons are waiting for the right conditions to survive and thrive. Every day you delay giving them those conditions is a day of potential that is gone forever. But every day you follow this simple, proven system is another day you reclaim more of the vibrant, sharp, confident mind you deserve. The Quick Track and Mind Renew MD exist to make sure you never waste another day. Add this now while your loyalty discount is still active — and start your effortless daily routine tomorrow morning.
          </p>
          <p style={{ fontSize: "17px", color: colors.charcoal, lineHeight: 1.8 }}>
            <strong>P.P.S.</strong> — Remember: the Quick Track System alone is a $97 value, and it is yours completely free with any supplement order today. This bonus disappears when you leave this page. Don't leave it on the table.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: colors.navy, padding: "32px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "14px", color: "#94A3B8", marginBottom: "10px" }}>
          © Mind Renewal Blueprint | All Rights Reserved
        </p>
        <p style={{ fontSize: "12px", color: "#64748B", fontStyle: "italic", maxWidth: "600px", margin: "0 auto" }}>
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </footer>

    </div>
  );
}
