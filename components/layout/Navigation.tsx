/**
 * @file Navigation.tsx
 * @description
 *   The Navigation component renders the website's navigation header. It combines the Logo
 *   and ResponsiveNav components into a single layout, ensuring that the logo and the navigation
 *   menu are properly aligned and spaced. This header is typically displayed at the top of the page.
 *
 * @example
 *   <Navigation />
 *
 * @remarks
 *   The component uses Tailwind CSS classes for responsive styling and spacing.
 */

import Logo from "../common/Logo";
import ResponsiveNav from "../common/Nav";

/**
 * Navigation Component
 *
 * Renders the header of the website by placing the Logo on the left and the responsive navigation
 * menu on the right. The layout adjusts spacing based on screen size using Tailwind CSS utility classes.
 *
 * @returns {JSX.Element} The rendered Navigation header.
 */
function Navigation() {
    return (
        <div className="flex items-center justify-between pt-2 mb-3 md:mb-5">
            {/* Render the Logo component with responsive width */}
            <Logo className="w-12 md:w-14" />
            {/* Render the responsive navigation menu */}
            <ResponsiveNav />
        </div>
    );
}

export default Navigation;
