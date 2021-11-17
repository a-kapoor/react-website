import { useLocation } from 'react-router-dom';
import {
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import BlogItem from './blog-item/BlogItem';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import React, { useState } from 'react';
import { StackContext } from '../StackContext';

export default function Blog() {
    console.log('Blog function')
    return (
        <div>
            <Outlet />
        </div>
    )
}


