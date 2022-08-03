import './cardstyles.scss';

export default function Cards({ item: { id, title, body, image } }) {
  return (
    <div className="card" layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./image/${image}`} alt="" />
      </div>
    </div>
  );
}