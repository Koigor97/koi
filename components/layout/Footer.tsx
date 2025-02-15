/**
 * @file Footer.tsx
 * @description
 *   The Footer component renders a simple footer section for the website. It displays a horizontal
 *   separator with a thick bottom border and a centered copyright notice that dynamically shows
 *   the current year.
 *
 * @example
 *   // Use the Footer component at the bottom of your layout
 *   <Footer />
 *
 * @remarks
 *   - The current year is obtained using JavaScript's Date API.
 *   - Tailwind CSS classes are used for styling.
 */

import React from 'react';

/**
 * Footer Component
 *
 * Renders the website's footer with a bottom border and a centered text displaying the copyright
 * notice with the current year.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer() {
    return (
        <div className="mt-10 border-b-8 border-secondary1">
            {/* Render the copyright notice with the current year */}
            <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
        </div>
    );
}

export default Footer;
