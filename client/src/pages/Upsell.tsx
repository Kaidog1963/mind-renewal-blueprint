import { CheckCircle2, Shield, Gift, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Upsell Page — 15-Minute Mind Renewal Quick Track + Mind Renew MD Bundle
 * Design System: Clinical Elegance (matches Mind Renewal Blueprint sales page)
 * Colors: Deep Navy (#1B3A5C) for headers, Light Gray (#F4F4F4) for alternating sections,
 *         White for content sections, Sky Blue (#3B82F6) for accents, Deep Charcoal (#2C2C2C) for body text
 */

export default function Upsell() {
  const features = [
    {
      title: "Your Complete 3-Session Daily Roadmap",
      subtitle: "Morning · Afternoon · Evening",
      description:
        "The entire 5-pillar Blueprint is broken down into three simple 15-minute sessions spread throughout your day. Each session tells you exactly what to do — your exercise, your supplements, your holistic practice, your mental exercise, and what to avoid. You simply follow the checklist. That's it.",
    },
    {
      title: "Printable Daily Tracking Charts",
      subtitle: "",
      description:
        "See your progress in black and white, every single day. There is nothing more motivating than checking off your wins and watching your streak grow. These charts are designed large-print and senior-friendly — easy to read, easy to use, easy to post on your refrigerator.",
    },
    {
      title: "Done-For-You Weekly Meal Planner",
      subtitle: "Breakfast, Lunch & Dinner",
      description:
        "No more standing in front of the refrigerator wondering what to eat. Every meal is already planned for you — delicious, brain-restoring foods that the top dementia doctors recommend, laid out day by day for the entire week.",
    },
    {
      title: "Pre-Filled Brain Health Grocery List",
      subtitle: "",
      description:
        "Hand this list to anyone and they can shop for you. Every item is already chosen, already brain-health approved, already organized by store section. No research required. No guessing. Just grab and go.",
    },
    {
      title: "Built-In Reminders for Every Pillar",
      subtitle: "",
      description:
        "Exercise. Meals. Supplements. Holistic practices. Threats to avoid. Every pillar is accounted for, every session, every day — so nothing falls through the cracks, even on your most forgetful days.",
    },
  ];

  const supplementBenefits = [
    "Manufactured in a certified US facility under strict GMP standards",
    "Third-party tested for purity, potency, and safety",
    "Free from cheap fillers, artificial additives, and untested ingredients",
    "Designed to work in perfect synergy with the other 4 pillars of the Blueprint",
  ];

  const testimonials = [
    {
      quote:
        "I was so overwhelmed by the Blueprint at first, but this organizer changed everything. The daily sessions are a breeze. My memory is sharper already — it's like getting my life back!",
      name: "Linda S.",
      age: 68,
      location: "Florida",
    },
    {
      quote:
        "No more guessing or skipping days! The checklists keep me on track, and the all-in-one supplements saved me a fortune. Highly recommend for anyone serious about real reversal.",
      name: "Tom R.",
      age: 72,
      location: "California",
    },
    {
      quote:
        "This made the whole process feel effortless. I love how it simplifies everything without cutting corners. Feeling more energized and focused after just two weeks!",
      name: "Emily T.",
      age: 67,
      location: "Texas",
    },
    {
      quote:
        "I used to forget half my supplements and feel guilty about it. Now it's one easy capsule and the organizer reminds me of every step. My husband notices I'm more present and alert — thank you!",
      name: "Susan M.",
      age: 71,
      location: "Arizona",
    },
    {
      quote:
        "The meal planner and grocery list alone are worth it. No more staring at the fridge wondering what to eat for brain health. My recall is noticeably better already.",
      name: "Robert K.",
      age: 69,
      location: "New York",
    },
    {
      quote:
        "I was skeptical about simplifying 23 supplements, but this stack works. Combined with the daily cheat sheets, I haven't missed a single thing in over a month. Feeling hopeful for the first time in years.",
      name: "Margaret L.",
      age: 74,
      location: "Oregon",
    },
    {
      quote:
        "My doctor was impressed at my last checkup. She said whatever I'm doing, keep doing it. I told her about the Quick Track and Mind Renew MD — she actually asked me to write it down for her!",
      name: "James P.",
      age: 70,
      location: "Georgia",
    },
  ];

  const pricingOptions = [
    {
      medal: "🥉",
      label: "Starter Supply",
      bottles: "1 Bottle",
      supply: "1-Month Supply",
      retail: "$49.95",
      totalPrice: "$37.00",
      perBottle: null,
      savings: "You Save $12.95",
      popular: false,
      bottleCount: 1,
    },
    {
      medal: "🥈",
      label: "Good Value",
      bottles: "2 Bottles",
      supply: "2-Month Supply",
      retail: "$99.00",
      totalPrice: "$74.00",
      perBottle: "Only $37.00 Per Bottle",
      savings: "You Save $25.00",
      popular: false,
      bottleCount: 2,
    },
    {
      medal: "🥇",
      label: "MOST POPULAR",
      bottles: "3 Bottles + 1 FREE",
      supply: "4-Month Supply",
      retail: "$148.00",
      totalPrice: "$111.00",
      perBottle: "Only $27.75 Per Bottle",
      savings: "You Save $37.00 + Get a FREE Bottle",
      popular: true,
      bottleCount: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#2C2C2C] font-sans">

      {/* ══════════════════════════════════════════
          HERO SECTION — Light Gray Background
      ══════════════════════════════════════════ */}
      <section className="bg-[#F4F4F4] py-16 px-4 text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block bg-[#1B3A5C] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
            🎉 Congratulations — You Made It!
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-[#1B3A5C] leading-tight">
            Your Blueprint Is Ready —{" "}
            <span className="text-[#3B82F6]">34 Jam-Packed Pages</span> of
            Scientifically Proven Strategies That Are About to Change Your Life
            Forever!
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALIDATION + PROBLEM BRIDGE — White
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-[#2C2C2C] leading-relaxed">
          <p>
            Congratulations — you just made one of the most important decisions
            of your life. You now hold the complete Mind Renewal Blueprint: the
            exact 5-pillar system backed by{" "}
            <strong>64 unique medical and scientific studies</strong> that can
            restore your clarity, memory, and joyful independence — without a
            single prescription pill.
          </p>
          <p className="text-xl font-bold text-[#1B3A5C]">
            But here's the honest truth that most programs never admit...
          </p>
          <p>
            Even the most powerful, scientifically proven system in the world
            won't work if you never start — or if you start and stop because it
            feels overwhelming.
          </p>
          <p>
            And right now, if you're like most of our customers, a quiet voice
            in the back of your mind is already asking:
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAIN AGITATION — Light Gray Background
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#F4F4F4]">
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "\"There's so much information here... where do I even begin?\"",
            "\"Which of the 5 pillars do I tackle first — and what do I do tomorrow morning when I wake up?\"",
            "\"Which supplements do I actually need to buy today? How many pills is that? How much will that cost?\"",
            "\"What should I eat for breakfast? Do I have the right foods in my fridge right now?\"",
            "\"What if I miss a day and lose all my progress?\"",
            "\"What if I do it wrong?\"",
          ].map((q, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-[#3B82F6] rounded-lg px-6 py-4 shadow-sm italic text-[#2C2C2C] text-lg"
            >
              {q}
            </div>
          ))}

          <div className="pt-8 space-y-6 text-lg text-[#2C2C2C] leading-relaxed">
            <p>
              These are completely normal concerns — especially when memory
              isn't at its best. The last thing you need right now is more
              confusion, more decisions, or more stress.
            </p>
            <p>
              <strong>Because here is what the research shows:</strong> The
              single biggest predictor of whether someone reverses cognitive
              decline is not the quality of the protocol — it is whether they
              start consistently within the first 72 hours and build an
              automatic daily habit.
            </p>
            <div className="bg-[#1B3A5C] text-white rounded-xl px-8 py-6 text-lg font-semibold leading-relaxed">
              Every day you delay is a day your brain misses the neurogenesis
              window your body is already generating —{" "}
              <span className="text-[#93C5FD] font-bold">
                700 new neurons daily
              </span>
              , just waiting for the right conditions to thrive.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          IMPORTANT BRIDGE — Light Gray (merged with pain section)
      ══════════════════════════════════════════ */}
      <section className="py-10 px-4 bg-[#F4F4F4]">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg lg:text-xl text-[#2C2C2C] leading-relaxed">
            <strong>Important:</strong> The Mind Renewal Blueprint goes deep —
            because you deserve the full truth, backed by real science. But if
            the sheer volume of life-changing detail feels a little overwhelming
            at first, don't worry for a single second.{" "}
            <strong>We built something just for you.</strong>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOLUTION INTRODUCTION — Deep Navy
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#1B3A5C] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-base font-semibold uppercase tracking-widest text-[#93C5FD]">
            That is exactly why we created this:
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
            Introducing the 15-Minute Mind Renewal Quick Track System
          </h2>
          <p className="text-xl lg:text-2xl italic text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
            The "Done-For-You" Daily Roadmap That Turns the Entire Blueprint
            Into a Simple, Foolproof Routine You Can Start Tomorrow Morning
          </p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-[#E2E8F0]">
            This is not more information. This is your{" "}
            <strong className="text-white">personal implementation system</strong> — a
            senior-friendly, step-by-step daily guide that takes every single
            decision off your plate and tells you exactly what to do, when to
            do it, and how to track your progress so you see real improvements
            fast.
          </p>
          <p className="text-xl font-bold text-white">
            No guesswork. No overwhelm. No "where do I start?" Just simple,
            consistent action from Day 1.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK TRACK FEATURES — Light Gray
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-display font-bold text-center text-[#1B3A5C] mb-10">
            Here Is Exactly What You Get:
          </h3>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-7 h-7 text-[#3B82F6]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-[#1B3A5C]">
                    {f.title}
                    {f.subtitle && (
                      <span className="text-base font-normal text-gray-500 ml-2 italic">
                        ({f.subtitle})
                      </span>
                    )}
                  </h4>
                  <p className="text-base text-[#2C2C2C] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials after Quick Track */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-sm"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic text-[#2C2C2C] leading-relaxed">
                  "{t.quote}"
                </p>
                <p className="font-bold text-[#1B3A5C] text-sm">
                  — {t.name}, Age {t.age}, {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUPPLEMENT PROBLEM — White
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#1B3A5C]">
              But We Didn't Stop There.
            </h2>
            <p className="text-xl font-bold text-[#3B82F6]">
              Because even with the perfect daily roadmap, there was still one
              problem our customers kept running into...
            </p>
          </div>

          <div className="space-y-6 text-lg text-[#2C2C2C] leading-relaxed">
            <p>
              The Mind Renewal Blueprint identifies{" "}
              <strong>23 specific nutrients</strong> that the world's leading
              dementia researchers have proven are essential for reversing
              cognitive decline at the cellular level.
            </p>
            <p className="text-3xl font-display font-bold text-center text-[#1B3A5C] py-2">
              Twenty-three.
            </p>
            <p>
              That means 23 separate bottles. 23 different labels to read. 23
              doses to track. A handful of pills every single morning. Hundreds
              of dollars a month. And the constant anxiety of wondering:{" "}
              <em>
                "Did I take all of them? Are these the right brands? Are they
                even tested for purity?"
              </em>
            </p>
            <p>
              We brought this problem to a team of leading dementia-focused
              doctors and researchers and asked them one question:{" "}
              <strong>
                "If you could give your patients just one supplement that
                delivered the core brain-rejuvenating benefits of all 23
                nutrients — what would it look like?"
              </strong>
            </p>
            <p className="text-xl font-bold text-center text-[#1B3A5C]">
              The result is:
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUPPLEMENT PRODUCT CARD — Light Gray
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-[#1B3A5C] text-white rounded-3xl p-8 lg:p-12 space-y-6 shadow-xl">
            <div className="text-center space-y-3">
              <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-widest">
                Mind Renew MD
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold leading-tight">
                The All-in-One Brain Support Formula
              </h3>
              <p className="text-xl italic text-[#CBD5E1]">
                The Most Crucial of 23 Proven Brain-Renewing Nutrients. One
                Easy-to-Swallow Capsule. Zero Guesswork.
              </p>
            </div>
            <p className="text-lg leading-relaxed text-[#E2E8F0] text-center max-w-2xl mx-auto">
              Formulated specifically for the Mind Renewal Blueprint protocol,
              Mind Renew MD packs the most critical brain-rejuvenating nutrients
              into a single daily capsule — so you get the full power of the
              Blueprint's supplement pillar without the confusion, the cost, or
              the cabinet full of bottles.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {supplementBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#93C5FD]" />
                  <span className="text-base text-[#E2E8F0]">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supplement testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(2, 4).map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-sm"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic text-[#2C2C2C] leading-relaxed">
                  "{t.quote}"
                </p>
                <p className="font-bold text-[#1B3A5C] text-sm">
                  — {t.name}, Age {t.age}, {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DAILY ROUTINE TABLE — White
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center text-[#1B3A5C]">
            Here Is What Your Entire Day Looks Like With This Bundle:
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#1B3A5C] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold text-lg">Time</th>
                  <th className="px-6 py-4 font-bold text-lg">What You Do</th>
                  <th className="px-6 py-4 font-bold text-lg">Time Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Morning", "Follow your Quick Track morning checklist + take 1 capsule", "15 minutes"],
                  ["Afternoon", "Follow your Quick Track afternoon checklist", "15 minutes"],
                  ["Evening", "Follow your Quick Track evening checklist", "15 minutes"],
                ].map(([time, action, duration], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F4F4F4]" : "bg-white"}>
                    <td className="px-6 py-4 font-bold text-[#1B3A5C]">{time}</td>
                    <td className="px-6 py-4 text-[#2C2C2C]">{action}</td>
                    <td className="px-6 py-4 font-semibold text-[#3B82F6]">{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-2xl font-bold text-center text-[#1B3A5C]">
            That's it.{" "}
            <span className="text-[#3B82F6]">45 minutes total.</span> Spread
            across your entire day.
          </p>
          <p className="text-lg text-[#2C2C2C] text-center leading-relaxed">
            No more forgetting doses. No more overwhelming shopping lists. No
            more wondering if you're doing it right. Just simple, consistent
            action that stacks tiny wins into life-changing clarity, memory, and
            joy — one effortless day at a time.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MORE TESTIMONIALS — Light Gray
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-display font-bold text-center text-[#1B3A5C] mb-10">
            What People Are Saying About This Bundle
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(4).map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-sm"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic text-[#2C2C2C] leading-relaxed">
                  "{t.quote}"
                </p>
                <p className="font-bold text-[#1B3A5C] text-sm">
                  — {t.name}, Age {t.age}, {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BONUS REVEAL — White with Blue Accent
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white border-y-4 border-[#3B82F6]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <Gift className="w-14 h-14 text-[#3B82F6]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#1B3A5C]">
            BONUS: Get the Complete Quick Track System{" "}
            <span className="text-[#3B82F6]">FREE</span> With Any Supplement
            Order
          </h2>
          <p className="text-xl text-[#2C2C2C] leading-relaxed">
            The 15-Minute Mind Renewal Quick Track System — your daily roadmap,
            tracking charts, meal planner, and grocery list — is a{" "}
            <strong className="text-[#3B82F6]">$97 value</strong>.
          </p>
          <p className="text-xl text-[#2C2C2C] leading-relaxed">
            When you add any supply of Mind Renew MD to your order today, you
            get the entire Quick Track System{" "}
            <strong>absolutely free</strong>.
          </p>
          <p className="text-base text-gray-500 italic">
            This bonus is only available on this page, right now, as a
            thank-you for being an existing Mind Renewal Blueprint customer. It
            will not be offered again at this price.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING — Light Gray
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#1B3A5C]">
              Choose Your Supply Below — Exclusive Customer Pricing
            </h2>
            <p className="text-lg text-gray-500 italic">
              Because you are an existing Mind Renewal Blueprint customer, we
              have applied a special loyalty discount to your order today. This
              pricing is not available anywhere else.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingOptions.map((opt, i) => (
              <div
                key={i}
                className={`relative rounded-3xl border-2 overflow-hidden flex flex-col shadow-md transition-transform hover:-translate-y-1 ${
                  opt.popular
                    ? "border-[#3B82F6] shadow-xl"
                    : "border-gray-200 bg-white"
                }`}
              >
                {opt.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#3B82F6] text-white text-sm font-bold text-center py-2 tracking-wide">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Bottle mockup image */}
                <div className={`flex justify-center items-center bg-white px-6 ${opt.popular ? "pt-12 pb-4" : "pt-6 pb-4"}`}>
                  <div className="relative">
                    {opt.bottleCount > 1 && (
                      <img
                        src="/images/mind-renew-md-bottle.jpg"
                        alt="Mind Renew MD"
                        className="w-20 h-28 object-contain absolute -left-8 top-2 opacity-60"
                      />
                    )}
                    {opt.bottleCount > 2 && (
                      <img
                        src="/images/mind-renew-md-bottle.jpg"
                        alt="Mind Renew MD"
                        className="w-20 h-28 object-contain absolute -right-8 top-2 opacity-60"
                      />
                    )}
                    <img
                      src="/images/mind-renew-md-bottle.jpg"
                      alt="Mind Renew MD"
                      className="w-28 h-36 object-contain relative z-10"
                    />
                  </div>
                </div>

                {/* Pricing info */}
                <div className={`px-6 pb-6 space-y-4 flex flex-col flex-1 ${opt.popular ? "bg-[#EFF6FF]" : "bg-white"}`}>
                  <div className="text-center space-y-1 pt-2">
                    <div className="text-2xl">{opt.medal}</div>
                    <h3 className="text-xl font-bold text-[#1B3A5C]">{opt.label}</h3>
                    <p className="text-base font-semibold text-[#2C2C2C]">{opt.bottles}</p>
                    <p className="text-sm text-gray-500">{opt.supply}</p>
                  </div>

                  <div className="text-center space-y-2 border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-400 line-through">
                      Retail: {opt.retail}
                    </p>
                    {/* Per-bottle price is the HERO number */}
                    {opt.perBottle ? (
                      <p className="text-3xl font-bold text-[#1B3A5C]">
                        {opt.perBottle}
                      </p>
                    ) : (
                      <p className="text-3xl font-bold text-[#1B3A5C]">
                        {opt.totalPrice}
                      </p>
                    )}
                    {/* Total price is smaller */}
                    {opt.perBottle && (
                      <p className="text-base text-gray-500 font-medium">
                        Total: {opt.totalPrice}
                      </p>
                    )}
                    <p className="text-sm font-semibold text-white bg-[#3B82F6] rounded-full px-4 py-1 inline-block">
                      {opt.savings}
                    </p>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Gift className="w-4 h-4 text-[#3B82F6]" />
                      FREE Quick Track System ($97 value)
                    </span>
                  </div>

                  <div className="mt-auto pt-2">
                    <Button
                      className={`w-full py-5 text-base font-bold rounded-xl shadow ${
                        opt.popular
                          ? "bg-[#3B82F6] hover:bg-[#2563EB] text-white"
                          : "bg-[#1B3A5C] hover:bg-[#162E4A] text-white"
                      }`}
                    >
                      Add to My Order
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-[#2C2C2C] text-base leading-relaxed shadow-sm">
            <strong>Why most customers choose the 4-month supply:</strong> Brain
            renewal is not a 30-day process — it is a lifestyle. The research
            behind the Blueprint shows that the most significant cognitive
            improvements are measured at the 90–120 day mark. Stocking up now
            also locks in today's loyalty pricing, which we cannot guarantee
            will be available in the future.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GUARANTEE — White
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F4F4F4] border-2 border-[#1B3A5C] rounded-3xl p-8 lg:p-12 text-center space-y-6 shadow-md">
            <Shield className="w-16 h-16 text-[#1B3A5C] mx-auto" />
            <h2 className="text-3xl font-display font-bold text-[#1B3A5C]">
              Our Iron-Clad 60-Day "Renew or Refund" Guarantee
            </h2>
            <p className="text-lg text-[#2C2C2C] leading-relaxed">
              We are so confident that the Mind Renew MD All-in-One Formula and
              Quick Track System will transform your daily routine and accelerate
              your results that we are backing your order with a full{" "}
              <strong>60-day money-back guarantee</strong>.
            </p>
            <p className="text-lg text-[#2C2C2C] leading-relaxed font-semibold">
              If you don't feel more focused, more consistent, and more in
              control of your brain health within 60 days — for any reason at
              all — simply contact us for a complete, no-questions-asked refund.
            </p>
            <p className="text-base text-gray-500 italic">
              You have absolutely nothing to lose and everything to gain. The
              only risk is not trying it.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA — Deep Navy
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#1B3A5C] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-display font-bold">
            Ready to Make Brain Renewal Effortless?
          </h2>
          <Button
            size="lg"
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-xl px-10 py-7 rounded-xl shadow-xl"
          >
            Yes! Add My Quick Track + Mind Renew MD Bundle to My Order Now →
          </Button>
          <p className="text-base text-[#CBD5E1] italic">
            One click. No new checkout. Added instantly to your existing order.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          P.S. SECTION — Light Gray
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#F4F4F4]">
        <div className="max-w-3xl mx-auto space-y-6 text-[#2C2C2C] text-base leading-relaxed">
          <p>
            <strong>P.S.</strong> — Your brain is generating 700 new neurons
            every single day in the region responsible for memory and learning.
            Those neurons are waiting for the right conditions to survive and
            thrive. Every day you delay giving them those conditions is a day of
            potential that is gone forever. But every day you follow this
            simple, proven system is another day you reclaim more of the
            vibrant, sharp, confident mind you deserve. The Quick Track and Mind
            Renew MD exist to make sure you never waste another day. Add this
            now while your loyalty discount is still active — and start your
            effortless daily routine tomorrow morning.
          </p>
          <p>
            <strong>P.P.S.</strong> — Remember: the Quick Track System alone is
            a $97 value, and it is yours completely free with any supplement
            order today. This bonus disappears when you leave this page. Don't
            leave it on the table.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER — White
      ══════════════════════════════════════════ */}
      <footer className="py-8 px-4 bg-white border-t border-gray-200 text-center text-sm text-gray-400 space-y-2">
        <p>© Mind Renewal Blueprint | All Rights Reserved</p>
        <p className="italic max-w-2xl mx-auto">
          These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease.
        </p>
      </footer>
    </div>
  );
}
