import Signet from "./Signet";
import tabSignet from './data/signet.json';

export default function ListeSignets(props) {
    return(
        <div className="listeSignets">
            {tabSignet.map(sign => 
                <Signet id={sign.id} titre={sign.titre} couleur={sign.couleur} date={sign.date} 
            />)}
        </div>
    )
}