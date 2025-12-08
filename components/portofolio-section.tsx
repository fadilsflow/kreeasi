import {
    ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

import Image from "next/image";

export default function PortofolioSection() {
    return (
        <section className=" screen-line-before screen-line-after pt-15">
            <div className="gap-8">
                <h2 className=" pl-2 text-4xl font-medium mb-8 ">Blog</h2>
                <div className=" p-2 ">
                    <PortofolioContent />
                </div>
                <div className="flex justify-center py-20">
                    <Button variant="default" size={"lg"} className="ml-2" asChild>
                        <Link href="/blog">
                            See All Articles <ChevronRight className="ml-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}


const PortofolioContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PortofolioCard />
            <PortofolioCard />
            <PortofolioCard />
            <PortofolioCard />
            <PortofolioCard />
            <PortofolioCard />
        </div>
    )
}



const PortofolioCard = () => {
    return (
        <Card className="border rounded-2xl overflow-hidden p-0 shadow-sm ">
            <CardContent className="p-2 rounded-lg">
                <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                        src="/1.jpg"
                        alt="Portofolio Example"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>


                <div className="p-2">
                    <p className="text-md text-gray-500">13 September 2025</p>
                    <h3 className="text-lg  leading-tight font-medium pt-2">Apple luncurkan MacBook Pro M4: Tak ada perubahan desain, versi dasar kini punya RAM 16GB, harga mulai 40 juta</h3>
                </div>
            </CardContent>
        </Card>
    )
}