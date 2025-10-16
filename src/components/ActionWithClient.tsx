"use client";

import React, { useState } from "react";
import { actionCalledClient } from "@/actions/action-called-client";
import { ERROR_MESSAGES } from "@/constants";
import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Box from "@/components/Box";

const ActionWithClient = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<(keyof typeof ERROR_MESSAGES)[]>([]);

  const onChangeInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);
    const { name, email } = info;
    const newErrors: (keyof typeof ERROR_MESSAGES)[] = [];
    if (name === "") {
      newErrors.push("empty_name");
    }
    if (email === "") {
      newErrors.push("empty_email");
    }
    if (newErrors.length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    const res = await actionCalledClient(name, email);
    setLoading(false);
    if (res.success) {
      router.push("/static-rendering");
    } else {
      setErrors(res.errors);
    }
  };
  return (
    <Box>
      <h2>Action With Client</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <input
          type="text"
          name="name"
          className="border"
          value={info.name}
          onChange={onChangeInfo}
        />
        <input
          type="email"
          name="email"
          className="border"
          value={info.email}
          onChange={onChangeInfo}
        />
        {errors.map((error) => (
          <p key={error} className="text-red-500 text-sm">
            {ERROR_MESSAGES[error]}
          </p>
        ))}
        <button type="submit" className="border" disabled={loading}>
          {loading ? "Loading..." : "Create"}
        </button>
      </form>
    </Box>
  );
};

export default ActionWithClient;
