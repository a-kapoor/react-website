import './App.css';
import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';
import Blog from './blog/Blog';
import Header from './header/Header';
import Footer from './footer/Footer';
import BlogItem from './blog/blog-item/BlogItem';
import BlogIndex from './blog/blog-index/BlogIndex';

function App() {
    return (
        <main class="dark:bg-gray-800 font-mono bg-white relative h-screen">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
                <Route path='/blog' element={<Blog />}>
                    <Route index="true" element={<BlogIndex />} />
                    <Route path=":blogId" element={<BlogItem />} />
                </Route>
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
