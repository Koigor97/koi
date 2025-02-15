/**
 * @file projectsData.ts
 * @description
 *   This file provides data for projects and blog details used within the application.
 *   It exports a list of projects grouped by certificate and a blogDetailsData array for blog posts.
 *
 *   The projects array is structured as an array of objects, each containing:
 *     - certificate: A string representing the certificate or category.
 *     - course: An array of project objects that conform to the CustomCardProps interface.
 *
 *   The blogDetailsData array holds blog post data conforming to the BlogCardProps interface.
 *   An asynchronous function (getData) is used to fetch blog data from the '/api/blogs' endpoint,
 *   and the fetched data is then pushed into blogDetailsData.
 *
 * @remarks
 *   Note: The getData function is invoked immediately so that blogDetailsData is populated
 *   when the module is imported. Ensure that the API endpoint returns data in a format that
 *   matches the BlogCardProps interface.
 */

import { BlogCardProps, CustomCardProps } from "@/components/common/CustomCard";

/**
 * Projects Data
 *
 * An array of project groups. Each group is associated with a certificate category and contains
 * an array of project objects. Each project object must satisfy the CustomCardProps interface.
 */
export const projects: { certificate: string; course: CustomCardProps[] }[] = [
    {
        certificate: "Web and Computer Programming",
        course: [
            {
                image: "/images/courses/wcp/dynamic_web_fundamentals.webp",
                courseName: "Dyanmic Web Fundamentals",
                projectName: "Lynnwood Business Chamber",
                learnMoreLink: "https://github.com/Koigor97/wdd231",
                type: "project",
            },
            {
                image: "/images/courses/wcp/programming-with-functions.webp",
                courseName: "CSE-111: Programming With Functions",
                projectName: "Password Manager",
                learnMoreLink: "https://github.com/Koigor97/cse111",
                type: "project",
            },
            {
                image: "/images/courses/wcp/programming-with-classes.webp",
                courseName: "CSE-210: Programming With Classes",
                projectName: "Event Planning Console project",
                learnMoreLink: "https://github.com/Koigor97/csharp-cse210",
                type: "project",
            },
            {
                image: "/images/courses/wcp/web_frontend_1.webp",
                courseName: "WDD-231: Web Frontend Development 1",
                projectName: "SleepOutside",
                learnMoreLink: "https://github.com/lucasmercau/sleepoutsideteam11",
                demoLink: "https://sleepoutsideteam11.netlify.app/",
                type: "project",
            },
        ],
    },
    {
        certificate: "Web Development",
        course: [
            {
                image: "/images/courses/wd/web_backend.webp",
                courseName: "CSE-340: Web Backend Development",
                projectName: "CSE Motors",
                learnMoreLink: "https://github.com/Koigor97/cse340-web-backend-dev",
                type: "project",
            },
            {
                image: "/images/courses/wd/web_frontend_2.webp",
                courseName: "WDD-330 Web Frontend Development 2",
                projectName: "Popcorn🍿Film",
                learnMoreLink: "https://github.com/Koigor97/popcorn_film_flix",
                demoLink: "https://popcornfilm.netlify.app/",
                type: "project",
            },
            {
                image: "/images/courses/wd/cse341-webservices_1.webp",
                courseName: "CSE-341: Web Services",
                projectName: "TvShows API",
                learnMoreLink: "https://github.com/Koigor97/cse341project1",
                demoLink: "https://cse341-team13.onrender.com/",
                type: "project",
            },
            {
                image: "/images/courses/wd/cse341-webservice_2.webp",
                courseName: "CSE-341: Web Services",
                projectName: "PathwayWorldWide API",
                learnMoreLink: "https://github.com/Koigor97/cse341-project2",
                type: "project",
            },
        ],
    },
];

/**
 * Blog Details Data
 *
 * An array of blog post objects conforming to the BlogCardProps interface.
 * Initially, this array is empty and will be populated by fetching data from the API.
 */
const blogDetailsData: BlogCardProps[] = [];

/**
 * getData
 *
 * Asynchronously fetches blog post data from the '/api/blogs' endpoint.
 * On a successful fetch, the received data (assumed to be an array of blog post objects)
 * is spread and pushed into the blogDetailsData array.
 *
 * @returns {Promise<void>}
 */
async function getData(): Promise<void> {
    try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        // Append the fetched blog post data to blogDetailsData.
        blogDetailsData.push(...data);
    } catch (error) {
        console.error("Error fetching blog posts:", error);
    }
}

// Immediately invoke getData to populate blogDetailsData on module load.
getData();

export { blogDetailsData };
