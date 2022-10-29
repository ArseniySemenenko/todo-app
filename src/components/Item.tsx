import React, {useState} from 'react';
import {IPost} from "../models";

interface IProps{
    post: IPost,
    number: number,
    del: (id:number) => void,
}

function Item({post , number , del} : IProps) {

    const [done , setDone] = useState(false);

    return (
        <div className="flex justify-between items-center mt-5 p-10 border text-xl rounded-[20px] border-gray-400">
            <div>
                <strong>{number}. {post.title}</strong>
                <p>{post.body}</p>
            </div>
            <div>
                <input
                    type="checkbox"
                    className="mr-5"
                    checked={done}
                    onChange={() => {
                        setDone(!done);
                    }}
                />
                <button
                    onClick={() => {
                        del(post.id);
                    }}
                >Delete</button>
            </div>
        </div>
    );
}

export default Item;