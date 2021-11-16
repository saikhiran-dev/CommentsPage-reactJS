import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {comments} = props
  const {id, name, comment, isLiked, initialClassName, date} = comments
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClass = isLiked ? 'button active' : 'active'
  const imageLikeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="user-time-container">
            <p className="user-name">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="user-comment">{comment}</p>
        </div>
      </div>

      <div className="buttons-container">
        <div className="like-container">
          <img src={imageLikeUrl} alt="like" className="like-image" />
          <button className={likeTextClass} type="button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDeleteComment}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>

      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
