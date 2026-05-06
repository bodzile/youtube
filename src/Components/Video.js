import {useParams} from "react-router-dom";
import VIDEOS from "./../videos.json";

const Video = () => {

    const { id } = useParams();
    const currentVideo = VIDEOS.find((video) => video.id === Number(id));

    if(!currentVideo) {
        return (
            <p>This video does not exist.</p>
        );
    }

    return (
        <>
            <p>{currentVideo.title}</p>
            <img src={currentVideo.cover} alt=""/>
        </>
    );
};

export default Video;