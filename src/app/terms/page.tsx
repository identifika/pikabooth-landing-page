import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-card/40 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-sm">
          <h1 className="text-3xl font-bold mb-6 font-sans">Terms of Service</h1>
          <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">1. Acceptance of Terms</h2>
              <p>By accessing and using this photobooth application, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">2. User Content</h2>
              <p>You retain all rights to the photos you take using our service. All photo processing, including background removal, happens locally on your device. We do not collect, store, or transmit your photos to any external servers.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">3. Acceptable Use</h2>
              <p>You agree not to use the service for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">4. Modifications</h2>
              <p>We reserve the right to modify these terms at any time. We will always post the most current version on our site. By continuing to use the service after changes become effective, you agree to be bound by the revised terms.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
