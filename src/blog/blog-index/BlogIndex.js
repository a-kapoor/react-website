import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import BlogCard from '../blog-card/BlogCard';
import { StackContext } from '../../StackContext';

export default function BlogIndex() {
    let location = useLocation();
    const [blogs, setBlogs] = useState([]);
    // let blogs = [];

    const baseUrl = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_BASE_API_SERVER :
        process.env.REACT_APP_BASE_API_LOCAL;

    React.useEffect(() => {
        fetch(`${baseUrl}/api/blogs`)
            .then(res => res.json())
            .then(
                (result) => {
                    setBlogs(result);
                },
                (error) => {
                    throw new Error(error);
                }
            )
    }, []);

    React.useContext(StackContext).stack = [];
    const obj = {
        name: "Blog",
        pathname: "/blog"
    };
    React.useContext(StackContext).stack.push(obj);

    const renderBlogCards = (blogs) => {
        if (Array.isArray(blogs) && blogs.length > 0) {
            return blogs.map(item => {
                const path = `/blog/${item.card.id}`;
                console.log(path)
                return (
                    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <Link to={path} state={{ fromBlogIndex: true }}>
                            <BlogCard data={item.card}></BlogCard>
                        </Link>
                    </div>
                )
            });
        }
    }

    return (
        <div>
            <div class="flex relative z-20 items-center min-h-full">
                <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div class="flex flex-col">
                        <p class="text-3xl my-6 text-center dark:text-white">
                            Blog
          			    </p>
                        <div class="w-full bg-white p-8 overflow-auto">
                            {/* <div class="header flex items-end justify-between mb-12">
                                <div class="title">
                                    <p class="text-4xl font-bold text-gray-800 mb-4">
                                        Lastest articles
                                    </p>
                                    <p class="text-2xl font-light text-gray-400">
                                        All article are verified by 2 experts and valdiate by the CTO
                                    </p>
                                </div>
                                <div class="text-end">
                                    <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                        <div class=" relative ">
                                            <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title" />
                                        </div>
                                        <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div> */}
                            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 overflow-auto">
                                {renderBlogCards(blogs)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


