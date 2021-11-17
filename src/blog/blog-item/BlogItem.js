import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import { StackContext } from '../../StackContext';
import React from 'react';
import Breadcrumb from '../../breadcrumb/Breadcrumb';

export default function BlogItem() {
    let location = useLocation();
    const { blogId } = useParams();
    const current = {
        name: "Item 1",
        pathname: `${location.pathname}`
    };
    const parent = {
        name: "Blog",
        pathname: "/blog"
    };
    const breadcrumbs = (React.useContext(StackContext).stack.length > 0) ? [current] : [parent, current];
    React.useContext(StackContext).stack.push(...breadcrumbs);
    return (
        <div>
            <Breadcrumb stack={React.useContext(StackContext).stack} />
            <div class="flex relative z-20 items-center">
                <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div class="flex flex-col">
                        <p class="text-3xl my-6 text-center dark:text-white">
                            This is the blog item {location.pathname}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


