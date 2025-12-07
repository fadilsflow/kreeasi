
import { HeroHeader } from "@/components/hero-header";
import FooterSection from "@/components/footer-section";




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <HeroHeader />
            <main className="max-w-screen overflow-x-hidden">
                {children}
            </main>
            <FooterSection />
        </div>
    );
}
