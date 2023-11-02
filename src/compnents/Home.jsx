import { useState } from 'react'
import '../styles/home.scss'
import axios from 'axios'
import Loader from './Loader'
import Button from './Button'
import { RiDownloadCloud2Fill } from 'react-icons/ri'
import ErrorPage from './ErrorPage'


const Home = () => {
    const [URL, setURL] = useState('')
    const [loading, setLoading] = useState(false)
    const [mediaURL, setMediaURL] = useState(null)
    const [errorStatus, setErrorStatus] = useState(false)

    const { VITE_REACT_APP_API_KEY } = import.meta.env

    const options = {
        method: 'GET',
        url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
        params: {
            url: URL
        },
        headers: {
            'X-RapidAPI-Key': VITE_REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
        }
    }

    const getData = async () => {
        try {
            setLoading(true)
            const res = await axios.request(options)
            const data = res.data
            setMediaURL(data.media)

            console.log(data)

        } catch (err) {
            // console.log(err)
            setErrorStatus(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="main_container">

                <div className="about_image">

                    <div className="heading">
                        Paste Link & Download
                    </div>

                    <div className="image">
                        <img src="./load_insta.svg" alt="" />
                    </div>
                </div>

                <div className="downloader">

                    <div className="input_box">
                        <input type="text" className="link_input" value={URL} placeholder='Paste Link...' onChange={(e) => setURL(e.target.value)} />
                        <button className='btn' onClick={() => getData()}>
                            <RiDownloadCloud2Fill />
                        </button>
                    </div>

                    <div className="download_box">
                        {loading && <Loader />}
                        {errorStatus && <ErrorPage />}
                    </div>

                    {mediaURL && !loading && !errorStatus && <Button url={mediaURL} />}
                </div>

            </div>
        </>
    )
}

export default Home