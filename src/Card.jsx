/* eslint-disable react/prop-types */


const Card = (props) => {
  return (
    <>
    <div className="card">
        <div className="cardimg">
            <img src={props.image} alt="" />
        </div>
        <div className="cardbody">
            <h2>{props.heading}</h2>
            <p>{props.des}</p>
            <div className="link">
            <a href={props.link}>Watch Now</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card
