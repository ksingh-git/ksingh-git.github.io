export default function MarkDownWrapper({ children }) {
  return (
    <section
      className="prose prose-xl prose-slate relative mx-36 max-w-none p-36 text-justify 
      prose-h2:underline prose-h3:underline dark:prose-invert md:prose-2xl"
    >
      {children}
    </section>
  );
}
