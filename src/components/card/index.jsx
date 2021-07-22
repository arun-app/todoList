import './card.css';


const Card = (props) => {    return (
        
        <div className="col-md-4 p-3">
            <div className="card">
                <img src={props.imgSrc}></img>
                <h4>{props.title}</h4>
                <p className="card-content-align">{props.content}</p><br />
            </div>
        </div>
        
    )
}
export default Card;