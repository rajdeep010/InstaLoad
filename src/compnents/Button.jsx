import '../styles/button.scss'

const Button = ({url}) => {
    return (
        <>
            <a className='download_button' href={url} target='_blank'>
                Download
            </a>
        </>
    )
}

export default Button