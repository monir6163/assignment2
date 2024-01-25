import StudentList from "@/components/StudentLists/StudentList";
import prisma from "@/libs/Prisma";
import { unstable_cache } from "next/cache";
async function getStudentData() {
  // try {
  //   const res = await fetch(`${process.env.VERCEL_URL}/user`, {
  //     cache: "no-store",
  //   });
  //   const data = await res.json();
  //   return data["data"];
  // } catch (e) {
  //   console.log("e");
  // }
  const res = await prisma.User.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return res;
}
export default async function Home() {
  unstable_cache(getStudentData);
  const studentsData = await getStudentData();
  return (
    <main className="flex min-h-screen flex-col px-2">
      <StudentList studentsData={studentsData} />
    </main>
  );
}
