import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle2, Zap, Apple, Pill, Brain, Shield } from "lucide-react";
import { useState } from "react";

/**
 * Clinical Elegance Design System
 * Color Palette: Sage Green (#6B9E7F), Warm Cream (#F5F1E8), Warm Coral (#E8876B), Deep Charcoal (#2C2C2C)
 * Typography: Playfair Display (headlines) + Inter (body)
 * Layout: Asymmetric sections with alternating text-image blocks, generous whitespace
 */

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Is dementia an inevitable part of getting older?",
      answer:
        "No—dementia isn't inevitable; it can be prevented and reversed with targeted interventions. The Mind Renewal Blueprint's 5-pillar system tackles root causes like inflammation and toxins, backed by 64 studies from experts like Bredesen and Ornish. Optimize lifestyle now to restore cognition and defy aging myths.",
    },
    {
      question: "Can dementia really be reversed, or is it hopeless once it starts?",
      answer:
        "Yes—reversal is possible and proven. Over 100 medical and scientific studies have shown clear reversal in memory loss and dementia. Ornish's 2024 trial and Bredesen's ReCODE (84% improvement) are just 2 of dozens of examples we list and detail in the Mind Renewal Blueprint. These studies deliver non-drug results that shatter the permanence myth.",
    },
    {
      question: "Are prescription drugs the only way to treat dementia?",
      answer:
        "No—drugs mask symptoms; natural strategies eradicate causes. Powered by 64 studies and Perlmutter/Hyman insights, Pillar 2's anti-inflammatory diets (e.g., walnuts per Sabaté), Pillar 4's meditation, and Pillar 5's toxin avoidance provide superior, side-effect-free cognitive gains.",
    },
    {
      question: "Does diet really make a difference, or is memory loss just genetic?",
      answer:
        "Genetics set the stage, but diet steals the show—overriding risks and even reversing cognitive decline. The PREDIMED trial (2013, updated 2018) proved a Mediterranean diet rich in olive oil and nuts slashes dementia risk by 30% through anti-inflammatory effects. Meanwhile, the Pase 2017 Framingham study linked sugary sodas to accelerated brain aging and memory loss, while eliminating them preserves function. These and other studies confirm: Targeted nutrition combats chronic inflammation, boosts neuroprotection, and rewires brain health far beyond genetic blueprints.",
    },
    {
      question: "Can exercise or daily habits actually improve brain health, or is it too late?",
      answer:
        "Never too late—exercise regenerates brains. Pillar 1's routines (Lancet 2024: walking; Steves 2016: strength) spike BDNF and neurogenesis. With Pillar 4's sleep/stress tools and Pillar 3 supplements, these habits reverse decline, delivering sharper cognition at any stage.",
    },
  ];

  const pillars = [
    { number: 1, title: "Physical Exercise", description: "Flood your brain with oxygen and BDNF", icon: Zap },
    { number: 2, title: "Food & Diet", description: "Eradicate inflammation, feed the brain", icon: Apple },
    { number: 3, title: "Key Natural Supplements", description: "Repair brain cells", icon: Pill },
    { number: 4, title: "Holistic Solutions", description: "Rewire the brain", icon: Brain },
    { number: 5, title: "Threats to Avoid", description: "Shield the brain from daily poisons", icon: Shield },
  ];

  const testimonials = [
    { name: "Patrick Ingram", role: "Son of Dementia Reversal Patient", quote: "MRB brought Mom back—conversations flow again, she remembers names, and she's laughing with Dad like old times!" },
    { name: "Linda", age: 65, quote: "Sharper than in years—my recall is back, brain fog gone, and I feel like myself again!" },
    { name: "Sarah", age: 68, quote: "Within 3 months, MoCA score jumped from 19 to 24—biomarkers cleared, inflammation down!" },
    { name: "Emily", age: 67, quote: "Gray matter grew, memory boosted 226%—reversing symptoms I never thought possible!" },
  ];

  const statistics = [
    { label: "Scientific Studies", value: "64" },
    { label: "Reversal Rate in Trials", value: "84%" },
    { label: "Memory Improvement", value: "226%" },
    { label: "Lives Transformed", value: "1000+" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="font-display text-2xl text-primary font-bold">Mind Renewal Blueprint</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#story" className="text-foreground hover:text-primary transition-colors">Story</a>
            <a href="#science" className="text-foreground hover:text-primary transition-colors">Science</a>
            <a href="#pillars" className="text-foreground hover:text-primary transition-colors">5 Pillars</a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors">Results</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                  Backed by 64 Medical Studies
                </div>
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight text-center">
                  Discover the Forbidden <span className="whitespace-nowrap">15-Minute</span> Mind Renewal <br className="hidden lg:block" />
                  <span className="block">Blueprint</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  That Reversed My Mother's Dementia—And Can Rewrite Your Brain's Future in 5 Simple Steps. Without a Single Prescription Pill!
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl font-bold text-foreground leading-relaxed">
                  Backed by 64 unique medical and scientific studies, clinical trials, and published research papers
                </p>
                <p className="text-lg font-semibold text-foreground">Dementia Is Reversible!</p>
                <p className="text-lg font-semibold text-foreground">Dementia is NOT a disease—it's a symptom of reversible causes.</p>
                <p className="text-base text-foreground leading-relaxed">
                  Big Pharma's worst nightmare: The Mind Renewal Blueprint (MRB)—the 5-pillar system that attacks dementia at its core—is finally revealed. Reclaim your sharp mind in just 15-minute sessions daily before it's too late.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 pt-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Get Your Blueprint Now - $17
                </Button>
                <p className="text-sm text-muted-foreground font-semibold">One Time Charge</p>
              </div>
              <div className="text-base lg:text-lg font-bold text-foreground">
                <p>60-Day "Renew or Refund" Guarantee: Try MRB risk-free. If no clarity gains, get a full refund <span className="block text-center -mt-1">No questions asked.</span></p>
              </div>
              <p className="text-base font-semibold text-foreground pt-2 text-center">
                Is Never Having To Worry About Dementia Or Alzheimers Disease Worth $17 To You?
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-96 order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663284257505/6pJ4AEUAEH7We5fdiWXHub/family-connection-arecXEtfVK5He2bo5ZinDe.webp"
                alt="Family Connection - Restored Memory"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">The Moment Everything Changed</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Two years ago, I got the call that shattered my world. My 86-year-old mother—the vibrant soul who cooked family dinners, filled her bird feeder with joy, and remembered every detail of our lives—had fallen and broken her hip.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We thought surgery would be a quick fix. But it wasn't. She spent months in a wheelchair. Her mood changed; she was now sedentary and depressed. Then the words slurred. Conversations looped. Then the devastating moment: She looked at my father, her partner of 60 years, and asked, \"Who are you?\"
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Dementia had struck like lightning. My sister and I were devastated. We felt powerless as the woman who raised us faded into confusion. Doctors offered the same hopeless script: Pills to treat the plaque or to \"manage symptoms.\" No cure. No reversal. Just prepare for the worst.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-semibold text-secondary">
                But I refused to accept that fate. Driven by love and desperation, I dove into a hidden world of suppressed science and rebel doctors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">The Science That Changed Everything</h2>
              <p className="text-xl text-muted-foreground">
                What I uncovered next brought my mother back—and is now changing thousands of lives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663284257505/6pJ4AEUAEH7We5fdiWXHub/science-research-blue-nc3PzXfseR5qYQcbFXgW4d.webp"
                    alt="Scientific Research Visualization"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-3">The Breakthrough Discovery</h3>
                    <p className="text-foreground leading-relaxed">
                      I stumbled upon a buried story that had aired on CNN—a study led by Dr. Dean Ornish, a clinical professor of medicine at the University of California, San Francisco, who applied intensive lifestyle interventions to improve and reverse symptoms in patients with early-stage Alzheimer's disease.
                    </p>
                  </div>
                  <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded">
                    <p className="text-foreground italic">
                      \"A featured patient, 68-year-old Tammy Maida, had been diagnosed in her late 50s and struggled with severe memory loss. After the program, she reported significant cognitive recovery, saying, 'I'm coming back. I'm like I was prior to the disease being diagnosed,' and described herself as an 'older but better version' of herself. Blood tests showed reduced amyloid plaque levels in her brain!\"
                    </p>
                  </div>
                  <p className="text-foreground font-semibold text-lg">
                    This was all I needed to finally have hope! Now I had scientific proof that dementia is NOT a death sentence and that it was actually completely reversible!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-border text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-display font-bold text-secondary mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missing Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">I remember dropping my head into my hands and whispering to myself "thank God, there really is hope"</p>
              
              <p className="text-lg font-semibold">What I uncovered next changed everything—and brought my mother back.</p>
              
              <p className="text-lg">Today, I'm sharing it with you. If you're watching a loved one slip away... or fearing your own mind's betrayal... this is the breakthrough you've been denied.</p>
              
              <p className="text-lg">Imagine the pain: Forgetting your child's name at a family gathering. Losing your way home from the store you've visited for decades. Watching the spark in your eyes dim as confusion takes hold.</p>
              
              <p className="text-lg">Dementia doesn't just steal memories—it robs independence, joy, and connection. Over 55 million suffer worldwide, with cases skyrocketing 150% by 2050.</p>
              
              <p className="text-lg">You've tried the "solutions": Expensive medications that claim to slow the slide, but don't, and many times cause debilitating side effects. Endless appointments yielding no hope.</p>
              
              <p className="text-lg font-semibold text-foreground">The brutal truth? You're fighting symptoms while the real causes—inflammation, insulin resistance ("Type 3 diabetes" of the brain), mitochondrial failure—rage unchecked. Big Pharma profits from your dependence, suppressing natural fixes that threaten their empire.</p>
              
              <p className="text-lg font-semibold">Every day delayed is another memory lost. Another step toward isolation. Don't let it happen.</p>
            </div>
            
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">The old way—pharma's "manage forever" model—fails because it ignores the root cause. Drugs like donepezil mask symptoms but let the disease progress. Studies show 99% failure rate in cures (FDA data). Diets like keto or Mediterranean definitely help, but without a full system, results stall or fade.</p>
              
              <p className="text-lg">I tried it all. Meds made my mother drowsy but didn't restore her. Generic advice from doctors? Useless. The old way is a dead end—profitable for them, devastating for you.</p>
              
              <p className="text-lg font-semibold text-foreground">The real truth your doctor is strictly forbidden to tell you? Dementia is NOT a disease. It is a series of symptoms from the breakdown of your mitochondria. Doctors spend all their time focusing on the plaques. But here's the thing: the plaques aren't the disease. They're your brain's response to something deeper. 2018 science translational medicine proves that those plaques are actually part of your brain's immune system, trying to protect you, not harm you. So the plaques are the firefighters and your doctor is trying to kill the firefighters rather than going after the arsonist starting the fires inside your mitochondria in the first place!</p>
            </div>
            
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg font-semibold">But what if there's a new way? A protocol that attacks dementia at its roots, reversing the damage naturally—in just 5 simple science-backed, proven steps?</p>
              
              <p className="text-lg">According to a 2013 study titled "Dynamics of hippocampal neurogenesis in adult humans": Your own body is still generating 700 new neurons daily in the region associated with memory and learning! Your brain wants to heal. It just needs the right conditions!</p>
            </div>
            
            <div className="space-y-6 text-foreground leading-relaxed bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-3xl font-display font-bold text-foreground text-center">Introducing The Mind Renewal Blueprint<br /><span className="block text-center">(MRB)</span></h3>
              <div className="flex justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663284257505/6pJ4AEUAEH7We5fdiWXHub/hero-brain-neural-blue_a2fe550e.png"
                  alt="Neural Brain"
                  className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <p className="text-lg">—the exclusive 5-pillar system born from my family's fight. Backed by 64 unique medical and scientific studies, clinical trials, published research and rebel medical doctors, MRB renews your brain from the inside out. No medications. No false hope. Just real proven reversal.</p>
              
              <p className="text-lg">MRB isn't just a generic guide. It's the detailed "forbidden blueprint" Big Pharma hides—targeting the true culprits (inflammation, "Type 3 diabetes," mitochondrial burnout) with natural, root-level renewal.</p>
              
              <p className="text-lg">Forged from my quest through paywalled journals and silenced experts, MRB delivers what simple AI prompts can't: Hard-won, exhausting research and insider knowledge for true transformation. Even the newest AI is pre-programmed to parrot big pharma talking points unless you know exactly what type of layered prompts to use to break through the built-in protections and find the shadow-banned scientific proven data that is already out there and has been for years!</p>
              
              <p className="text-lg">Backed by 100+ studies—like The Lancet's on exercise reducing risk 40%, or PREDIMED's diet trials—MRB combines the wisdom of pioneers like Dr. Dale Bredesen (84% improvement in ReCODE trials), Dr. Dean Ornish (biomarker reversal in The Lancet), and Dr. David Perlmutter (gut-brain restoration).</p>
              
              <p className="text-lg">This is the only system that pairs this suppressed science with a real hero's story—making renewal personal, credible, and powerful. No AI can replicate the human grit behind it.</p>
              
              <p className="text-lg font-semibold">We give you every last scientifically proven solution to complete memory reversal in simple to follow, bullet by bullet detail that can be implemented in just 15-minute sessions daily!!</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground text-center">The Problem: Why Current Solutions Fail</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-xl p-8 border border-destructive/20">
                <h3 className="text-2xl font-display font-bold text-destructive mb-4">The Old Way<br />(Big Pharma Model)</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span className="text-foreground">Drugs mask symptoms but let disease progress</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span className="text-foreground">99% failure rate in cures (FDA data)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span className="text-foreground">Debilitating side effects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span className="text-foreground">Ignores root causes (inflammation, toxins)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span className="text-foreground">\"Manage forever\" model = lifetime dependence</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">The MRB Way<br />(Root Cause)</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">Attacks root causes, not symptoms</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">84% reversal rate in clinical trials</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">No prescription pills or side effects</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">Backed by 64 unique scientific studies</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">Real reversal, not symptom management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-lg">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold text-secondary">The Real Truth Your Doctor Won't Tell You:</span> Dementia is NOT a disease—it's a series of symptoms from the breakdown of your mitochondria. Doctors focus on plaques, but plaques aren't the disease. They're your brain's immune response to something deeper. The plaques are the firefighters; your doctor is trying to kill the firefighters rather than going after the arsonist starting the fires inside your mitochondria!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars Section */}
      <section id="pillars" className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                The 5 Pillars of Mind Renewal Blueprint
              </h2>
              <p className="text-xl text-muted-foreground">
                Your Battle-Tested Roadmap That Can Be Implemented in Just 15-Minute Sessions Daily
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.number}
                    className="bg-white rounded-xl p-8 shadow-md border border-border hover:shadow-lg hover:border-primary transition-all group flex flex-col items-center justify-center min-h-80"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="text-center space-y-4 w-full">
                      <div className="text-7xl font-display font-bold text-primary">{pillar.number}</div>
                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground">{pillar.title}</h3>
                      <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-xl p-8 border border-border">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold text-primary\">Important:</span> Anyone who tries to sell you on a single solution—just a diet or just one supplement—is lying to you. You need all 5 pillars to bring you back to your youthful state of mind. This is proven in the dozens of medical and scientific studies we include in the MRB. Anything less will leave you frustrated, disappointed, and feeling desperate. Everyone loves a simple one-solution fix, but is your mind worth an extra 15 minutes a day to cover all the key components that actually work?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Abstract Image */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="relative h-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663284257505/6pJ4AEUAEH7We5fdiWXHub/five-pillars-abstract-e5GhocinwLPBEQwGMBCMrp.webp"
              alt="Five Pillars of Health"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Results & Testimonials Section */}
      <section id="results" className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">Real People... Real Results...</h2>
              <p className="text-xl text-muted-foreground">
                These aren't just numbers—these are real people and real scientific studies using the 5-Pillars
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-secondary text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground italic leading-relaxed mb-4\">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age && `Age ${testimonial.age}`}
                      {testimonial.role && testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Backed by Science</h3>
              <div className="grid md:grid-cols-2 gap-6 text-foreground">
                <div>
                  <p className="font-semibold text-primary mb-2">Bredesen Study:</p>
                  <p className="text-sm leading-relaxed">84% reversal in early Alzheimer's patients using root-cause protocols (<span className="font-bold">Journal of Alzheimer's Disease, 2024</span>)</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Ornish Trial:</p>
                  <p className="text-sm leading-relaxed">Biomarkers dramatically improved and cognitive function enhanced through natural lifestyle methods (<span className="font-bold">The Lancet Neurology</span>)</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">PREDIMED Trial:</p>
                  <p className="text-sm leading-relaxed">Mediterranean diet with olive oil reduced Alzheimer's risk by 40% and improved cognitive scores (<span className="font-bold">New England Journal of Medicine</span>)</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Methylene Blue Study:</p>
                  <p className="text-sm leading-relaxed"><span className="font-bold">2014, 2016 Aging Journal, 2018 Journal of Alzheimer's Disease</span>. Over 100 patients with complete reversal. <span className="font-bold">UCLA follow-up study</span> showed 84% improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">Your Mind Is Worth a 100% Risk-Free Guarantee!</h2>
            <p className="text-xl leading-relaxed text-foreground">
              60-Day "Renew or Refund" Guarantee: Try MRB risk-free. If no clarity gains, get a full refund—no questions asked.
            </p>
            <p className="text-base font-semibold text-foreground">
              Is Never Having To Worry About Dementia Or Alzheimers Disease Worth $17 To You?
            </p>
            <div className="flex flex-col items-center gap-2 pt-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-lg"
              >
                Get The Mind Renewal Blueprint - $17
              </Button>
              <p className="text-sm text-foreground font-semibold">One Time Charge</p>
            </div>
            <div className="space-y-4 pt-8 border-t border-gray-300">
              <p className="text-sm text-foreground">
                ✓ Instant Digital Download – Start Renewing Today!
              </p>
              <p className="text-sm text-foreground">
                ✓ Risk-free! If no clarity gains, you get a full refund—no questions asked!
              </p>
              <p className="text-xs text-foreground mt-6">
                P.S. Big Pharma won't tell you this life-changing information because they can't patent it. MRB tells you everything. Don't wait—claim your exclusive blueprint before prices rise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Everything you need to know about the Mind Renewal Blueprint</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-background/50 transition-colors text-left"
                  >
                    <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-4 border-t border-border bg-background/30">
                      <p className="text-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-display font-bold text-lg mb-4">Mind Renewal Blueprint</h4>
                <p className="text-sm opacity-75">Reverse dementia naturally with science-backed protocols.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm opacity-75">
                  <li><a href="#story" className="hover:opacity-100 transition-opacity">Our Story</a></li>
                  <li><a href="#science" className="hover:opacity-100 transition-opacity">The Science</a></li>
                  <li><a href="#pillars" className="hover:opacity-100 transition-opacity">5 Pillars</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Support</h4>
                <ul className="space-y-2 text-sm opacity-75">
                  <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
              <p>&copy; 2026 Mind Renewal Blueprint. All rights reserved. | Backed by 64 unique medical and scientific studies.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

