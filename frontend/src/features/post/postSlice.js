import { createSlice } from "@reduxjs/toolkit";

const posts = localStorage.getItem("posts")

const initialState = {
  posts: posts ? JSON.parse(posts) : [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload)
      localStorage.setItem("posts", JSON.stringify(state.posts))
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
      localStorage.setItem("posts", JSON.stringify(state.posts))
    },
    updatePost: (state, action) => {
      const { id, title, body } = action.payload
      const existingPost = state.posts.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.body = body
      }
      localStorage.setItem("posts", JSON.stringify(state.posts))
    },
  },
})

export const { addPost, deletePost, updatePost } = postsSlice.actions
export default postsSlice.reducer



