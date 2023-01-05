import "./Card.css"

const Card= ({name, about, fees, duration, fulltime, degree, campus, university, location}) => {
    // console.log(location)
    return (
        <>
            <div className="card">
                <h3 className="header">{name}</h3>
                <p className="about">{about}</p>
                <h6 className="fees" >{fees} EUR/year</h6>
                <h6 className="duration" >{duration} years</h6>
                <p className="details">{degree}/{fulltime===true ? "Full-time" : "Part-time"}/{campus}</p>
                <div className="university">
                    <p className="university-name">{university}</p>
                    <p className="location">{location[0].each}</p>
                </div>
            </div>
        </>
    )
}

export default Card;