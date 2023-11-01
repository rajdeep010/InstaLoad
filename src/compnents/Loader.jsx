import HashLoader from "react-spinners/HashLoader";
import '../styles/loader.scss'

const override = {
    display: "block",
    margin: "2rem auto",
    borderColor: "red",
};

const Loader = () => {
    return (
        <div className="load_box">
            <HashLoader
                className='load_spinner'
                color="#6745d7"
                size={50}
                cssOverride={override}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader