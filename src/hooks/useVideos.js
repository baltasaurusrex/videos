import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    console.log("default search: ", defaultSearchTerm);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        console.log("user searched for: " + term);

        const res = await youtube.get("/search", {
            params: {
                q: term
            }
        });   

        console.log("raw res doc: ", res);
        
        setVideos(res.data.items);
    };

    return [ videos, search ]
};

export default useVideos;