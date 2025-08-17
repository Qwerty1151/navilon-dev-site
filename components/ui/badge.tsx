import * as React from "react";

const badgeVariants = {
  default: "bg-primary hover:bg-primary/80 text-primary-foreground",
  secondary: "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
  destructive: "bg-destructive hover:bg-destructive/80 text-destructive-foreground",
  outline: "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variantClasses = badgeVariants[variant];
  
  return (
    <div 
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses} ${className}`} 
      {...props} 
    />
  );
}

export { Badge, badgeVariants };