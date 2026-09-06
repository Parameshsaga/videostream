import './index.css'

const Stream = props => {
  const {commentDetails, onDeletecomments} = props
  const {name, commentText, uniqueNo} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''

  const onDelete = () => {
    onDeletecomments(uniqueNo)
  }
  return (
    <div>
      <li className="list-item">
        <div className="intial-and-comment-container">
          <p className="initial">{initial}</p>
          <div className="name-and-comment-container">
            <p className="name-text">{name}</p>
            <p className="comment-text">{commentText}</p>
          </div>
        </div>

        <button type="button" className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
            alt="cross"
            className="delete-img"
          />
        </button>
      </li>
      <hr className="horizontal-line" />
    </div>
  )
}

export default Stream
