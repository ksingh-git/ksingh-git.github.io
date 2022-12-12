export default function MarkDownWrapper({ children }) {
  return (
    <section
      className="prose prose-2xl prose-slate 
    prose-h2:underline prose-h3:underline prose-pre:overflow-hidden 
    dark:prose-invert md:prose-2xl"
    >
      {children}
    </section>
  );
}
