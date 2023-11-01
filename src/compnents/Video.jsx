import '../styles/media.scss'


const Video = ({ mediaURL }) => {
    return (
        <>
            <video className="media_content" controls>
                <source src={mediaURL} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}

export default Video