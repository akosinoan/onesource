'use client'
import {useRef} from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function WhyUs() {
  
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
<div className="w-full pt-10 ">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <div className="flex gap-2 flex-col">
          <h2 className="text-5xl md:text-6xl tracking-tighter max-w-xl text-center font-regular bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300 text-transparent bg-clip-text inline-block ">
            Why Us?
          </h2>
        </div>
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
       
      <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <div>
                <div className=" font-normal text-4xl bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300 text-transparent bg-clip-text  ">
                  Reliable Supplier  
                </div>
                  <div className={`list-disc px-10 text-md md:text-sm leading-relaxed tracking-tight text-muted-foreground max-w-2xl`}> 
                    Consistent and timely delivery 
                  </div>
                </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <div>
                <div className=" font-normal text-4xl bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300 text-transparent bg-clip-text  ">
                Customization Expertise
                </div>
                  <div className={`list-disc px-10 text-md md:text-sm leading-relaxed tracking-tight text-muted-foreground max-w-2xl`}> 
                  Tailored to your brand vision identity 
                  </div>
                </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <div>
                <div className=" font-normal text-4xl bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300 text-transparent bg-clip-text  ">
                Cost-Effective Solutions
                </div>
                  <div className={`list-disc px-10 text-md md:text-sm leading-relaxed tracking-tight text-muted-foreground max-w-2xl`}> 
                  Competitive pricing without compromising on quality 
                  </div>
                </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div></div></div>
  )
}
