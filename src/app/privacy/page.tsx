import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="bg-card/40 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-sm">
          <h1 className="text-3xl font-bold mb-6 font-sans">Privacy Policy</h1>
          <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">1. Information We Collect</h2>
              <p>We collect basic account information when you create an account. Unless you press the upload button, we do not collect, upload, or store your photos. All photos taken using our application are temporary and remain solely on your device. If you choose to upload them, they are securely saved with encryption to our storage.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">2. How We Use Information</h2>
              <p>Account information is used solely to provide and maintain our services. All photo processing (including background removal) happens completely locally on your device via a downloaded AI model, meaning your images are never sent to our servers.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">3. Information Sharing</h2>
              <p>We do not share your data or photos with third parties. Since background removal happens entirely on your local device, no images are ever transmitted to any external APIs or third-party services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures designed to protect the security of any personal information we process. However, please note that we cannot guarantee the internet itself is 100% secure.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
