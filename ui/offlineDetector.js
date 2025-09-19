import {useEffect, useState} from "react";

export default ({children}) => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        // set initial state
        setIsOnline(navigator.onLine);

        const goOnline = () => setIsOnline(true);
        const goOffline = () => setIsOnline(false);

        window.addEventListener("online", goOnline);
        window.addEventListener("offline", goOffline);

        return () => {
            window.removeEventListener("online", goOnline);
            window.removeEventListener("offline", goOffline);
        };
    }, []);

    if (!isOnline) {
        return (<div className="flex h-screen items-center justify-center bg-gray-100 text-center">
            <div className="p-6 rounded-2xl shadow-lg bg-white">
                <h1 className="text-2xl font-bold">You are offline</h1>
                <p className="text-gray-600 mt-2">Check your internet connection and try again.</p>
            </div>
        </div>);
    }

    return <>{children}</>;
}
