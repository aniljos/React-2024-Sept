import { useEffect } from "react";

export function useTitle(title = "React App"){

    useEffect(()=> {

        const defaultTitle = document.title;
        document.title = title;

        return () => {
            document.title = defaultTitle;
        }
    }, [])
}