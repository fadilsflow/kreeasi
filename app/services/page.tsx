import { ServicesContent } from "@/components/services-section"

export default function ServicesPage() {
    return (
        <>
            <div className="pt-16 mx-auto  max-w-2xl md:max-w-3xl lg:max-w-5xl">
                <div className="screen-line-after space-y-2 py-8">
                    <h2 className="text-balance text-4xl font-medium">Melayani</h2>
                    <p className="text-balance text-lg text-muted-foreground">Temukan layanan Kreeasi yang berkualitas dan profesional.</p>
                </div>
                <ServicesContent />
            </div>
        </>
    )
}