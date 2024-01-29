"use server";

import { redirect } from "next/navigation";

const { default: prisma } = require("@/libs/Prisma");
const { revalidatePath } = require("next/cache");

export const createStudent = async (formData) => {
  const bodyData = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    age: parseInt(formData.get("age")),
    grade: formData.get("grade"),
    courses: formData.get("courses"),
  };

  await prisma.User.create({
    data: bodyData,
  });
  revalidatePath("/");
  redirect("/");
};
