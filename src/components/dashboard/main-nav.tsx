import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary text-gray-400 active: text-primary"
      >
        Home
      </Link>
      <Link
        href="/user/1"
        className="text-sm font-medium -colors text-gray-400 hover:text-primary active: text-primary"
      >
        Users List
      </Link>
    </nav>
  );
}
