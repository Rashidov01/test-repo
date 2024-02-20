import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker";
import { MainNav } from "@/components/dashboard/main-nav";
import { Overview } from "@/components/dashboard/overview";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { Search } from "@/components/dashboard/search";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import { UserNav } from "@/components/dashboard/user-nav";
import Header from "./header";
import Footer from "./footer";
import AsideBar from "./aside-bar";

interface Props {
  children: React.ReactNode;
}

export default function MainLaout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="h-full min-h-screen">
        <div>
          <div>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
