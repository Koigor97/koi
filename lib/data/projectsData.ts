import {CustomCardProps} from "@/components/common/CustomCard";

export const projects: {certificate: string, course: CustomCardProps[]}[] = [
        {
            certificate: "Web and Computer Programming",
            course: [
                {
                    image: "/images/courses/wcp/dynamic_web_fundamentals.webp",
                    courseName: "Dyanmic Web Fundamentals",
                    projectName: "Lynnwood Business Chamber",
                    learnMoreLink: "https://github.com/Koigor97/wdd231",
                    type: "project"

                },
                {
                    image: "/images/courses/wcp/programming-with-functions.webp",
                    courseName: "CSE-111: Programming With Functions",
                    projectName: "Password Manager",
                    learnMoreLink: "https://github.com/Koigor97/cse111",
                    type: "project"
                },
                {
                    image: "/images/courses/wcp/programming-with-classes.webp",
                    courseName: "CSE-210: Programming With Classes",
                    projectName: "Event Planning Console project",
                    learnMoreLink: "https://github.com/Koigor97/csharp-cse210",
                    type: "project"
                },
                {
                    image: "/images/courses/wcp/web_frontend_1.webp",
                    courseName: "WDD-231: Web Frontend Development 1",
                    projectName: "SleepOutside",
                    learnMoreLink: "https://github.com/lucasmercau/sleepoutsideteam11",
                    demoLink: "https://sleepoutsideteam11.netlify.app/",
                    type: "project"
                },
            ]
        },
        {
            certificate: "Web Development",
            course: [
                {
                    image: "/images/courses/wd/web_backend.webp",
                    courseName: "CSE-340: Web Backend Development",
                    projectName: "CSE Motors",
                    learnMoreLink: "https://github.com/Koigor97/cse340-web-backend-dev",
                    type: "project"
                },
                {
                    image: "/images/courses/wd/web_frontend_2.webp",
                    courseName: "WDD-330 Web Frontend Development 2",
                    projectName: "Popcorn🍿Film",
                    learnMoreLink: "https://github.com/Koigor97/popcorn_film_flix",
                    demoLink: "https://popcornfilm.netlify.app/",
                    type: "project"
                },
                {
                    image: "/images/courses/wd/cse341-webservices_1.webp",
                    courseName: "CSE-341: Web Services",
                    projectName: "TvShows API",
                    learnMoreLink: "https://github.com/Koigor97/cse341project1",
                    demoLink: "https://cse341-team13.onrender.com/",
                    type: "project"
                },
                {
                    image: "/images/courses/wd/cse341-webservice_2.webp",
                    courseName: "CSE-341: Web Services",
                    projectName: "PathwayWorldWide API",
                    learnMoreLink: "https://github.com/Koigor97/cse341-project2",
                    type: "project"
                },
            ]
        }
]
