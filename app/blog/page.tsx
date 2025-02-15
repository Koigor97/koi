/**
 * @file DevBlogPage.tsx
 * @description
 *   This file defines the DevBlogPage component which serves as the main blog landing
 *   page for the development blog section of the application. The page includes a header
 *   with a title and summary, and it renders a grid of blog post cards using the BlogCardGrid
 *   component.
 *
 * @usage
 *   Import and use <DevBlogPage /> to display the development blog landing page.
 *
 * @remarks
 *   The component is styled with Tailwind CSS classes to ensure a responsive and modern layout.
 */

import BlogCardGrid from "@/components/layout/BlogCardGrid";

/**
 * DevBlogPage Component
 *
 * Renders the development blog landing page including a header with a title and summary,
 * followed by a grid layout of blog post cards.
 *
 * @returns {JSX.Element} The rendered development blog landing page.
 */
function DevBlogPage() {
    return (
        <div>
            {/* Header Section */}
            <div className="mt-5">
                {/* Page Title */}
                <h1 className="text-lg md:text-4xl mb-4 text-bodyText dark:text-white max-w-4xl font-bold">
                    Welcome to Dev Blog
                </h1>
                {/* Summary/Description */}
                <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-[70ch]">
                    Dive into our curated articles covering software architecture, web development,
                    real-time communication, and much more. Explore insights, tutorials, and in-depth
                    analyses to stay ahead in the ever-evolving world of technology.
                </p>
            </div>

            {/* Render the grid of blog post cards */}
            <BlogCardGrid />
        </div>
    );
}

export default DevBlogPage;
