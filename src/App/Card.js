import './Card.css';
import './Card';

export default function Card({ name, date, time, number }) {
  return (
    <div className='card'>
      <h3 className="first-Name">{name}</h3>
      <p className='date'>Date: {date}</p>
      <p className='time'>Time: {time}</p>
      <p className='number-of-guests'>Number Of Guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}
