import Head from "next/head";
import { Inter } from "next/font/google";
import AboutSection from "@/components/AboutSection";
import profilePic from "../public/me.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = {
    name: "Patiphol pussawong",
    description:
      "A junior developer who is currently working as a full-stack developer. He is a motivated, enthusiastic person and experienced in Programming. He is very passionate in technologies and wants to apply his IT knowledge to solve problems and implement projects. Experienced in React, Angular, NodeJS.",
  };
  return (
    <>
      <Head>
        <title>Patiphol Pussawong - Fullstack developer</title>
        <meta
          name="description"
          content="Hi! I'm Patiphol Pussawong a junior fullstack developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-screen place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <AboutSection
          name={data.name}
          description={data.description}
          pictureSrc={profilePic}
        />
        <a href="https://www.linkedin.com/in/patipholpus/" target={"_blank"}>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "#0077b5" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </a>
      </main>
    </>
  );
}
