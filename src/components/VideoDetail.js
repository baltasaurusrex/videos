import React from "react";
import he from "he";

// class VideoDetail extends React.Component {
//     render() {
//         return (
//             <div>video detail</div>
//         )
//     }
// }

const VideoDetail = ({video}) => {
    console.log("video in VideoDetail: ");
    console.log(video);

    if (!video) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{he.decode(video.snippet.title)}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;


