import { CheckCircle2, Shield, Gift, Clock, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Upsell Page — 15-Minute Mind Renewal Quick Track + Mind Renew MD Bundle
 * Design System: Clinical Elegance (matches Mind Renewal Blueprint sales page)
 * Colors: Sage Green (#6B9E7F), Warm Cream (#F5F1E8), Warm Coral (#E8876B), Deep Charcoal (#2C2C2C)
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
  ];

  const pricingOptions = [
    {
      medal: "🥉",
      label: "Starter Supply",
      bottles: "1 Bottle",
      supply: "1-Month Supply",
      retail: "$49.95",
      price: "$37.00",
      perBottle: "",
      savings: "You Save $12.95",
      popular: false,
    },
    {
      medal: "🥈",
      label: "Best Value",
      bottles: "2 Bottles",
      supply: "2-Month Supply",
      retail: "$99.00",
      price: "$74.00",
      perBottle: "Only $37.00 Per Bottle",
      savings: "You Save $25.00",
      popular: false,
    },
    {
      medal: "🥇",
      label: "MOST POPULAR",
      bottles: "3 Bottles + 1 FREE",
      supply: "4-Month Supply",
      retail: "$148.00",
      price: "$111.00",
      perBottle: "Only $27.75 Per Bottle",
      savings: "You Save $37.00 + Get a FREE Bottle",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── HERO SECTION ── */}
      <section className="bg-primary/10 py-10 px-4 text-center border-b-4 border-primary">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-block bg-secondary/20 text-secondary px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
            🎉 Congratulations — You Made It!
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Your Blueprint Is Ready —{" "}
            <span className="text-primary">34 Jam-Packed Pages</span> of
            Scientifically Proven Strategies That Are About to Change Your Life
            Forever!
          </h1>
          <p className="text-lg lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            <strong>Important:</strong> The Mind Renewal Blueprint goes deep —
            because you deserve the full truth, backed by real science. But if
            the sheer volume of life-changing detail feels a little overwhelming
            at first, don't worry for a single second.{" "}
            <strong>We built something just for you.</strong>
          </p>
        </div>
      </section>

      {/* ── VALIDATION + PROBLEM BRIDGE ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground leading-relaxed">
          <p>
            Congratulations — you just made one of the most important decisions
            of your life. You now hold the complete Mind Renewal Blueprint: the
            exact 5-pillar system backed by{" "}
            <strong>64 unique medical and scientific studies</strong> that can
            restore your clarity, memory, and joyful independence — without a
            single prescription pill.
          </p>
          <p className="text-xl font-bold text-foreground border-l-4 border-secondary pl-4">
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

      {/* ── PAIN AGITATION — INNER VOICE ── */}
      <section className="py-10 px-4 bg-background">
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
              className="bg-white border-l-4 border-secondary rounded-lg px-6 py-4 shadow-sm italic text-foreground text-lg"
            >
              {q}
            </div>
          ))}
          <div className="pt-4 space-y-4 text-lg text-foreground leading-relaxed">
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
            <p className="bg-primary/10 border border-primary/30 rounded-xl px-6 py-4 font-semibold text-foreground">
              Every day you delay is a day your brain misses the neurogenesis
              window your body is already generating —{" "}
              <span className="text-primary font-bold">
                700 new neurons daily
              </span>
              , just waiting for the right conditions to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION INTRODUCTION ── */}
      <section className="py-14 px-4 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xl font-semibold uppercase tracking-widest opacity-80">
            That is exactly why we created this:
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
            Introducing the 15-Minute Mind Renewal Quick Track System
          </h2>
          <p className="text-xl lg:text-2xl italic opacity-90 max-w-3xl mx-auto">
            The "Done-For-You" Daily Roadmap That Turns the Entire Blueprint
            Into a Simple, Foolproof Routine You Can Start Tomorrow Morning
          </p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
            This is not more information. This is your{" "}
            <strong>personal implementation system</strong> — a
            senior-friendly, step-by-step daily guide that takes every single
            decision off your plate and tells you exactly what to do, when to
            do it, and how to track your progress so you see real improvements
            fast.
          </p>
          <p className="text-xl font-bold">
            No guesswork. No overwhelm. No "where do I start?" Just simple,
            consistent action from Day 1.
          </p>
        </div>
      </section>

      {/* ── QUICK TRACK FEATURES ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-10">
            Here Is Exactly What You Get:
          </h3>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 bg-background rounded-2xl p-6 shadow-sm border border-border"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-foreground">
                    {f.title}
                    {f.subtitle && (
                      <span className="text-base font-normal text-muted-foreground ml-2 italic">
                        ({f.subtitle})
                      </span>
                    )}
                  </h4>
                  <p className="text-base text-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mini testimonials after Quick Track */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-3"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="italic text-foreground leading-relaxed">
                  "{t.quote}"
                </p>
                <p className="font-bold text-foreground text-sm">
                  — {t.name}, {t.age}, {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPLEMENT SECTION ── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
              But We Didn't Stop There.
            </h2>
            <p className="text-xl font-bold text-secondary">
              Because even with the perfect daily roadmap, there was still one
              problem our customers kept running into...
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border space-y-4 text-lg text-foreground leading-relaxed">
            <p>
              The Mind Renewal Blueprint identifies{" "}
              <strong>23 specific nutrients</strong> that the world's leading
              dementia researchers have proven are essential for reversing
              cognitive decline at the cellular level.
            </p>
            <p className="text-3xl font-display font-bold text-center text-foreground py-2">
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
            <p className="text-xl font-bold text-center text-primary">
              The result is:
            </p>
          </div>

          {/* Supplement Product Card */}
          <div className="bg-primary text-white rounded-3xl p-8 lg:p-12 space-y-6 shadow-xl">
            <div className="text-center space-y-3">
              <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-widest">
                Mind Renew MD
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold leading-tight">
                The All-in-One Brain Support Formula
              </h3>
              <p className="text-xl italic opacity-90">
                The Most Crucial of 23 Proven Brain-Renewing Nutrients. One
                Easy-to-Swallow Capsule. Zero Guesswork.
              </p>
            </div>
            <p className="text-lg leading-relaxed opacity-90 text-center max-w-2xl mx-auto">
              Formulated specifically for the Mind Renewal Blueprint protocol,
              Mind Renew MD packs the most critical brain-rejuvenating nutrients
              into a single daily capsule — so you get the full power of the
              Blueprint's supplement pillar without the confusion, the cost, or
              the cabinet full of bottles.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {supplementBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/80" />
                  <span className="text-base opacity-90">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supplement testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(1, 3).map((t, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-2xl p-6 space-y-3"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="italic text-foreground leading-relaxed">
                  "{t.quote}"
                </p>
                <p className="font-bold text-foreground text-sm">
                  — {t.name}, {t.age}, {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAILY ROUTINE TABLE ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center text-foreground">
            Here Is What Your Entire Day Looks Like With This Bundle:
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 font-bold text-lg">Time</th>
                  <th className="px-6 py-4 font-bold text-lg">What You Do</th>
                  <th className="px-6 py-4 font-bold text-lg">Time Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Morning", "Follow your Quick Track morning checklist + take 1 capsule", "15 minutes"],
                  ["Afternoon", "Follow your Quick Track afternoon checklist", "15 minutes"],
                  ["Evening", "Follow your Quick Track evening checklist", "15 minutes"],
                ].map(([time, action, duration], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-white"}>
                    <td className="px-6 py-4 font-bold text-foreground">{time}</td>
                    <td className="px-6 py-4 text-foreground">{action}</td>
                    <td className="px-6 py-4 font-semibold text-primary">{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-2xl font-bold text-center text-foreground">
            That's it.{" "}
            <span className="text-primary">45 minutes total.</span> Spread
            across your entire day.
          </p>
          <p className="text-lg text-foreground text-center leading-relaxed">
            No more forgetting doses. No more overwhelming shopping lists. No
            more wondering if you're doing it right. Just simple, consistent
            action that stacks tiny wins into life-changing clarity, memory, and
            joy — one effortless day at a time.
          </p>
        </div>
      </section>

      {/* ── MORE TESTIMONIALS ── */}
      <section className="py-14 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-10">
            What People Are Saying About This Bundle
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(3).map((t, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-sm"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="italic text-foreground leading-relaxed">
                  "{t.quote}"
                </p>
                <p className="font-bold text-foreground text-sm">
                  — {t.name}, {t.age}, {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BONUS REVEAL ── */}
      <section className="py-14 px-4 bg-secondary/10 border-y-4 border-secondary">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="flex justify-center">
            <Gift className="w-14 h-14 text-secondary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            BONUS: Get the Complete Quick Track System{" "}
            <span className="text-secondary">FREE</span> With Any Supplement
            Order
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            The 15-Minute Mind Renewal Quick Track System — your daily roadmap,
            tracking charts, meal planner, and grocery list — is a{" "}
            <strong className="text-secondary">$97 value</strong>.
          </p>
          <p className="text-xl text-foreground leading-relaxed">
            When you add any supply of Mind Renew MD to your order today, you
            get the entire Quick Track System{" "}
            <strong>absolutely free</strong>.
          </p>
          <p className="text-base text-muted-foreground italic">
            This bonus is only available on this page, right now, as a
            thank-you for being an existing Mind Renewal Blueprint customer. It
            will not be offered again at this price.
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Choose Your Supply Below — Exclusive Customer Pricing
            </h2>
            <p className="text-lg text-muted-foreground italic">
              Because you are an existing Mind Renewal Blueprint customer, we
              have applied a special 20% loyalty discount to your order today.
              This pricing is not available anywhere else.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingOptions.map((opt, i) => (
              <div
                key={i}
                className={`relative rounded-3xl border-2 p-6 space-y-4 flex flex-col shadow-md transition-transform hover:-translate-y-1 ${
                  opt.popular
                    ? "border-secondary bg-secondary/5 shadow-xl"
                    : "border-border bg-background"
                }`}
              >
                {opt.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-sm font-bold px-5 py-1 rounded-full shadow">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div className="text-center space-y-1 pt-2">
                  <div className="text-3xl">{opt.medal}</div>
                  <h3 className="text-xl font-bold text-foreground">{opt.label}</h3>
                  <p className="text-lg font-semibold text-foreground">{opt.bottles}</p>
                  <p className="text-sm text-muted-foreground">{opt.supply}</p>
                </div>
                <div className="text-center space-y-1 border-t border-border pt-4">
                  <p className="text-base text-muted-foreground line-through">
                    Retail: {opt.retail}
                  </p>
                  <p className="text-3xl font-bold text-primary">{opt.price}</p>
                  {opt.perBottle && (
                    <p className="text-sm font-semibold text-secondary">
                      {opt.perBottle}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-foreground bg-primary/10 rounded-full px-3 py-1 inline-block">
                    {opt.savings}
                  </p>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Gift className="w-4 h-4 text-secondary" />
                    FREE Quick Track System ($97 value)
                  </span>
                </div>
                <div className="mt-auto pt-2">
                  <Button
                    className={`w-full py-5 text-base font-bold rounded-xl shadow ${
                      opt.popular
                        ? "bg-secondary hover:bg-secondary/90 text-white"
                        : "bg-primary hover:bg-primary/90 text-white"
                    }`}
                  >
                    Add to My Order
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-2xl border border-border p-6 text-foreground text-base leading-relaxed">
            <strong>Why most customers choose the 4-month supply:</strong> Brain
            renewal is not a 30-day process — it is a lifestyle. The research
            behind the Blueprint shows that the most significant cognitive
            improvements are measured at the 90–120 day mark. Stocking up now
            also locks in today's loyalty pricing, which we cannot guarantee
            will be available in the future.
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className="py-14 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-primary rounded-3xl p-8 lg:p-12 text-center space-y-5 shadow-md">
            <Shield className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl font-display font-bold text-foreground">
              Our Iron-Clad 60-Day "Renew or Refund" Guarantee
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              We are so confident that the Mind Renew MD All-in-One Formula and
              Quick Track System will transform your daily routine and accelerate
              your results that we are backing your order with a full{" "}
              <strong>60-day money-back guarantee</strong>.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>
                If you don't feel more focused, more consistent, and more in
                control of your brain health within 60 days — for any reason at
                all — simply contact us for a complete, no-questions-asked
                refund.
              </strong>
            </p>
            <p className="text-base text-muted-foreground italic">
              You have absolutely nothing to lose and everything to gain. The
              only risk is not trying it.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-14 px-4 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-display font-bold">
            Ready to Make Brain Renewal Effortless?
          </h2>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold text-xl px-10 py-7 rounded-xl shadow-xl"
          >
            Yes! Add My Quick Track + Mind Renew MD Bundle to My Order Now →
          </Button>
          <p className="text-base opacity-80 italic">
            One click. No new checkout. Added instantly to your existing order.
          </p>
        </div>
      </section>

      {/* ── P.S. SECTION ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-5 text-foreground text-base leading-relaxed">
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

      {/* ── FOOTER ── */}
      <footer className="py-8 px-4 bg-background border-t border-border text-center text-sm text-muted-foreground space-y-2">
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
