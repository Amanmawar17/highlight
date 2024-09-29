import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}