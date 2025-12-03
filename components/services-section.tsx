import { Code, DraftingCompass, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

interface ServiceType {
  title: string;
  description: string;
  label: string;
  icon?: React.ReactNode;
  iconBorderType?: "circle" | "square";
  isFeatured?: boolean;
}

export default function ServicesSection() {
  return (
    <section className="screen-line-before screen-line-after pt-15 pb-15 px-4 md:px-2">
      <div className="gap-8">
        <h2 className="text-4xl font-medium pb-8 ">Melayani</h2>
        <ServicesContent />
      </div>
    </section>
  );
}

export const ServicesContent = () => {
  const services: ServiceType[] = [
    {
      title: "Desain antarmuka (UI/UX)",
      description:
        "Ubah ide Anda menjadi antarmuka perangkat lunak yang intuitif, menarik, dan mudah digunakan yang mengoptimalkan pengalaman pengguna untuk produk Anda.",
      label: "Hubungi untuk konsultasi",
      icon: <DraftingCompass />,
      iconBorderType: "square",
      isFeatured: true,
    },
    {
      title: "Pengembangan perangkat lunak",
      description:
        "Ubah ide Anda menjadi antarmuka perangkat lunak yang intuitif, menarik, dan mudah digunakan yang mengoptimalkan pengalaman pengguna untuk produk Anda.",
      label: "Hubungi untuk konsultasi",
      icon: <Code />,
      iconBorderType: "circle",
      isFeatured: true,
    },
  ];
  return (
    <div className="gap-8">
      <div className="grid md:grid-cols-2 md:flex items-center gap-6">
        {services.map((service) => (
          <ServicesCard
            key={service.title}
            title={service.title}
            description={service.description}
            label={service.label}
            icon={service.icon}
            iconBorderType={service.iconBorderType}
            isFeatured={service.isFeatured}
          />
        ))}
      </div>

      <div className="gap-4 pt-6">
        <ServicesCard
          title="Layanan Desain Situs Web Bisnis"
          description="Situs web profesional untuk bisnis, membantu bisnis dengan mudah membangun citra merek, mempromosikan produk dan layanan, serta menjangkau calon pelanggan secara efektif."
          label="Hubungi untuk konsultasi"
        />
      </div>
    </div>
  );
};

const ServicesCard = ({
  title,
  description,
  label,
  icon,
  iconBorderType,
  isFeatured,
}: ServiceType) => {
  return (
    <Card className="relative">
      <CardContent
        className={cn(
          "space-y-3",
          // Shine effect
          isFeatured &&
            "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/4 before:w-1/3 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/50 before:to-transparent before:rounded-full"
        )}
      >
        {icon && (
          <div
            className={cn(
              "relative flex size-10 items-center justify-center text-muted-foreground",

              {
                "border rounded-xl": iconBorderType === "circle",
              }
            )}
          >
            {icon}
            {iconBorderType === "square" && (
              <>
                <span className="absolute top-1.5 h-px w-10 bg-zinc-300 dark:bg-zinc-700"></span>
                <span className="absolute bottom-1.5 h-px w-10 bg-zinc-300 dark:bg-zinc-700"></span>
                <span className="absolute left-1.5 h-10 w-px bg-zinc-300 dark:bg-zinc-700"></span>
                <span className="absolute right-1.5 h-10 w-px bg-zinc-300 dark:bg-zinc-700"></span>
              </>
            )}
          </div>
        )}
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
        <Button className="flex items-center w-fit gap-2">
          <Phone />
          {label}
        </Button>
      </CardContent>
    </Card>
  );
};
