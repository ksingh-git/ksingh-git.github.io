import "../styles/globals.css";
import OfflineDetector from "../ui/offlineDetector";

export default function App({Component, pageProps}) {
    return <OfflineDetector><Component {...pageProps} /></OfflineDetector>;
}
