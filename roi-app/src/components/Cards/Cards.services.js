import './cardstyles.scss';

export default function Cards({ item: { id, title, description ,price} }) {
  return (
    <div className="card" layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
        <p>{price}</p>
        </div>
      </div>
    </div>
  );
}