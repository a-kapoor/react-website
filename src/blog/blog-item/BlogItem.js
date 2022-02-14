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
            "title": "Using MERN (Mongodb, Express, React, Nodejs) stack to develop a website from scratch",
            "date": "11/26/2021",
            "writer": "Andy",
            "body": [{
                "type": "text",
                "content": "Now that I've published the first working version of this website, I want to take some time to go over how it all came together. " +
                    "After all writing these articles things I'm building was the initialy motivation to start this website.<br><br>"
            }, {
                "type": "text",
                "content": "I choose the MERN (Mongodb, Express, React, Nodejs) stack because I wanted to learn all those technologies involved.  Here is a breakdown of how " +
                "I tacked this project:<br><br><strong>1)</strong> Develop the skeleton React app locally<br><br>" +
                "<strong>2)</strong> Develop Nodejs APIs locally using static data<br><br>" +
                "<strong>3)</strong> Configure Mongodb locally and make Node app connect to the database<br><br>" +
                "<strong>4)</strong> Configure docker to run the react app, node app and mongo database into individual conatainers locally<br><br>" +
                "<strong>5)</strong> Use docker-compose to run all images together locally<br><br>" +
                "<strong>6)</strong> Finally, use digitalocean to deploy the code on server and use docker-compose to build the images<br><br><br>"
            }, {
                "type": "text",
                "content": "<strong>Part 1: Creating the React app</strong>. <br><br>" +
                "The source code for the React app can be found at this <strong><a href=\'https://github.com/codewithkaps/react-website\'>Github repo</a></strong>. " +
                "At a high level the react app is structured as follows: <br><br>"
            }, {
                "type": "code",
                "content": {
                    code: '\n' +
                    '- nginx\n' + 
                    '- public\n' +
                    '- build\n' +
                    '- src\n' +
                    '   - home\n' +
                    '   - about\n' +
                    '   - breadcrumb\n' +
                    '   - my-code-block\n' +
                    '   - side-menu\n' +
                    '   - work\n' +
                    '   - blog\n' +
                    '       - blog-card\n' +
                    '       - blog-index\n' +
                    '       - blog-item\n' +
                    '   - footer\n' +
                    '\n',
                    language: 'text',
                    showLineNumbers: true,
                    startingLineNumber: 1,
                    theme: 'dracula'
                }
            }, {
                "type": "text",
                "content": "<br>The starting point of the react app is in <strong>index.js</strong> where the App component is called.<br><br>"
            }, {
                "type": "code",
                "content": {
                    code: 'ReactDOM.render(\n' +
                        '   <Router>\n'  +
                            '       <StackContext.Provider value={state}>\n' +
                                '           <App />\n' +
                            '       </StackContext.Provider>\n' +
                        '   </Router>,\n' +
                        '   document.getElementById(\'root\')\n' +
                    ')',
                    language: 'text',
                    showLineNumbers: true,
                    startingLineNumber: 1,
                    theme: 'dracula'
                }
            }, {
                "type": "text",
                "content": "<br><strong>App.js</strong> contains the skeleton structure of the app. The Header and Footer components, and " +
                    " and all the routes definition.<br><br>"
            }, {
                "type": "code",
                "content": {
                    code: 'return (\n' +
                        '   <main class=\"dark:bg-gray-800 font-mono bg-white relative h-screen\">\n' +
                        '       <Header />\n' +
                        '       <Routes>\n' +
                        '           <Route path=\'/\' element={<Home />} />\n' +
                        '           <Route path=\'/about\' element={<About />} />\n' +
                        '           <Route path=\'/work\' element={<Work />} />\n' +
                        '           <Route path=\'/blog\' element={<Blog />}>\n' +
                        '               <Route index="true" element={<BlogIndex />} />\n' +
                        '               <Route path=":blogId" element={<BlogItem />} />\n' +
                        '           </Route>\n' +
                        '       </Routes>\n' +
                        '       <Footer />\n' +
                        '   </main>\n' +
                    ')',
                    language: 'text',
                    showLineNumbers: true,
                    startingLineNumber: 1,
                    theme: 'dracula'
                }
            }, {
                "type": "text",
                "content": ""
            }]
        }
    }

    let blogList = props.blogItem.body.map((item, index) => {
        let cotent;
        switch (item.type) {
            case "text":
                cotent = <p dangerouslySetInnerHTML={{ __html: item.content }}></p>;
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
                        <p class="text-3xl my-6 dark:text-white">
                            {props.blogItem.title}
                        </p>
                        {blogList}
                    </div>
                </div>
            </div>
        </div>
    )
}


