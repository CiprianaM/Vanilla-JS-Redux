const store = require('./redux');
const {changeCount, double, halve} = require ('./redux/count')
const {addFavoriteThing, removeFavoriteThing} = require ('./redux/favoriteThings');
const {updateYoutubeVideoTitle, upvoteYoutubeVideo, downvoteYoutubeVideo} = require ('./redux/youtubeVideo');
console.log(changeCount)

store.dispatch({type: 'CHANGE_COUNT', payload: 22})
store.dispatch(changeCount(-53))
store.dispatch(addFavoriteThing('puppers'))
store.dispatch(addFavoriteThing('kittens'))
store.dispatch(addFavoriteThing('more puppers'))
store.dispatch(addFavoriteThing('snackies'))
store.dispatch(removeFavoriteThing('kittens'))
store.dispatch(double())
store.dispatch(downvoteYoutubeVideo())
store.dispatch(downvoteYoutubeVideo())
store.dispatch(upvoteYoutubeVideo())
store.dispatch(updateYoutubeVideoTitle('Its a wonderful life'))
store.dispatch(halve())