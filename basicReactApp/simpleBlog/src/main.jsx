import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from "./app/store.js"
import './index.css'
import { fetchUsers } from './features/users/usersSlice.jsx'
import { fetchPosts } from './features/posts/postsSlice.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={ <App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
