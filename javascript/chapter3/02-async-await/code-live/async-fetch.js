function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);

    await delay(1000);
    console.log("delay 함수 이후 코드 실행");
  } catch (err) {
    console.error(err);
    console.log("catch 블록 내 코드 실행");
  }
}

fetchTodo();
