/**
 * @file DevJourney.tsx
 * @description
 *   The DevJourney component renders a timeline view of project groups based on certificate categories.
 *   It processes a list of projects (imported from "@/lib/data/projectsData") and groups them by their certificate
 *   type ("Web and Computer Programming" and "Web Development"). For each group, it builds a vertical carousel
 *   of project cards using the CustomCard component, and then passes the resulting data to the Timeline component.
 *
 *   This component provides an interactive way for users to navigate through different project categories,
 *   displaying a carousel for each certificate type within a timeline layout.
 *
 * @example
 *   <DevJourney />
 *
 * @remarks
 *   This file relies on external components and data:
 *   - Timeline component from "@/components/ui/timeline"
 *   - CustomCard component from "@/components/common/CustomCard"
 *   - Carousel components from "@/components/ui/carousel"
 *   - Project data from "@/lib/data/projectsData"
 */

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { projects } from "@/lib/data/projectsData";
import { CustomCard } from "@/components/common/CustomCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

/**
 * DevJourney Component
 *
 * Iterates over the projects data and creates an array of timeline entries.
 * Each timeline entry contains a title (certificate) and content, which is a vertical carousel
 * of project cards (CustomCard) corresponding to that certificate.
 *
 * @returns {JSX.Element} A timeline view displaying grouped project carousels.
 */
function DevJourney() {
    // Initialize an empty array to hold timeline entries.
    const data: { title: string; content: JSX.Element }[] = [];

    // Iterate through each project group in the projects data.
    for (const item of projects) {
        // Check the certificate type and push a corresponding timeline entry.
        if (item.certificate === "Web and Computer Programming") {
            data.push({
                title: "Web and Computer Programming",
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
                ),
            });
        } else if (item.certificate === "Web Development") {
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
                ),
            });
        }
    }

    // Render the Timeline component with the constructed timeline entries.
    return (
        <div className="min-h-screen w-full">
            <div>
                <Timeline data={data} />
            </div>
        </div>
    );
}

export default DevJourney;
