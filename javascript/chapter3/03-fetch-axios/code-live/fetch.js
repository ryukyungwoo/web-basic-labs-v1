// GET
async function get() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

get();

// POST : 데이터를 서버에 전송
async function post() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "Hello",
      body: "body",
    }),
  });
  const data = await res.json();
  console.log(data);
}

post();
