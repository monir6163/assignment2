export const revalidate = 0;
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
export default async function Home() {
  const studentsData = await getStudentData();
  return (
    <main className="flex min-h-screen flex-col px-2">
      <StudentList studentsData={studentsData} />
    </main>
  );
}
