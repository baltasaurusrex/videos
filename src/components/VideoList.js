import React from "react";
import VideoItem from "./VideoItem";

// class VideoList extends React.Component {
//     render() {
//         const {videos} = this.props

//         const renderedList = videos.map((video, index) => {
//             return <VideoItem key={index} video={video}/>
//         })

//         return (
//             <div>
//                 {renderedList}
//             </div>
//         )
//     }
// }

const VideoList = ({videos, handleVideoSelect}) => {
    console.log("rendering list of videos...");

    const renderedList = videos.map((video) => {
        return <VideoItem handleVideoSelect={handleVideoSelect} key={video.id.videoId} video={video}/>;
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;