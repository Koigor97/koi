/**
 * @file Logo.tsx
 * @description
 *   The Logo component renders the website's logo as an image wrapped in a clickable link.
 *   When clicked, it navigates the user to the home page ("/"). This component leverages Next.js's
 *   optimized Image component for efficient image loading and the Link component for client-side navigation.
 *
 * @example
 *   // Example usage:
 *   <Logo className="custom-logo-class" />
 *
 * @remarks
 *   Ensure that the logo image exists at "/public/images/koi-logo.png".
 */

import Link from "next/link";
import Image from "next/image";

/**
 * Logo Component
 *
 * Renders a clickable logo that directs the user to the home page. An optional className prop
 * can be provided to apply additional styling to the container div.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Optional additional CSS class names for the container.
 * @returns {JSX.Element} The rendered Logo component.
 */
function Logo({ className }: { className?: string }) {
    return (
        <div className={className}>
            {/* Navigation link to home page */}
            <Link href="/">
                {/* Optimized image display for the logo */}
                <Image
                    src="/images/koi-logo.png"
                    alt="Koi's logo"
                    width={234}
                    height={150}
                />
            </Link>
        </div>
    );
}

export default Logo;
