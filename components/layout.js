import Head from "next/head";
import {useEffect, useState} from "react";

export default function Layout({children}) {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        setTheme(localStorage.getItem("theme"));
    });
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="https://img.icons8.com/emoji/256/four-leaf-clover.png"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Whisper&family=Allura&display=swap"
                    rel="stylesheet"
                />
                <script
                    src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
                    type="module"
                ></script>
            </Head>
            <div id="main-container" className={theme}>
                {children}
            </div>
        </>
    );
}
