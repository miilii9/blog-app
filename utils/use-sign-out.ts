
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const useSignOut = () => {
  const router = useRouter();
  deleteCookie("token");
  router.push("/login");
};
