/**
 * @file Button.tsx
 * @description
 *   This file defines the Button component, a reusable UI element that supports multiple variants
 *   and sizes. It leverages the "class-variance-authority" (cva) library to manage conditional CSS class
 *   names based on the provided props (variant and size). Additionally, the component supports rendering as
 *   a different element via the `asChild` prop, using Radix UI's Slot component for more flexible composition.
 *
 * @example
 *   // Default button usage
 *   <Button onClick={handleClick}>Click Me</Button>
 *
 *   // Rendering a link-styled button using asChild
 *   <Button asChild variant="link">
 *     <a href="/path">Go to Page</a>
 *   </Button>
 *
 * @remarks
 *   - The `cn` utility is used to merge and conditionally apply CSS classes.
 *   - The component is built with React and TypeScript, ensuring type safety and reusability.
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * buttonVariants
 *
 * Uses cva to define the base CSS classes and variants for the Button component.
 * Variants:
 *  - variant: Controls the visual style (default, destructive, outline, secondary, ghost, link).
 *  - size: Controls the button size (default, sm, lg, icon).
 * Default variants are set to "default" for both.
 */
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

/**
 * ButtonProps interface
 *
 * Extends the standard HTML button attributes and includes variant properties
 * defined by the buttonVariants. The `asChild` prop allows the Button component to render
 * as a different element (using the Radix UI Slot) while still applying the button styles.
 */
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

/**
 * Button Component
 *
 * Renders a styled button element with various visual variants and sizes.
 * If the `asChild` prop is true, it renders the child element (e.g., a link) while applying
 * the button styles to it. Otherwise, it renders a standard <button> element.
 *
 * @param {ButtonProps} props - The props for the Button component, including:
 *   - className: Additional CSS classes to apply.
 *   - variant: Visual variant of the button.
 *   - size: Size of the button.
 *   - asChild: Boolean flag to render as a different element.
 *   - ...props: Other button attributes.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Determine the component to render: either a Slot (if asChild is true) or a regular button.
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                // Merge the button variant classes with any additional classes.
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
