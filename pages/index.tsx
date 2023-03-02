import Head from "next/head";
import { Inter } from "next/font/google";
import AboutSection from "@/components/AboutSection";
import profilePic from "../public/me.jpg";
import ContactSection from "@/components/ContactSection";

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
      <main className="grid min-h-screen place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8 gap-6">
        <AboutSection
          name={data.name}
          description={data.description}
          pictureSrc={profilePic}
        />
        <ContactSection />
        <div>Design with ❤️ by Patiphol Pussawong | © {(new Date().getFullYear())} | <a href="https://github.com/VectorXz/patiphol-dev" target={"_blank"}>Github</a></div>
      </main>
    </>
  );
}
