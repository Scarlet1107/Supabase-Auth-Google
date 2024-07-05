"use client";

import { supabase } from "@/utils/supabase";
import { redirect } from "next/navigation";

export default function Home() {
  // const signIn = async () => {
  //   const res = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       redirectTo: `http://localhost:3000/auth/callback`,
  //     },
  //   });
  //   console.log(res);
  // };

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    console.log("data = ", data);
    console.log("error = ", error);
  };

  return (
    <main className="p-24">
      <div>Welcome to my page!</div>
      <button
        className="bg-blue-500 hover:bg-blue-600 rounded"
        onClick={() => signIn()}
      >
        ログイン！
      </button>
    </main>
  );
}
