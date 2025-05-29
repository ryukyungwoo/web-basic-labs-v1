// axios : 써드 파티 라이브러리
import axios from "axios";

//get
async function get() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res.data.body);
}

get();

// POST : 데이터를 서버에 전송
async function post() {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    userId: 1,
    title: "Hello",
    body: "body",
  });
  console.log(res.data);
}

post();
