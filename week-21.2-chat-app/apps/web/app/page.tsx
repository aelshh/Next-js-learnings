"use client";

import TextInput from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextInput placeholder="Room Code" size="big"></TextInput>
        <button
          onClick={() => {
            router.push("/chat/123");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
