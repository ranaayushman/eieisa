import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from "./core/carousel"

export function CarouselSpacing() {
    return (
        <div className='relative w-full px-4'>
            <Carousel>
                <CarouselContent className='-ml-4'>
                    <CarouselItem className='basis-1/3 pl-4'>
                        <div className='flex aspect-square items-center justify-center border border-zinc-400 dark:border-zinc-800'>
                            <Image
                                src="/img/img1.jpg"
                                width={400}
                                height={100}
                                alt="gallery"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className='basis-1/3 pl-4'>
                        <div className='flex aspect-square items-center justify-center border border-zinc-400 dark:border-zinc-800'>
                            <Image
                                src="/img/img2.jpg"
                                width={400}
                                height={100}
                                alt="gallery"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className='basis-1/3 pl-4'>
                        <div className='flex aspect-square items-center justify-center border border-zinc-400 dark:border-zinc-800'>
                            <Image
                                src="/img/img3.jpg"
                                width={400}
                                height={100}
                                alt="gallery"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className='basis-1/3 pl-4'>
                        <div className='flex aspect-square items-center justify-center border border-zinc-400 dark:border-zinc-800'>
                            <Image
                                src="/img/img4.jpg"
                                width={400}
                                height={100}
                                alt="gallery"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className='basis-1/3 pl-4'>
                        <div className='flex aspect-square items-center justify-center border border-zinc-400 dark:border-zinc-800'>
                            <Image
                                src="/img/img5.jpg"
                                width={400}
                                height={100}
                                alt="gallery"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className='basis-1/3 pl-4'>
                        <div className='flex aspect-square items-center justify-center border border-zinc-400 dark:border-zinc-800'>
                            6
                        </div>
                    </CarouselItem>
                    <CarouselItem className='basis-1/3 pl-4'>
                        <div className='flex aspect-square items-center justify-center border border-zinc-400 dark:border-zinc-800'>
                            7
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNavigation
                    className='absolute -bottom-14 left-auto top-auto w-full justify-end gap-2'
                    classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-400 dark:*:stroke-zinc-800'
                    alwaysShow
                />
            </Carousel>
        </div>
    );
}
