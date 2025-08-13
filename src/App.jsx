import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Shield, Globe2, Zap, Map, BellRing, Cloud, CreditCard, Lock, Plane, Smartphone, Cpu, Plug, HeartHandshake, Menu, X, MessageSquare, ShoppingCart, Compass, LineChart } from "lucide-react";

// Simple utility for section containers
const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${className}`}>
    {children}
  </section>
);

const Feature = ({ icon: Icon, title, children }) => (
  <Card className="rounded-2xl shadow-sm">
    <CardHeader className="space-y-2">
      <div className="w-12 h-12 rounded-2xl grid place-content-center bg-muted">
        <Icon className="w-6 h-6" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">
      {children}
    </CardContent>
  </Card>
);

const Tier = ({ name, price, period, highlights = [], cta = "Join the Beta", popular = false }) => (
  <Card className={`rounded-2xl ${popular ? "border-primary" : ""}`}>
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl">{name}</CardTitle>
        {popular && <Badge>Popular</Badge>}
      </div>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-semibold">{price}</span>
        <span className="text-muted-foreground mb-1">/{period}</span>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm mb-6">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-1" /> <span>{h}</span></li>
        ))}
      </ul>
      <Button className="w-full">{cta}</Button>
    </CardContent>
  </Card>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-semibold">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const NavLink = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-sm text-muted-foreground hover:text-foreground transition">
    {children}
  </a>
);

export default function Website() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl grid place-content-center bg-primary/10">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-semibold">TravelPorter</span>
            <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">Beta</Badge>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#features" onClick={(e)=>{e.preventDefault();scrollTo("features")}}>Features</NavLink>
            <NavLink href="#how" onClick={(e)=>{e.preventDefault();scrollTo("how")}}>How it works</NavLink>
            <NavLink href="#integrations" onClick={(e)=>{e.preventDefault();scrollTo("integrations")}}>Integrations</NavLink>
            <NavLink href="#pricing" onClick={(e)=>{e.preventDefault();scrollTo("pricing")}}>Pricing</NavLink>
            <NavLink href="#security" onClick={(e)=>{e.preventDefault();scrollTo("security")}}>Security</NavLink>
            <NavLink href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact")}}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Button onClick={() => scrollTo("cta")}>Join Beta</Button>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t">
            <div className="px-4 py-4 flex flex-col gap-4">
              {[
                ["features","Features"],
                ["how","How it works"],
                ["integrations","Integrations"],
                ["pricing","Pricing"],
                ["security","Security"],
                ["contact","Contact"],
              ].map(([id,label]) => (
                <a key={id} href={`#${id}`} onClick={(e)=>{e.preventDefault();scrollTo(id)}} className="text-sm">{label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <Section id="hero" className="pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="space-y-6">
            <Badge className="gap-2 w-fit"><Sparkles className="w-4 h-4"/> Next‑gen Travel Superapp</Badge>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Book smarter, travel safer, experience deeper — with <span className="text-primary">TravelPorter</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              One unified app for planning, visas, alerts, safety, local guides, and more. From first idea to wheels‑down and back home, we’ve got your trip covered.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo("cta")}>Join the Beta</Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("features")}>See how it works</Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <Stat value="All‑in‑one" label="Planner • Alerts • Local" />
              <Stat value="Proactive" label="Visa + safety checks" />
              <Stat value="Private" label="End‑to‑end encryption" />
            </div>
          </motion.div>

          {/* Mock phone UI */}
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}} className="flex justify-center lg:justify-end">
            <div className="w-[320px] rounded-[2rem] border shadow-xl p-4 bg-background">
              <div className="h-9"/>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Magellan Copilot</div>
                  <Badge variant="secondary" className="gap-1"><Cpu className="w-3 h-3"/> AI</Badge>
                </div>
                <div className="rounded-xl border p-3 text-sm text-muted-foreground">
                  Ask: “Do I need a visa for Tokyo next month?” or “My flight’s late — what’s my best connection?”
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border p-3 text-xs">
                    <div className="font-medium mb-1">Today</div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><BellRing className="w-3 h-3"/> Visa window opens</li>
                      <li className="flex items-center gap-2"><Plane className="w-3 h-3"/> Auto check‑in ready</li>
                      <li className="flex items-center gap-2"><Map className="w-3 h-3"/> Gate change A12 → B4</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-3 text-xs">
                    <div className="font-medium mb-1">Widgets</div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><Shield className="w-3 h-3"/> Safety score</li>
                      <li className="flex items-center gap-2"><Plug className="w-3 h-3"/> Power plug</li>
                      <li className="flex items-center gap-2"><ShoppingCart className="w-3 h-3"/> Local food</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Logos / social proof placeholder */}
      <Section id="social" className="py-10">
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
          <span>Integrates with</span>
          <Badge variant="outline">Amadeus</Badge>
          <Badge variant="outline">FlightAware</Badge>
          <Badge variant="outline">Skyscanner</Badge>
          <Badge variant="outline">Booking.com</Badge>
          <Badge variant="outline">Uber</Badge>
          <Badge variant="outline">Ticketmaster</Badge>
        </div>
      </Section>

      {/* Features */}
      <Section id="features">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold">Everything you need, in one place</h2>
          <p className="text-muted-foreground">From planning and booking to local guidance and safety, TravelPorter is your personal travel OS.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Zap} title="Smart Itineraries">
            Auto‑import from email/PDF, fix date conflicts, and keep flights, hotels, and cars in sync.
          </Feature>
          <Feature icon={Globe2} title="Visa & Vaccination Alerts">
            Real‑time requirements and deadlines from trusted sources before you fly.
          </Feature>
          <Feature icon={BellRing} title="Proactive Notifications">
            Early delay predictions, gate changes, price drops, and cancellation deadlines.
          </Feature>
          <Feature icon={Shield} title="Safety & Compliance">
            Local risk data, emergency contacts, walkability scores, and do’s & don’ts by destination.
          </Feature>
          <Feature icon={Cloud} title="Secure Travel Wallet">
            Encrypted storage for passports, visas, insurance, eSIMs, and entry/exit forms.
          </Feature>
          <Feature icon={MessageSquare} title="Magellan Copilot (AI)">
            Ask anything about your trip with contextual awareness across your plans and location.
          </Feature>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Before You Go</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Price drop alerts, visa checks, itinerary builder, power plug & customs briefings, and more.</p>
              <ul className="space-y-2">
                {[
                  "Smart booking error‑checks",
                  "Visa & vaccination checker",
                  "Itinerary auto‑import",
                  "Travel insurance upload & alerts",
                  "Local laws and do’s/don’ts",
                ].map((item,i)=> (<li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-1"/>{item}</li>))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>During Travel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Real‑time alerts and embedded local services keep you moving and safe.</p>
              <ul className="space-y-2">
                {[
                  "Preemptive delay notifications",
                  "Auto flight check‑in",
                  "Interactive airport maps",
                  "Entry/exit autofill & storage",
                  "Local safety score + translator",
                ].map((item,i)=> (<li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-1"/>{item}</li>))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>After Arrival</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Contextual updates, shareable summaries, and premium security add‑ons.</p>
              <ul className="space-y-2">
                {[
                  "Local news & civil‑unrest alerts",
                  "Health card access",
                  "VPN & eSIM partners",
                  "Shareable trip summaries",
                  "Customizable dashboard widgets",
                ].map((item,i)=> (<li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-1"/>{item}</li>))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Two marquee features */}
      <Section id="copilot" className="py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <Badge className="gap-2 w-fit"><Cpu className="w-4 h-4"/> AI Built‑in</Badge>
            <h3 className="text-2xl font-semibold">Magellan Copilot</h3>
            <p className="text-muted-foreground">Your AI assistant with embedded search and trip context. Ask about visas, delays, neighborhoods, or what to eat — and get instant, actionable answers.</p>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
              <li className="flex gap-2"><Check className="w-4 h-4 mt-1"/> Real‑time Q&A with trip context</li>
              <li className="flex gap-2"><Check className="w-4 h-4 mt-1"/> Local insights & safety guidance</li>
              <li className="flex gap-2"><Check className="w-4 h-4 mt-1"/> Works online & on the go</li>
              <li className="flex gap-2"><Check className="w-4 h-4 mt-1"/> Privacy‑first design</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Badge variant="secondary" className="gap-2 w-fit"><LineChart className="w-4 h-4"/> Auto‑Planner</Badge>
            <h3 className="text-2xl font-semibold">Travel Agent Pro</h3>
            <p className="text-muted-foreground">Set budget, timeframe, vibe, and group size — get a full itinerary with flights, stays, and activities. Book in taps.</p>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
              <li className="flex gap-2"><Check className="w-4 h-4 mt-1"/> Dynamic itineraries</li>
              <li className="flex gap-2"><Check className="w-4 h-4 mt-1"/> Smart booking recommendations</li>
              <li className="flex gap-2"><Check className="w-4 h-4 mt-1"/> Group collaboration</li>
              <li className="flex gap-2"><Check className="w-4 h-4 mt-1"/> Real‑time price tracking</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Integrations & Stack */}
      <Section id="integrations">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Key Integrations</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                "Amadeus / Skyscanner / FlightAware",
                "Booking.com / Expedia",
                "Google Maps / Uber",
                "Ticketmaster (events)",
                "Government visa & health advisories",
                "Insurance & eSIM partners",
              ].map((i, idx) => (<div key={idx} className="flex gap-2"><Check className="w-4 h-4 mt-1"/>{i}</div>))}
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium mb-1">Frontend</div>
                <p className="text-muted-foreground">React Native / Flutter</p>
              </div>
              <div>
                <div className="font-medium mb-1">Backend</div>
                <p className="text-muted-foreground">Node.js • PostgreSQL • Redis</p>
              </div>
              <div>
                <div className="font-medium mb-1">Cloud</div>
                <p className="text-muted-foreground">AWS or GCP</p>
              </div>
              <div>
                <div className="font-medium mb-1">Security</div>
                <p className="text-muted-foreground">Tokenized storage • E2E encryption</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-semibold">Simple, transparent pricing</h2>
          <p className="text-muted-foreground">Start free, upgrade when you’re ready. Team & partner plans available.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Tier name="Free" price="$0" period="forever" popular highlights={[
            "Itinerary builder",
            "Visa & vaccination alerts",
            "Travel wallet",
            "Destination briefings",
          ]}/>
          <Tier name="Premium" price="$5" period="mo" popular={true} highlights={[
            "Real‑time flight alerts",
            "Early delay predictions",
            "VPN & eSIM add‑ons",
            "Advanced widgets",
          ]}/>
          <Tier name="Pro + Magellan" price="$12" period="mo" highlights={[
            "Full AI trip copilot",
            "Concierge support",
            "Priority features",
            "Team sharing",
          ]}/>
        </div>
      </Section>

      {/* Security */}
      <Section id="security">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Security & Privacy</h3>
            <p className="text-muted-foreground">Your documents and personal data are protected with end‑to‑end encryption, strict access controls, and compliance with global standards.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><Lock className="w-4 h-4 mt-1"/> End‑to‑end encryption</li>
              <li className="flex gap-2"><Shield className="w-4 h-4 mt-1"/> Tokenized cloud storage</li>
              <li className="flex gap-2"><Globe2 className="w-4 h-4 mt-1"/> GDPR & CCPA alignment</li>
              <li className="flex gap-2"><CreditCard className="w-4 h-4 mt-1"/> PCI‑aware payment partners</li>
            </ul>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Compliance notes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Optional in‑app VPN to protect public Wi‑Fi. Identity via Auth0/Firebase. Payments via Stripe/Checkout/Rapyd.</p>
              <p>Role‑based access and audit trails for sensitive documents (passports, visas, insurance).</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Get early access</h3>
            <p className="text-muted-foreground mb-6">Be first to try TravelPorter and help shape the future of stress‑free travel.</p>
            <form className="grid sm:grid-cols-[1fr_auto] gap-3">
              <Input placeholder="Your email" type="email" required />
              <Button type="submit">Request Invite</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-2">No spam. We’ll only email about beta access and major updates.</p>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>For partners & investors</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>We’re seeking strategic partners across bookings, insurance, connectivity, and payments. Let’s talk integrations and go‑to‑market.</p>
              <div className="grid sm:grid-cols-2 gap-2">
                <Button variant="outline" onClick={()=>window.location.hash="#contact"}>Contact us</Button>
                <Button>Request the Deck</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
          <p className="text-muted-foreground">Quick answers about TravelPorter’s capabilities and roadmap.</p>
        </div>
        <Tabs defaultValue="one" className="max-w-3xl mx-auto">
          <TabsList className="flex flex-wrap gap-2 h-auto">
            <TabsTrigger value="one">What makes it different?</TabsTrigger>
            <TabsTrigger value="two">Will it replace my other apps?</TabsTrigger>
            <TabsTrigger value="three">When can I try it?</TabsTrigger>
            <TabsTrigger value="four">How do you handle privacy?</TabsTrigger>
          </TabsList>
          <TabsContent value="one" className="text-sm text-muted-foreground">
            TravelPorter unifies planning, logistics, safety, and local utilities into a single, proactive experience. No more juggling 6–10 apps.
          </TabsContent>
          <TabsContent value="two" className="text-sm text-muted-foreground">
            We integrate with popular providers so you don’t lose access — but you won’t need to bounce between apps. Book and manage from one place.
          </TabsContent>
          <TabsContent value="three" className="text-sm text-muted-foreground">
            Beta opens soon. Join the waitlist above to get early access and provide feedback.
          </TabsContent>
          <TabsContent value="four" className="text-sm text-muted-foreground">
            We use end‑to‑end encryption, tokenized storage, and strict access controls. You control what’s shared and when.
          </TabsContent>
        </Tabs>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
            <p className="text-muted-foreground mb-6">Interested in partnering, investing, or joining the beta? Drop us a line.</p>
            <form className="grid gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <Input placeholder="Name" required />
                <Input placeholder="Company" />
              </div>
              <Input type="email" placeholder="Email" required />
              <Textarea placeholder="Your message" rows={5} />
              <Button type="submit">Send message</Button>
            </form>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Business Model at a glance</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium mb-1">Freemium Core</div>
                <p className="text-muted-foreground">Itineraries, visa alerts, travel wallet, briefing</p>
              </div>
              <div>
                <div className="font-medium mb-1">Premium</div>
                <p className="text-muted-foreground">Real‑time alerts, early delay prediction, VPN, eSIM</p>
              </div>
              <div>
                <div className="font-medium mb-1">In‑App Purchases</div>
                <p className="text-muted-foreground">Insurance, concierge, city guides</p>
              </div>
              <div>
                <div className="font-medium mb-1">Affiliate</div>
                <p className="text-muted-foreground">Hotels, flights, activities, rideshare, food</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <Section id="footer" className="py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-2xl grid place-content-center bg-primary/10">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="font-semibold">TravelPorter</span>
              </div>
              <p className="text-muted-foreground">Your smartest travel companion — ever.</p>
            </div>
            <div>
              <div className="font-medium mb-2">Product</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features">Features</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Company</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#contact">Contact</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Legal</div>
              <ul className="space-y-2 text-muted-foreground">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} TravelPorter. All rights reserved.</div>
        </Section>
      </footer>
    </div>
  );
}
