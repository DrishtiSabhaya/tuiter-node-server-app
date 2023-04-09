import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   topic: String, username: String, verified: Boolean,
                                   handle: String, time: String, image: String,
                                   title: String,
                                   tuit: String,
                                   liked: Boolean, likes: Number, dislikes: Number, replies: Number, retuits: Number
                               }, {collection: 'tuits'});
export default schema;