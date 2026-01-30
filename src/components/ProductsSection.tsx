import { Card, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
interface ServiceType {
  title: string;
  description: string;
}

export default function ProductSection() {
  return (
    <section id="services" className="pt-15 pb-8">
      <div className="gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl mb-8">Products</h2>
          <Link
            to="/"
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            View all <ArrowUpRight size={15} />
          </Link>
        </div>
        <ProductContent />
      </div>
    </section>
  );
}

export const ProductContent = () => {
  const services: ServiceType[] = [
    {
      title: "Mixedbread",
      description:
        "🍞 Mixedbread (6-person seed team) bakes next-gen search; our OSS models pull millions of HF downloads.",
    },
    {
      title: "Cursor",
      description:
        "Join our team to build community, provide support, and advocate for Cursor users. We tinker systems and tools to enhance workflows and make sure we provide a great user experience",
    },
    {
      title: "Mixedbread",
      description:
        "🍞 Mixedbread (6-person seed team) bakes next-gen search; our OSS models pull millions of HF downloads.",
    },
    {
      title: "Cursor",
      description:
        "Join our team to build community, provide support, and advocate for Cursor users. We tinker systems and tools to enhance workflows and make sure we provide a great user experience",
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-stretch">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesCard = ({ title, description }: ServiceType) => {
  return (
    <Card className="rounded-none relative px-0 py-0 h-full flex flex-col">
      <div className="flex flex-col h-full justify-between space-y-4 py-4 px-4">
        <div>
          <CardTitle className="text-xl font-medium mb-2 flex items-center gap-2">
            <img
              src="https://knhgkaawjfqqwmsgmxns.supabase.co/storage/v1/object/public/avatars/company/G8OWNXXIAElrMN98KkdB2/9bov4x9et7.png"
              alt=""
              width={40}
              height={40}
            />
            {title}
          </CardTitle>
          <p className="text-muted-foreground text-md line-clamp-2">
            {description}
          </p>
        </div>
        <Button render={<Link to="/" />} className="w-fit rounded-4xl" variant={"secondary"}>
          view
        </Button>
      </div>

      {/* BUTTONS */}
    </Card>
  );
};
