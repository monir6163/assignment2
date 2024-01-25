async function getStudentData() {
  try {
    const res = await fetch(`${process.env.VERCEL_URL}/api/v1/user`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data["data"];
  } catch (e) {
    console.log("e");
  }
}
import StudentList from "@/components/StudentLists/StudentList";
import { unstable_cache } from "next/cache";
export default async function Home() {
  unstable_cache("home", { revalidate: 1 });
  const studentsData = await getStudentData();
  return (
    <main className="flex min-h-screen flex-col px-2">
      <StudentList studentsData={studentsData} />
    </main>
  );
}
