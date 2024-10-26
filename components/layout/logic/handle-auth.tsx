"use client";
import { useEffect } from "react";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";

const HandleAuth = () => {
  const cookies = getCookies();
  const router = useRouter();

  useEffect(() => {
    if (!cookies?.token) {
      router.push("/login");
    }
  });

  return null;
};

export default HandleAuth;
