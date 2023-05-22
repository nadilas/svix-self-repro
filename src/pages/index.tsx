import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEndpoints } from "svix-react";

const Home: NextPage = () => {
  const { data, loading } = useEndpoints();
  if (!data || loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Loading <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
        </div>
      </main>
    );
  }
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <pre className="text-white">{JSON.stringify(data, null, "  ")}</pre>
      </main>
    </>
  );
};

export default Home;
