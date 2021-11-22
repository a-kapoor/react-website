import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import { StackContext } from '../../StackContext';
import React from 'react';
import Breadcrumb from '../../breadcrumb/Breadcrumb';
import MyCodeBlock from '../../my-code-block/MyCodeBlock';
import { dracula } from "react-code-blocks";

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

    const props = {
        blogItem: {
            "title": "Creating a simple breadcrumb using reactjs",
            "date": "11/26/2021",
            "writer": "Andy",
            "body": [{
                "type": "text",
                "content": "this is the first paragraph of the blog"
            }, {
                "type": "text",
                "content": "this is the second paragraph of the, you gussed it right, same blog"
            }, {
                "type": "code",
                "content": {
                    code: 'function () {\n   console.log(\'ello World\');\n}',
                    language: 'text',
                    showLineNumbers: true,
                    startingLineNumber: 1,
                    theme: dracula
                }
            }, {
                "type": "text",
                "content": "this is the ending of the blog"
            }]
        }
    }

    let blogList = props.blogItem.body.map((item, index) => {
        let cotent;
        switch (item.type) {
            case "text":
                cotent = <p>item.content</p>;
                break;
            case "code":
                cotent = <MyCodeBlock data={item.content}/>
                break;
        }
        return cotent;
    });

    return (
        <div>
            <Breadcrumb stack={React.useContext(StackContext).stack} />
            <div class="flex relative z-20 items-center">
                <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div class="flex flex-col">
                        <p class="text-3xl my-6 text-center dark:text-white">
                            {props.blogItem.title}
                        </p>
                        {blogList}
                    </div>
                </div>
            </div>
        </div>
    )
}


