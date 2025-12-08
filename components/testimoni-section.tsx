import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import { LogoMark } from "./logo"

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string
    name: string
    username: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative  w-[450px] cursor-pointer overflow-hidden rounded border border-edge",
            )}
        >

            <blockquote className="h-[100px] text-lg px-5 py-5">{body}</blockquote>
            <div className="border-t flex justify-between items-stretch gap-2 px-4">
                <div className="flex items-center gap-3 py-3">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <div className="flex border-l items-center pl-4">
                    <LogoMark className="dark:invert invert-0" />
                </div>
            </div>
        </figure>
    )
}

export function TestimoniSection() {
    return (
        <div className="py-2  before:-top-px after:-bottom-px pt-15">
            <h2 className=" pl-2 text-4xl font-medium  pb-8 ">What our customers say
            </h2>
            <div className="border border-edge relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>
        </div>
    )
}
