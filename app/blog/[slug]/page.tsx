/**
 * @file BlogArticlePage.tsx
 * @description
 *   This file defines the BlogArticlePage component that renders the full details of a single
 *   blog post. It uses Next.js dynamic routing to retrieve the "slug" parameter from the URL and
 *   then searches for the corresponding blog post in the blogDetailsData array.
 *
 *   The component displays the blog post's main image, title, publication date, tags, content,
 *   and provides a link to return to the blog listing page.
 *
 * @usage
 *   This page is accessed via a URL such as "/blog/[slug]". For example, navigating to
 *   "/blog/understanding-monorepo" will render the blog post for "Understanding Monorepo..."
 *
 * @remarks
 *   - The component uses "use client" to ensure it runs on the client side.
 *   - It makes use of Next.js' useParams hook from next/navigation for dynamic routing.
 */

"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { blogDetailsData } from "@/lib/data/projectsData";
import { BlogCardProps } from "@/components/common/CustomCard";

/**
 * BlogArticlePage Component
 *
 * Retrieves the blog post slug from the URL, finds the corresponding blog post from the
 * blogDetailsData array, and renders its detailed view.
 *
 * If the slug is not yet available, it displays a loading message.
 * If no matching blog post is found, an error message is shown.
 *
 * @returns {JSX.Element} The rendered blog post detail page.
 */
function BlogArticlePage() {
    // Retrieve the "slug" parameter from the URL using Next.js' useParams hook.
    const { slug } = useParams();
    console.log("This is the Slug", slug);

    // Log the entire blog details data for debugging purposes.
    console.log("BlogData", blogDetailsData);

    // While the slug is not yet available (e.g., during initial render), display a loading message.
    if (!slug) {
        return <div>Loading...</div>;
    }

    // Find the blog post whose slug matches the URL parameter (ignoring case and extra spaces).
    const post: BlogCardProps | undefined = blogDetailsData.find(
        (p) => p.slug.trim().toLowerCase() === slug.toString().trim().toLowerCase()
    );

    console.log("Post", post);

    // If no matching blog post is found, render an error message.
    if (!post) {
        return <div>Blog post not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <article className="max-w-3xl mx-auto">
                {/* Display the main image of the blog post */}
                <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
                />

                {/* Render the blog post title */}
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                {/* Render the date and tags */}
                <div className="flex items-center mb-4">
                    <p className="text-gray-500 dark:text-gray-300 text-sm mr-4">
                        {new Date(post.date!).toLocaleDateString("en-US", {
                            timeZone: "UTC",
                        })}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </div>

                {/* Render the blog post content */}
                <div className="prose dark:prose-dark mb-6">
                    <p>{post.content}</p>
                </div>

                {/* Link back to the blog listing page */}
                <Link href="/blog" className="text-blue-500 dark:text-blue-400 hover:underline">
                    Back to blog
                </Link>
            </article>
        </div>
    );
}

export default BlogArticlePage;
