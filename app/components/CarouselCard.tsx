import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from "./core/carousel";
import { display } from "./constanst/index";
import MaxWidthWrapper from "./mmw";

export function CarouselSpacing() {
    return (
        <div className="w-full px-4">
            <MaxWidthWrapper>
                <Carousel>
                    <CarouselContent className="-ml-4">
                        {display.map((item, index) => (
                            <CarouselItem className="sm:basis-1/3 pl-4 w-full" key={index}>
                                <div
                                    className="grid aspect-square items-center justify-center border border-zinc-400 dark:border-zinc-800"
                                    key={index}
                                >
                                    <Image
                                        src={item.imgSrc}
                                        width={400}
                                        height={100}
                                        alt="gallery"
                                        className="h-full w-full"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNavigation
                        className="absolute -bottom-14 left-auto top-auto w-full justify-end gap-2"
                        classNameButton="bg-zinc-800 :stroke-zinc-50 dark:bg-zinc-400 dark::stroke-zinc-800"
                        alwaysShow
                    />
                </Carousel>
            </MaxWidthWrapper>
        </div>
    );
}