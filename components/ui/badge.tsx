/**
 * @file Badge.tsx
 * @description
 *   This file defines the Badge component, a reusable UI element used to display small labels or tags.
 *   It leverages the "class-variance-authority" (cva) library to manage and compose CSS class variants
 *   based on the badge "variant" (e.g., default, secondary, destructive, outline). The component applies
 *   default styling and variant-specific styles while allowing additional class names to be passed in.
 *
 * @example
 *   <Badge variant="secondary">Example Badge</Badge>
 *
 * @remarks
 *   The component is built using React and Tailwind CSS classes. The `cn` utility function is used to
 *   conditionally merge class names.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * badgeVariants
 *
 * A class variance authority (cva) instance that defines the base styling and variant styles for the Badge component.
 * - Base classes: Provide the fundamental styling for layout, typography, and focus behavior.
 * - Variants: Define style modifications for each badge variant (default, secondary, destructive, outline).
 * - defaultVariants: Sets the default variant to "default" if no variant is specified.
 */
const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

/**
 * BadgeProps interface
 *
 * Extends the standard HTML div attributes along with VariantProps provided by cva for the badgeVariants.
 * This interface defines the props that can be passed to the Badge component.
 */
export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

/**
 * Badge Component
 *
 * Renders a styled badge element that can display a label or tag.
 * It applies base styles from the badgeVariants cva instance and allows customization via the
 * `variant` prop and additional class names through `className`.
 *
 * @param {BadgeProps} props - The properties for the Badge component.
 * @returns {JSX.Element} The rendered badge element.
 */
function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
