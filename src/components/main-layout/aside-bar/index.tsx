import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

async function getAllUSerData() {
  const res = await fetch("http://localhost:3000/api/user");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function AsideBar() {
  const userData = await getAllUSerData();

  return (
    <div className="p-5">
      <nav className={cn("flex flex-col  space-y-4")}>
        {userData.map((user: any, index: number) => (
          <Link
            key={index}
            href={`/user/${user?.id}`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {user.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
