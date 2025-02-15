/**
 * @file BlogCardGrid.tsx
 * @description
 *   The BlogCardGrid component is responsible for fetching blog post data from the "/api/blogs"
 *   endpoint and displaying the posts in a responsive grid layout using the CustomCard component.
 *   Each blog post is rendered as a CustomCard with its "type" set to "blog".
 *
 *   This component uses client-side data fetching via the useEffect hook and manages the fetched
 *   data with useState. The "use client" directive at the top ensures that this component is rendered
 *   on the client side.
 *
 * @example
 *   <BlogCardGrid />
 *
 * @remarks
 *   - TypeScript error suppression is used when spreading the blog data into the CustomCard component.
 *     It is recommended to replace the implicit "any" with a proper type definition for blog posts.
 */

"use client";

import { CustomCard } from "@/components/common/CustomCard";
import { useEffect, useState } from "react";

/**
 * BlogCardGrid Component
 *
 * Fetches blog posts from the "/api/blogs" API endpoint and renders them in a grid.
 * Each blog post is displayed as a CustomCard component with the type "blog".
 *
 * @returns {JSX.Element} The rendered grid of blog post cards.
 */
function BlogCardGrid() {
    // State to hold the fetched blog posts.
    const [blogs, setBlogs] = useState([]);

    // Fetch blog data once when the component mounts.
    useEffect(() => {
        /**
         * Asynchronously fetches blog post data from the API and updates the state.
         */
        async function getData() {
            try {
                const response = await fetch("/api/blogs");
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            }
        }

        getData();
    }, []);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 mt-8">
            {blogs.map((blog, idx) => (
                // Temporarily suppress TypeScript errors when passing blog data to CustomCard.
                // It is advisable to use a proper type for blog posts instead of any.
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                <CustomCard key={idx} type="blog" {...blog} />
            ))}
        </div>
    );
}

export default BlogCardGrid;
