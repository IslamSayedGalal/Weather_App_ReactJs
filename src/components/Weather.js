import React from "react"

const Weather =(props)=>{
        return(
            <div className="info">
                {
                    props.data.tempreature &&
                    <p className="info-key">Tempreature : 
                        <span className="info-value">{props.data.tempreature}</span>
                    </p>
                }
                {
                    props.data.city &&
                    <p className="info-key">City : 
                        <span className="info-value">{props.data.city}</span>
                    </p>
                }
                {
                    props.data.country &&
                    <p className="info-key">Country : 
                        <span className="info-value">{props.data.country}</span>
                    </p>
                }
                {
                    props.data.humidity &&
                    <p className="info-key">Humidity : 
                        <span className="info-value">{props.data.humidity}</span>
                    </p>
                }
                {
                    props.data.description &&
                    <p className="info-key">Description : 
                        <span className="info-value">{props.data.description}</span>
                    </p>
                }
                {
                    props.data.error && 
                    <p className="info-key">Error : 
                        <span className="info-value">{props.data.error}</span>
                    </p>
                }
            </div>
        )
}

export default Weather;