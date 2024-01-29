async function getStudentData() {
  try {
    const data = await prisma.User.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return data;
  } catch (e) {
    console.log("e");
  }
}
import StudentList from "@/components/StudentLists/StudentList";
import prisma from "@/libs/Prisma";
export default async function Home() {
  const studentsData = await getStudentData();
  return (
    <main className="flex min-h-screen flex-col px-2">
      <StudentList studentsData={studentsData} />
    </main>
  );
}
