import { ObjectId } from "mongodb";
import {connectDB} from "@/utils/database.js";

export default async function edit() {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
    return (
        <div className="p-20">
            <h4>수정 페이지</h4>
            <form action="api/post/edit" method="POST">
                <input name="title" defaultValue = {result.title}></input>
                <input name="content" defaultValue = {result.content}></input>
                <input name="_id" defaultValue={result._id.toString()} style={{display:'none'}}></input>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}