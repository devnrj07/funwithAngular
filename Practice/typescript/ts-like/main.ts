import {Like} from './like';



let likes = new Like(10,true)
likes.toggleLike()
console.log(`Likes : ${likes.likes} && Status : ${likes.selected}`)

