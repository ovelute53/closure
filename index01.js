const useState = (초깃값) => {
  let 상태 = 초깃값;
  debugger;

  function 읽기() {
    debugger;
    return 상태;
  }

  function 쓰기(새값) {
    debugger;
    상태 = 새값;
  }

  return [읽기, 쓰기];
};
const [읽기, 쓰기] = useState(0);
// const 읽기 = 배열[0]
// const 쓰기 = 배열[1]

console.log(읽기());
쓰기(읽기() + 1);
console.log(읽기());
