import VideoList from "../Components/VideoList";
import SearchBar from "../Components/SearchBar";
import {useState} from "react";
import VIDEOS from './../videos.json';


const Home = () => {

    const [videos, setVideos] = useState(VIDEOS);
    const [filteredVideos, setFilteredVideos ] = useState(VIDEOS);

    const handleSearchVideo = (results) => {
        setFilteredVideos(results);
    };

    return (
        <>
            <SearchBar videos={videos} onSearchVideo={handleSearchVideo} />
            <VideoList videos={filteredVideos} />
        </>
    );

};

export default Home;