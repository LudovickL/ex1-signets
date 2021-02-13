import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete></Entete>
        <section className="contenuPrincipal">
          <ListeSignets></ListeSignets>
        </section>
        <button>+</button>
    </div>
  );
}
