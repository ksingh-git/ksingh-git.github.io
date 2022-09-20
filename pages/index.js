import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

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
    <Layout>
      <Head>
        <title>Snippets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>This is section</section>
      <h1>Snippets</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {" "}
            <Date dateString={date} />
            <Link href={`/posts/${id}`}>
              <a>
                <h2>{title}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
