const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('원하는 도형을 작성해주세요. ( 정사각형, 원 ) : ', figure => {
  console.log(`선택한 도형 ${figure}`);

  switch (figure) {
    case "정사각형":
      rl.question("변의 길이를 입력 해주세요.", input => {
        console.log(`입력받은 값 : ${input}`);
        console.log(`정사각형의 넓이는 : ${input * input} 입니다.` );
        rl.close();
      });
      break;
  
    case "원":
      
      break;

    default:
      break;
  }

  rl.close();
});