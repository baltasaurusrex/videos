
import "./VideoItem.css";
import React from "react";
// for html entities
import he from "he";

// class VideoItem extends React.Component {
//     render() {
//         console.log(this.props.video)
//         return (
//             <div>Video Item</div>
//         )
//     }
// }

const VideoItem = ({video, handleVideoSelect}) => {
    console.log("rendered video: ");
    console.log(video);

    const handleClick = (video) => {
        console.log("user clicked this video: ");
        console.log(video);

        handleVideoSelect(video);
    }

    return (
        <div onClick={() => {handleClick(video)}} className="video-item item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <div className="header">
                    {he.decode(video.snippet.title)}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;