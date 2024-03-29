"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <h2
      className="text-4xl font-extrabold cursor-pointer"
      onClick={() => router.push("/")}
    >
      Eiden 🏖️
    </h2>
  );
};

export default Logo;
