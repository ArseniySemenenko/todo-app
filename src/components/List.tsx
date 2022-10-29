import React from 'react';
import {IPost} from "../models";
import Item from "./Item";

interface IProps{
    posts: IPost[],
    title:string,
    del: (id:number) => void,
}

function List( {posts , title , del} : IProps) {
    return (
        <div className="">
            <h1 className="mt-10 text-3xl text-center font-bold">{title}</h1>
            <div className="mt-10">
                {
                    posts.map((post , index) => <Item del={del} post={post} number={index+1}/> )
                }
            </div>
        </div>
    );
}

export default List;