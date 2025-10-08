import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Blog from './pages/Blog';
import AboutPage from './pages/AboutPage';
import BlogPostPage from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id" element={<BlogPostPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/project/:id" element={<BlogPostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;