export const revalidate = 0;

import StudentList from "@/components/StudentLists/StudentList";
import prisma from "@/libs/Prisma";
async function getStudentData() {
  try {
    // const res = await fetch(`${process.env.VERCEL_URL}api/v1/user`, {
    //   cache: "no-store",
    // });
    // const data = await res.json();
    // return data["data"];
    const res = await prisma.User.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res;
  } catch (e) {
    console.log("e");
  }
}
export default async function Home() {
  const studentsData = await getStudentData();
  return (
    <main className="flex min-h-screen flex-col px-2">
      <StudentList studentsData={studentsData} />
    </main>
  );
}
