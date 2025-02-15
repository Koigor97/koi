/**
 * @file ImageBox.tsx
 * @description
 *   This file defines the ImageBox component, which displays an image inside a styled Card.
 *   It leverages Next.js' Image component for optimized image loading and performance.
 *
 *   The component is designed to showcase a portfolio image of the author, Koigor.
 *   An optional `className` prop can be passed to apply additional custom styling to the Card.
 *
 * @example
 *   // Basic usage of ImageBox with custom styling:
 *   <ImageBox className="my-custom-class" />
 *
 * @remarks
 *   Ensure that the image file exists at /public/images/portfolio-img.webp. The width and height
 *   provided are used by Next.js for image optimization and layout calculations.
 */

import Image from "next/image";
import { Card } from "../ui/card";

/**
 * ImageBox Component
 *
 * Renders a Card containing an image. The image is loaded using Next.js' Image component,
 * which provides built-in optimization features such as responsive resizing and lazy loading.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Optional additional class names for custom styling.
 * @returns {JSX.Element} The rendered ImageBox component.
 */
function ImageBox({ className }: { className?: string }) {
    return (
        <Card className={className}>
            {/* Render the portfolio image with specified dimensions and styling */}
            <Image
                src="/images/portfolio-img.webp"
                alt="Photo of Koigor, the author"
                width={6240}
                height={4160}
                className="rounded-xl h-full object-cover object-center"
            />
        </Card>
    );
}

export default ImageBox;
