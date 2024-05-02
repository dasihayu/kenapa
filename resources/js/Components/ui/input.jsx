import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full xl:w-[380px] border-b-2 border-wp px-3 py-2 text-sm bg-transparent ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
