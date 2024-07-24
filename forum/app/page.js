import { MongoClient } from "mongodb";

export default async function Home() {
  const client = await MongoClient.connect('mongodb+srv://jiseok:ljs14070327@leejiseok.1ws0w9j.mongodb.net/?retryWrites=true&w=majority&appName=leejiseok',{useNewUrlParser:true});
  const db = client.db("forum");
  db.collection('post').find();

  return (
    <div>테스트</div>
  );
}
