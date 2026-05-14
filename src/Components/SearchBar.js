
const SearchBar = ({videos, onSearchVideo}) => {
    return (
        <form>
            <label htmlFor="search">Search</label>
            <input id="search" type="search" name="search" onInput={e => SearchVideoByName(e.currentTarget.value, videos, onSearchVideo)} />
        </form>
    );
}

const SearchVideoByName = (name, videos, onSearchVideo) => {

    videos.forEach((video) => {
        name=name.toLowerCase();
        video.title=video.title.toLowerCase();

        if(video.title.includes(name))
            onSearchVideo(old => [...old, video]);
    });
};

export default SearchBar;
