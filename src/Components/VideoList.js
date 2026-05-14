
const VideoList = ({videos}) => {

    return (
        <div>
            {videos.map( ({id, title, url, cover}) =>{
              return (
                <a href={url} target="_blank" key={id} rel="noreferrer">
                    <img src={cover} alt=""/>
                    <h4>{title}</h4>
                </a>
              );
            })}
        </div>
    );
};

export default VideoList;