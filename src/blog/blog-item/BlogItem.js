import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { StackContext } from '../../StackContext';
import Breadcrumb from '../../breadcrumb/Breadcrumb';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import blog from '../content/blog1.txt';
import rehypeRaw from 'rehype-raw'

export default function BlogItem() {
    let location = useLocation();
    const [markdown, setMarkdown] = useState([]);
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

    fetch(blog)
        .then(r => r.text())
        .then(text => {
            setMarkdown(text)
        });

    return (
        <div>
            <Breadcrumb stack={React.useContext(StackContext).stack} />
            <div class="flex relative z-20 items-center">
                <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div class="flex flex-col">
                        {<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}></ReactMarkdown>}
                    </div>
                </div>
            </div>
        </div>
    )
}


