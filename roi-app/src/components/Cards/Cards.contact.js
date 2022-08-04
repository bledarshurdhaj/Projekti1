import './cardstyles-contacts.scss';

import Foto34 from '../../foto/foto34.png';

export default function Cards({ item: { name, lastname, biography,kontakti, telephone,telephonee, } }) {
  return (
    <div className="homee">
      <div className="foto">
        <div className="img">
          <img src={Foto34}></img>
        </div>
        <div className="h1">
          <h1>Kur arsyeja që buzëqesh n'mëngjes është rrjeti shumë i shpejtë!!</h1>
        </div>
      </div>
      <div className="card">
        <div>
          <h1>{name}</h1>
          <p>{lastname}</p>
          <p>{biography}</p>
          <h4>{kontakti}</h4>
          <h3>{telephone}</h3>
          <h3>{telephonee}</h3>
          

        </div>

      </div>
    </div>
  );
}