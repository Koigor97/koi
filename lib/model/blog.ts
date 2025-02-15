/**
 * @file BlogModel.ts
 * @description
 *   This file defines the Mongoose schema and model for blog posts. The BlogSchema outlines the structure
 *   of a blog document in the MongoDB database, including fields for title, slug, content, date, tags,
 *   thumbnail, and image. The schema is configured to automatically add timestamp fields (createdAt and updatedAt)
 *   to each document.
 *
 *   The Blog model is exported for use in database operations. The model is conditionally created using
 *   models.Blog || model("Blog", BlogSchema) to avoid recompiling the model if it already exists in a hot-reloading
 *   development environment.
 *
 * @example
 *   import Blog from "@/models/BlogModel";
 *   // Use Blog to create, query, update, or delete blog post documents in MongoDB.
 */

import { Schema, models, model } from "mongoose";

// Define the schema for a blog post document.
const BlogSchema = new Schema(
    {
        title: { type: "string", required: true },         // The title of the blog post.
        slug: { type: "string", required: true },          // A URL-friendly identifier for the blog post.
        content: { type: "string", required: true },       // The full content of the blog post.
        date: { type: "string", required: true },          // The publication date as a string.
        tags: { type: "array", required: true },           // An array of tags (keywords) for the blog post.
        thumbnail: { type: "string", required: true },     // URL of the thumbnail image.
        image: { type: "string", required: true },         // URL of the main image.
    },
    {
        // Enable automatic creation of `createdAt` and `updatedAt` timestamp fields.
        timestamps: true,
    }
);

// Create and export the Blog model.
// Use models.Blog if it exists to avoid recompiling the model in development.
const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
