export default function MarkDownWrapper({ children }) {
  return (
    <section
      className="relative text-justify p-36 mx-36 prose prose-slate prose-xl md:prose-2xl 
      max-w-none dark:prose-invert prose-h2:underline prose-h3:underline"
    >
      {children}
    </section>
  );
}
