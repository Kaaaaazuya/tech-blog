import { env } from "@/env";

export default function Home() {
  const url = env.DEBUG_URL;

  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Hello World</h1>
          <p className="text-sm text-gray-500">{url}</p>
        </div>
      </div>
    </main>
  );
}
