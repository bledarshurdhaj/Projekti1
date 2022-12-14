import './cardstyles-services.scss';

export default function Cards({ item: { id, title, description ,price} }) {
  return (

    
    <div className="card" >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
        <h3>{price}</h3>
        </div>
        
        <button class="button-88" role="button">BUY</button>
      </div>
    </div>

  );
}
