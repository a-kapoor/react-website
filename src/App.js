import './App.css';
import SideMenu from './side-menu/SideMenu';
import React, { useRef, useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useRoutes,
    Outlet
} from "react-router-dom";
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';
import Blog from './blog/Blog';
import Footer from './footer/Footer';
import BlogItem from './blog/blog-item/BlogItem';
import BlogIndex from './blog/blog-index/BlogIndex';

function App() {

    let [toggleSideMenu, setToggleSideMenu] = useState(false);

    const handleSideMenuClick = (value) => {
        setToggleSideMenu(!value);
    };

    const renderSideMenu = () => {
        if (toggleSideMenu) {
            return <SideMenu handleSideMenuClick={handleSideMenuClick} />
        }
    }

    return (
        <main class="dark:bg-gray-800 font-mono bg-white relative h-screen">
            {renderSideMenu()}
            <header class="h-24 sm:h-32 flex items-center z-30 w-full">
                <div class="container mx-auto px-6 flex items-center justify-between">
                    <div class="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
                    <img alt="logo" src={process.env.PUBLIC_URL + '/logo2.png'} class="h-28" />
                    </div>
                    <div class="flex items-center">
                        <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                            <label href="#" class="py-2 px-6 flex hover:text-black">
                                <Link to="/" state={{ fromDashboard: true }}>Home</Link>
                            </label>
                            <label href="#" class="py-2 px-6 flex hover:text-black">
                                <Link to="/about" state={{ fromDashboard: true }}>About</Link>
                            </label>
                            <label href="#" class="py-2 px-6 flex hover:text-black">
                                <Link to="/work" state={{ fromDashboard: true }}>Work</Link>
                            </label>
                            <label href="#" class="py-2 px-6 flex hover:text-black">
                                <Link to="/blog" state={{ fromDashboard: true }}>Blog</Link>
                            </label>
                        </nav>
                        <button class="lg:hidden flex flex-col ml-4" onClick={() => setToggleSideMenu(!toggleSideMenu)}>
                            {/* <button class="lg:hidden flex flex-col ml-4"> */}
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                        </button>
                    </div>
                </div>
            </header>
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
