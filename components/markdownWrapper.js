export default function MarkDownWrapper({children}) {
    return (<section
        className="prose prose-2xl prose-slate max-w-none
    prose-h2:underline prose-h3:underline prose-pre:overflow-hidden dark:prose-invert "
    >
        {children}
    </section>);
}
