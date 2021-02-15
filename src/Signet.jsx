import './Signet.scss';

export default function Signet(props) {
    return(
        <div className="Signet">
            <button>modifier</button>
            <img src={'images-signets/' + props.id + '.png'} alt=""/>
            <div className="info">
                <p className="titre">{props.titre}</p>
                <p className="date">{props.date}</p>
            </div>
        </div>
    )
}