import React from "react";

import {Timeline} from "@/components/ui/timeline";
import {projects} from "@/lib/data/projectsData";
import {CustomCard} from "@/components/common/CustomCard";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

function DevJourney() {
    const data = []

    for (const item of projects) {
        if (item.certificate === "Web and Computer Programming") {
            data.push({
                title: "Web and Computer Programming",
                content: (
                    <Carousel orientation='vertical'>
                        <CarouselContent>
                            {item.course.map((course, idx) => (
                                <CarouselItem key={idx} className="flex justify-center">
                                    <CustomCard {...course} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                )
            })
        }
        else if (item.certificate === "Web Development") {
            data.push({
                title: "Web Development",
                content: (
                    <Carousel orientation="vertical">
                        <CarouselContent>
                            {item.course.map((course, idx) => (
                                <CarouselItem key={idx} className="flex justify-center">
                                    <CustomCard {...course} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                )
            })
        }
    }

  return (
    <div className="min-h-screen w-full">
      <div className="">
          <Timeline data={data} />
      </div>
    </div>
  );
}

export default DevJourney;
