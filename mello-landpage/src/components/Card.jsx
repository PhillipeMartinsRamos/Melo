import './Card.css'

const Card = ({title}) => {
  return (
    <div className='card'>
        <div className="face-um">
           <h2>{title}</h2>
        </div>
        <div className="face-dois">

        </div>
    </div>
  )
}

export default Card