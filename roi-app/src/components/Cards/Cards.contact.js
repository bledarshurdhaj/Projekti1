import './cardstyles-contacts.scss';

import Foto34 from '../../foto/foto34.png';

export default function Cards({ item: {  name, lastname, biography, jobtitle, image } }) {
  return (
    <div className="home">
    <div className="foto">
    <div className="img">
    <img src={Foto34}></img>
    </div>
    <div className="h1">
    <h1>Kur arsyeja që buzëqesh n'mëngjes është rrjeti i shpejtë</h1>
    </div>
    </div>
    <div className="card">
      <div>
        <h1>{name}</h1>
        <h1>{lastname}</h1>
        <p>{biography}</p>
        <h3>{jobtitle}</h3>
        
      </div>
      
    </div>
    </div>
  );
}