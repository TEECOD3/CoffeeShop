import { forwardRef, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../Lib/Utils";

const inputVariants = cva(
  "mx-auto p-2 capitalize border-blue-400 bg-white border-[3px] rounded-md inline-flex focus:border-coffee-100outline-none w-[100%]",
  {
    variants: {
      variant: {
        default:
          "bg-[#EAEAEA] text-black bg-white focus:outline-coffee-100 active:outline-coffee-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  inputs?: {};
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputs, className, variant } = props;
  return (
    <input
      ref={ref}
      autoComplete="off"
      {...inputs}
      className={cn(inputVariants({ className, variant }))}
    />
  );
});

export default Input;
