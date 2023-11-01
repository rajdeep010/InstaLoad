import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <>
            <div className="footer_box">

                <div className="about_me">
                    Made with ❤️ by Rajdeep
                </div>

                <div className="icons">
                    <a href="https://github.com/rajdeep010" target="_blank">
                        <BsGithub className='icon' />
                    </a>
                    <a href="https://www.linkedin.com/in/rajdeep-mallick-6477381b4/" target="_blank">
                        <BsLinkedin className='icon' />
                    </a>
                    <a href="https://www.instagram.com/rajdeepmallick010" target="_blank">
                        <BsInstagram className='icon' />
                    </a>
                </div>

            </div>
        </>
    )
}

export default Footer