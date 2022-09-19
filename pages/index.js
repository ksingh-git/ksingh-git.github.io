import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Snippets</h1>

      <main className="flex flex-col items-center justify-center flex-grow px-0 py-20">
        <h1 className="title">
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <p>
                  <Date dateString={date} />
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-solid border-t flex items-center justify-center h-24 w-full">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  );
}
