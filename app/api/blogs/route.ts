import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Blog from "@/lib/model/blog";

// fetching the blog post
export const GET = async () => {
    try {
        // connect to the database
        await connect();
        const blogs = await Blog.find();

        // return all blogs
        return new NextResponse(JSON.stringify(blogs), {status: 200});
    } catch (error: unknown) {
        if (error instanceof Error) {
            return new NextResponse("Error fetching blog: " + error.message, { status: 500 });
        }
        return new NextResponse("Error fetching blog", { status: 500 });
    }
}
