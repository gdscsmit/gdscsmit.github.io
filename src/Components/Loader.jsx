import loader from "../../public/loader-unscreen.gif"

export const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-item">
                <img src={loader} alt="loader" />
            </div>
        </div>
    )
}
