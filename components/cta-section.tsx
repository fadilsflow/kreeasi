import { Button } from "@/components/ui/button";
import { MailPlus } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="mx-auto px-4 md:px-2 max-w-2xl md:max-w-3xl lg:max-w-6xl rounded-3xl border py-12 md:py-20 lg:py-32">
        <div className="text-center items-center flex flex-col gap-4">
          <div className="bg-primary-brand/30 p-2 rounded-lg">
            <MailPlus className="size-12 text-primary-brand" />
          </div>
          <h2 className="mt-4 text-balance text-4xl font-medium lg:text-5xl">
            Hubungi Kreeasi <br /> Untuk Memulai Ide Milikmu
          </h2>
          <p className=" text-balance text-lg text-muted-foreground max-w-xl">
            Punya ide besar? Atau proyek kecil yang perlu diselesaikan? Kreeasi
            siap membantu Anda mewujudkannya.
          </p>

          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">
              <span>Hubungi Sekarang</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
