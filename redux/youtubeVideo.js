
function upvoteYoutubeVideo () {
  return {
    type: 'UPVOTE_YOUTUBE_VIDEO',
  }
}

function downvoteYoutubeVideo () {
  return {
    type: 'DOWNVOTE_YOUTUBE_VIDEO',
  }
}

const initialState = {
  title: '',
  viewCount: 0,
  votes: {
    up: 0,
    down: 0
  }
}

function youtubeVideoReducer (youtubeVideo = initialState, action) {
  switch (action.type) {
    case 'UPDATE_YOUTUBE_VIDEO_TITLE':
      return {
        ...youtubeVideo,
        title: action.payload
      }
    case 'UPVOTE_YOUTUBE_VIDEO': {
      const {payload} = action;
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes,
          up: youtubeVideo.votes.up + 1
        }
      }
    }
    case 'DOWNVOTE_YOUTUBE_VIDEO':
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes,
          down: youtubeVideo.votes.down + 1
        }
    }

    default:
      return youtubeVideo
  }
}

module.exports = youtubeVideoReducer;