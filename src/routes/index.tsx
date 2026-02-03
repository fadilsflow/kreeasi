import HeroSection from "@/components/HeroSection";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import ProductSection from "@/components/ProductsSection";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    // <main className="container mb-16 w-full flex-1 lg:mb-20">
    <main className="container mb-16 w-full flex-1 lg:mb-20 mx-auto">
      <HeroSection />
      {/* <PageHeader>
        <PageHeaderHeading>
          the{" "}
          <span className="before:-inset-x-1 before:-rotate-1 relative z-4 before:pointer-events-none before:absolute before:inset-y-0 before:z-4 before:bg-linear-to-r before:from-blue-500 before:via-purple-500 before:to-orange-500 before:opacity-16 before:mix-blend-hard-light">
            everything but AI
          </span>{" "}
          company.
        </PageHeaderHeading>
      </PageHeader> */}

      <ProductSection />
    </main>
  );
}
