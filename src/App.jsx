import {useState} from 'react'
import Stream from './components/Stream'

import './App.css'

const initalcommentList = [
  {
    uniqueNo: 1,
    name: 'Paramesh',
    commentText: 'The ending is so good!',
  },
  {
    uniqueNo: 2,
    name: 'Bhanu prakesh',
    commentText: 'The attention to detail in the animation is amazing!',
  },
  {
    uniqueNo: 3,
    name: 'Kumari',
    commentText: 'The storytelling is fantastic, simple yet impactful!',
  },
  {
    uniqueNo: 4,
    name: 'Nageswararao',
    commentText: 'The soundtrack perfectly complements the animation!',
  },
]

const App = () => {
  const [searchinput, setSearchinput] = useState('')

  const [commentsList, setCommentsList] = useState(initalcommentList)

  const onDeletecomments = uniqueNo => {
    const filtercomments = commentsList.filter(
      eachComment => eachComment.uniqueNo !== uniqueNo,
    )
    setCommentsList(filtercomments)
  }

  const onChangeSearchInput = event => {
    setSearchinput(event.target.value)
  }

  const SearchResult = commentsList.filter(eachcomments =>
    eachcomments.name.toLowerCase().includes(searchinput.toLowerCase()),
  )

  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-elements-container">
          <img
            src="https://assets.ccbp.in/frontend/hooks/nxt-player-logo-img.png"
            alt="nxt player logo"
            className="logo"
          />
        </div>
      </div>
      <div className="video-player-container">
        <video
          src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/static-website/big_buck_bunny_crujfx.mp4"
          controls
          width="100%"
          className="video-player"
        />
        <h1 className="video-title">Big Buck Bunny</h1>
        <p className="video-stats">8,100,195 views - May 29, 2008</p>
        <hr className="horizontal-line" />
      </div>
      <div className="comments-container">
        <div className="comments-header">
          <p className="comments-title">Comments</p>
          <input
            type="search"
            placeholder="Search comments..."
            value={searchinput}
            onChange={onChangeSearchInput}
            className="search-input"
          />
        </div>
        <ul className="comments-list">
          {SearchResult.map(eachComment => (
            <Stream
              key={eachComment.uniqueNo}
              commentDetails={eachComment}
              onDeletecomments={onDeletecomments}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
