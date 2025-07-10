import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import Create from './components/Create';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import blogsData from './data/blogs';

function App() {
  const [blogs, setBlogs] = useState(blogsData);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} />} />
            <Route path="/create" element={<Create addBlog={addBlog} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
