import {
  ChevronRight,
  Code,
  Diamond,
  DraftingCompass,
  Headset,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Sparkle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn, formatRupiah } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

interface ServiceType {
  title: string;
  description: string;
  label: string;
  icon?: React.ReactNode;
  iconBorderType?: "circle" | "square";
  isFeatured?: boolean;
  price?: number;
}

export default function ServicesSection() {
  return (
    <section className="screen-line-before screen-line-after pt-15 border-x">
      <div className="gap-8">
        <h2 className=" pl-2 text-4xl font-medium  mb-8 screen-line-after screen-line-before">Melayani</h2>
        <div className="bg-edge p-2">
          <ServicesContent />
        </div>
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
      label: "konsultasi",
      icon: <DraftingCompass />,
      iconBorderType: "square",
      isFeatured: true,
    },
    {
      title: "Pengembangan perangkat lunak",
      description:
        "Ubah ide Anda menjadi antarmuka perangkat lunak yang intuitif, menarik, dan mudah digunakan yang mengoptimalkan pengalaman pengguna untuk produk Anda.",
      label: "konsultasi",
      icon: <Code />,
      iconBorderType: "circle",
      isFeatured: true,
    },
  ];

  const nonFeaturedServices: ServiceType[] = [
    {
      title: "Desain antarmuka (UI/UX)",
      description:
        "Ubah ide Anda menjadi antarmuka perangkat lunak yang intuitif, menarik, dan mudah digunakan yang mengoptimalkan pengalaman pengguna untuk produk Anda.",
      label: "konsultasi",
      icon: <DraftingCompass />,
      iconBorderType: "square",
      isFeatured: false,
    },
    {
      title: "DLayanan Desain Situs Web Sekolah",
      description:
        "Situs web profesional untuk sekolah, membantu sekolah dengan mudah membangun citra merek, mempromosikan produk dan layanan, serta menjangkau calon pelanggan secara efektif.",
      label: "konsultasi",
      icon: <DraftingCompass />,
      iconBorderType: "square",
      isFeatured: false,
    },
  ];

  return (
    <div className="gap-2">
      <div className="grid md:grid-cols-2 md:flex items-center gap-2">
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

      <div className="flex flex-col gap-2 pt-2">
        {nonFeaturedServices.map((service) => (
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
  price,
}: ServiceType) => {
  // Content khusus non-featured
  const extraFeatures = [
    {
      title: "Teknologi modern",
      desc: "Menggunakan teknologi terkini",
      icon: <Sparkle />,
    },
    {
      title: "Menjamin",
      desc: "Komitmen garansi produk",
      icon: <ShieldCheck />,
    },
    {
      title: "Dukungan 24/7",
      desc: "Selalu siap mendukung",
      icon: <Headset />,
    },
  ];

  if (!isFeatured) {
    return (
      <Card className="relative px-0 py-0">
        <div className="grid md:grid-cols-2 gap-2 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-2 py-4 px-4">
            <CardTitle className="text-xl font-medium">{title}</CardTitle>
            {price && (
              <p className="text-xl font-medium text-red-500">
                {formatRupiah(price)}
              </p>
            )}
            <p className="text-muted-foreground text-md">{description}</p>
            <Link
              href="#link"
              className="text-sm text-blue-500 hover:underline flex items-center"
            >
              Lihat Detailnya <ChevronRight className="ml-2 size-4" />
            </Link>
          </div>

          {/* RIGHT FEATURES LIST */}
          <div className="py-4 space-y-4 border-t md:border-l border-dashed md:pl-6 px-4">
            {extraFeatures.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="bg-accent/50 size-10 flex items-center justify-center rounded-lg">
                  <span className="text-muted-foreground">{item.icon}</span>
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Button variant="secondary" className="flex items-center">
                <ShoppingCart />
                Tambahkan ke keranjang</Button>
              <Button>Beli sekarang</Button>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
      </Card>
    );
  }

  // FEATURED CARD (DEFAULT)
  return (
    <Card className="relative">
      <CardContent
        className={cn(
          "space-y-3",
          isFeatured &&
          " before:absolute before:top-0 before:left-1/2 before:-translate-x-1/4 before:w-1/3 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/50 before:to-transparent"
        )}
      >
        {icon && (
          <div
            className={cn(
              "relative flex size-10 items-center justify-center text-muted-foreground",
              { "border rounded-xl": iconBorderType === "circle" }
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
        <Badge
          variant={"secondary"}
          className="absolute top-2 right-2">
          <Diamond />
          Premium</Badge>

        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex justify-end">
          <Button className="flex items-center w-fit gap-2 justify-end">
            <Phone />
            {label}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
