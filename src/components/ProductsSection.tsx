import { Card, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
interface ServiceType {
  title: string;
  description: string;
  url: string;
}

export default function ProductSection() {
  return (
    <section id="services" className="pt-15 pb-8">
      <div className="gap-8">
        <div className="flex  items-center">
          <h2 className="text-2xl mb-8">Products</h2>
        </div>
        <ProductContent />
      </div>
    </section>
  );
}

export const ProductContent = () => {
  const services: ServiceType[] = [
    {
      title: "link.",
      description: "Link in bio that's simple, customizable, and free.",
      url: "https://link.kreeasi.web.id",
    },
    {
      title: "rightsponse",
      description: "AI-powered writing assistance.",
      url: "https://rs.fadils.xyz/",
    },
    {
      title: "jeda",
      description: "A pomodoro timer to help you focus and get things done. ",
      url: "https://jeda.webtron.biz.id/",
    },
    // {
    //   title: "Cursor",
    //   description:
    //     "Join our team to build community, provide support, and advocate for Cursor users. We tinker systems and tools to enhance workflows and make sure we provide a great user experience",
    // },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-stretch">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
            url={service.url}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesCard = ({ title, description, url }: ServiceType) => {
  return (
    <Card className=" px-0 py-0 h-full flex flex-col">
      <div className="flex flex-col h-full justify-between space-y-4 py-4 px-4">
        <div>
          <CardTitle className="text-xl  mb-2 font-heading">{title}</CardTitle>
          <p className="text-muted-foreground text-md line-clamp-2">
            {description}
          </p>
        </div>
        <Button
          render={<Link to={url} target="_blank" />}
          className="w-fit rounded-4xl"
          variant={"secondary"}
        >
          view
        </Button>
      </div>

      {/* BUTTONS */}
    </Card>
  );
};
