import { Camera, Heart, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center relative bg-background text-foreground selection:bg-primary/20">

      {/* Background Gradient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center pt-20 pb-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary border border-border/50 text-sm font-medium mb-8 shadow-sm text-white">
          <Sparkles className="w-4 h-4" />
          <p>Welcome to PikaBooth</p>
        </div>

        {/* Hero Typography */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-sans">
          Capture the <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Perfect Moment
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 font-sans">
          Choose your experience. Whether you're looking for a classic photobooth session or a romantic memory, we have the perfect setup for you.
        </p>

        {/* Mode Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">

          {/* Card 1: Studio Mode */}
          <Link href="https://app.pikabooth.web.id/" className="group relative block w-full outline-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-md transition-opacity opacity-0 group-hover:opacity-100 group-focus:opacity-100" />
            <div className="relative h-full p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group-hover:-translate-y-1 overflow-hidden">

              {/* Corner accent */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />

              <div className="flex flex-col items-start text-left gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Camera className="w-7 h-7" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Classic Studio</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The traditional photobooth experience. Choose from a variety of layouts, frames, and filters.
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>Enter Studio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Date Mode */}
          <Link href="https://app.pikabooth.web.id/date" className="group relative block w-full outline-none">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl blur-md transition-opacity opacity-0 group-hover:opacity-100 group-focus:opacity-100" />
            <div className="relative h-full p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 group-hover:-translate-y-1 overflow-hidden">

              {/* Corner accent */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />

              <div className="flex flex-col items-start text-left gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Heart className="w-7 h-7" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Date Mode</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A romantic experience tailored for couples. Special frames and romantic filters included.
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                  <span>Start Date</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl mx-auto mt-32 text-left">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-3 font-sans">Good to know</h2>
            <p className="text-muted-foreground font-sans">Questions long distance couples ask.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is the online photobooth free?",
                a: "Yes. Open a room, share the link, and shoot together for free. Using the booth costs absolutely nothing."
              },
              {
                q: "How does it work for a long distance couple?",
                a: "One person opens a room and sends the link; the other opens it in their browser and joins. A shared countdown fires the shot on both screens at the same second, so each frame of the photo strip holds both of you — even though you're in different places."
              },
              {
                q: "Do we need to install an app?",
                a: "No. PikaBooth runs right in the browser on phone or laptop. Allow camera access and you're in — nothing to download."
              },
              {
                q: "What else can we do on PikaBooth?",
                a: "PikaBooth is growing into a hub of fun dates and memories. You can create custom frames, apply creative filters, and publish your designs to the community."
              }
            ].map((faq, i) => (
              <details key={i} className="group border border-border/50 bg-card/40 backdrop-blur-sm rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-foreground hover:bg-card/60 transition-colors outline-none font-sans">
                  {faq.q}
                  <span className="relative flex shrink-0 ml-4 w-4 h-4">
                    <span className="absolute inset-0 bg-foreground/60 h-[2px] w-full top-1/2 -translate-y-1/2 transition-colors duration-300 group-open:bg-primary" />
                    <span className="absolute inset-0 bg-foreground/60 w-[2px] h-full left-1/2 -translate-x-1/2 transition-transform duration-300 group-open:rotate-90 group-open:bg-primary" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-sans mt-1">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-auto w-full text-center text-xs text-muted-foreground/60 font-sans pb-8 flex flex-col items-center gap-2">
        <div>&copy; {new Date().getFullYear()} PikaBooth. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </main>
  );
}
