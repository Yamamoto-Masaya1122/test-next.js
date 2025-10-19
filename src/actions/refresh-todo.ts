"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const refreshTodo = async () => {
  revalidateTag("todo");
  redirect("/data-cache-1");
};
