import { Link } from 'react-router-dom'

const BlogItem = ({ image, title, description, date }) => {
  return (
    <div className='blog-item'>
      <div className='blog-item-image'>
        <img src={image} alt='' />
      </div>
      <div className='blog-content'>
        <p className='date'>{date}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to='/'>Learn More</Link>
      </div>
    </div>
  )
}

export default BlogItem
