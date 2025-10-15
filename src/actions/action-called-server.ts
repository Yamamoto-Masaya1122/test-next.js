"use server";

import { ERROR_MESSAGES } from "@/constants";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const actionCalledServer = async (formData: FormData) => {
  try {
    const nameEntry = formData.get("name");
    const emailEntry = formData.get("email");
    const name = typeof nameEntry === "string" ? nameEntry : "";
    const email = typeof emailEntry === "string" ? emailEntry : "";

    const errors: (keyof typeof ERROR_MESSAGES)[] = [];

    if (name === "") {
      errors.push("empty_name");
    }
    if (email === "") {
      errors.push("empty_email");
    }
    if (errors.length > 0) {
      const params = new URLSearchParams();
      errors.forEach((error) => {
        params.append("errors", error);
      });
      redirect(`/call-server-action?${params.toString()}`);
    }

    await prisma.user.create({
      data: { name, email },
    });

    redirect("/static-rendering");
  } catch (error) {
    console.error(error);
    const params = new URLSearchParams({
      errors: "unexpected_error",
    });
    redirect(`/call-server-action?${params.toString()}`);
  }
};
