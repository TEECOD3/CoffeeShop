import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "../../Lib/Utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex  items-center justify-center rounded-md transition-color focus:outline-none focus:ring-2 focus:ring-coffee-100 focus:ring-offset-2 disabled:pointer-events-none disbaled:opacity-50",

  {
    variants: {
      variant: {
        default: "bg-coffee-100 text-white  hover:bg-coffee-100/80",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
        coffee:
          "bg-white text-coffee-100 hover:bg-coffee-100 hover:text-white border-2 border-coffee-100 focus:bg-coffee-200 focus:text-white",
      },
      size: {
        default: "h-10 py-6 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-3 md:h-13 md:px-6 text-sm  md:text-base xl:text-xl capitalize md:py-6 xl:py-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="mr-2 h-10 w-10 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
