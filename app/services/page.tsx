import { ServicesContent } from "@/components/services-section";

export default function ServicesPage() {
  return (
    <>
      <div className="pt-12 pb-8 screen-line-after mx-auto px-4 md:px-2 max-w-2xl md:max-w-3xl lg:max-w-6xl">
        <div className="mb-8 py-8 screen-line-after space-y-2 ">
          <h2 className="text-balance text-4xl font-medium">Melayani</h2>
          <p className="text-balance text-lg text-muted-foreground">
            Temukan layanan Kreeasi yang berkualitas dan profesional.
          </p>
        </div>
        <ServicesContent />
      </div>
    </>
  );
}
