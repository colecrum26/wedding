import Header from "../components/header";

export default function Travel() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrapper">
                {/* fix spacing */}
                {/* link to HH website */}
                <span>Hotel</span>
                <h1 className="header-name">HOTEL HARTNESS</h1>
                <span>Flight</span>
                <h1 className="header-name">GREENVILLE-SPARTANBURG INTL AIRPORT (GSP)</h1>
            </div>
        </div>
    );
}
