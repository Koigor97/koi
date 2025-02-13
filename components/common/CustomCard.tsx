import React from "react";
import Link from "next/link";
import Image from "next/image";

import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from "../ui/card";
import {Button} from "@/components/ui/button";

// Defining the props for a project card
export interface ProjectCardProps {
    image: string;
    courseName?: string;
    projectName: string;
    learnMoreLink: string;
    demoLink?: string;
}

// Defining the props for a blog card
interface BlogCardProps {
    image: string;
    tags: string[];
    title: string;
    datePosted: string;
    blogPostLink: string;
}

export type CustomCardProps =
    | ({type: "project"} & ProjectCardProps)
    | ({type: "blog"} & BlogCardProps);

export const CustomCard: React.FC<CustomCardProps> = (props) => {
    if (props.type === "project") {
        // Destructure project-specific props.
        const { image, courseName, projectName, learnMoreLink, demoLink } = props;
        return (
            <Card className="max-w-md">
                <CardHeader className="p-3">
                    {/* Project image */}
                    <Image
                        src={image}
                        alt={projectName}
                        className="rounded-md w-full object-cover"
                        width={500}
                        height={250}
                    />
                    <CardTitle className="text-lg font-bold md:text-xl pt-2 ">
                        {projectName}
                    </CardTitle>
                    {courseName &&
                        <CardDescription className="text-base">
                            {courseName}
                        </CardDescription>
                    }
                </CardHeader>
                <CardFooter className="p-3 flex items-center gap-3">
                    <Link
                        href={learnMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-secondary1"
                    >
                        Learn More
                    </Link>
                    {demoLink && (
                        <Button asChild className="bg-primary1" variant="outline" size="sm">
                            <Link
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"

                            >
                                Demo
                            </Link>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        );
    } else if (props.type === "blog") {
        // Destructure blog-specific props.
        const { image, tags, title, datePosted, blogPostLink } = props;
        return (
            <Link href={blogPostLink} target="_blank" rel="noopener noreferrer">
                <Card className="max-w-md hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                        {/* Blog image */}
                        <Image
                            src={image}
                            alt={title}
                            className="rounded-md w-full object-cover"
                            width={500}
                            height={250}
                        />
                    </CardHeader>
                    <CardContent>
                        <div className="flex space-x-2 mb-2">
                            {tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs text-gray-500 border border-gray-300 rounded-full px-2 py-1"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{datePosted}</CardDescription>
                    </CardContent>
                </Card>
            </Link>
        );
    } else {
        return null;
    }
};
