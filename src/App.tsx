import React, {useState} from 'react';
import Item from "./components/Item";
import {IPost} from "./models";
import List from "./components/List";
import Form from "./components/Form";

function App() {

    const [posts , setPosts] = useState<IPost[]>([
        {id: 0 , title:'JavaScript' , body:"Programming landuage"}
    ]);

    function createItem(title:string , body:string , e:any){
        e.preventDefault();

        const newItem = {
            id: Date.now(),
            title:title,
            body: body,
        }

        setPosts([...posts , newItem]);
    }

    function deleteItem(id:number){
        setPosts(posts.filter(post => post.id !== id));
    }

  return (
    <div className="container max-w-2xl ml-auto mr-auto">
        <Form createPost={createItem}/>
        <List del={deleteItem} posts={posts} title={"ToDo"}/>
    </div>
  );
}

export default App;
