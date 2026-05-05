
import {useState} from 'react';
import VideoList from "./Components/VideoList";

const VIDEOS = [
    {
        id: 1,
        title: "House of rising sun",
        url: "https://www.youtube.com/watch?v=sXYIxJScSik&list=RDsXYIxJScSik&start_radio=1",
        cover: "https://i.ytimg.com/vi/sXYIxJScSik/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDsgzCJ39WZAs6l-IpG4_mMLNFWVQ"
    },
    {
        id: 2,
        title: "How to learn react",
        url: "https://www.youtube.com/watch?v=1mjlM_RnsVE&list=RD1mjlM_RnsVE&start_radio=1",
        cover: "https://i.ytimg.com/vi/1mjlM_RnsVE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBxBScDqh1pH3XN3d_kP3JQG0WrJg"
    }
];

const App = () => {

    let [videos, setVideos] = useState(VIDEOS);

  return (
    <>
        <h2>Poz</h2>
        <VideoList videos={videos} />
    </>
  );
}

export default App;
