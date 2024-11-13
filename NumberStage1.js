const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 300, y: 350, width: 40, height: 40, speed: 5 };  // 플레이어 초기 설정
let score = 0;  // 점수
let fallingNumbers = [];  // 떨어지는 숫자 저장
let fallingBlock = [];  // 떨어지는 블록 저장
let keys = {};  // 키 입력 상태 저장
let gameDuration = 5000; // 게임 진행 시간 (30초) 30000
let startTime; // 게임 시작 시간

const heartImage = new Image();
heartImage.src = 'heart.png'; 

const wallImage = new Image();
wallImage.src = 'wall.jpg';

const playerImage = new Image();
playerImage.src = 'player_da.png';

function drawScoreAndTime() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';

    // 점수를 오른쪽 상단에 그리기
    ctx.fillText(`Score: ${score}`, 20, 30);

    // 시간을 화면 상단 중앙에 그리기
    let elapsedTime = (Date.now() - startTime) / 1000;
    ctx.fillText(`Time: ${elapsedTime.toFixed(2)}`, canvas.width / 2 - 50, 30);
}

function createFallingNumber() {
    let operations = ['+', '-', '*', '/'];  // 가능한 연산 목록
    let operationNumber = Math.floor(Math.random() * 10) + 1 ;  // 랜덤으로 연산 선택
    let operation;
    if(operationNumber <= 8){
        operation = operations[0];
    }
    else if(operationNumber == 9){
        operation = operations[2];
    }
    else if(operationNumber == 10){
        operation = operations[3];
    }
    let number = {
        value: Math.floor(Math.random() * 10) + 1,  // 1-10 사이의 숫자 (0을 피하기 위해 +1)
        x: Math.random() * (canvas.width - 30),
        y: 0,
        speed: 2 + Math.random() * 3,  // 떨어지는 속도
        width: 30,
        height: 30,
        operation: operation  // 연산 추가
    };
    fallingNumbers.push(number);
}

// 블록 객체 생성 (부호 없음)
function createBlock() {
    let block = {
        x: Math.random() * (canvas.width - 150),
        y: 0,
        speed: 2 + Math.random() * 1.5,  // 떨어지는 속도
        width: 150,
        height: 20
    };
    fallingBlock.push(block);
}

// 키 입력 이벤트 처리
document.addEventListener('keydown', function (e) {
    keys[e.key] = true;
});
document.addEventListener('keyup', function (e) {
    keys[e.key] = false;
});

// 플레이어 이동 처리
function movePlayer() {
    if (keys['a'] && player.x > 0) player.x -= player.speed; // 좌측 이동
    if (keys['d'] && player.x + player.width < canvas.width) player.x += player.speed; // 우측 이동
    if (keys['w'] && player.y > 0) player.y -= player.speed; // 위쪽 이동
    if (keys['s'] && player.y + player.height < canvas.height) player.y += player.speed; // 아래쪽 이동
}

// 충돌 감지 함수
function isColliding(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

// 게임 업데이트
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 지우기

    // 플레이어 그리기
    if (playerImage.complete){
        ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
    }

    // 떨어지는 숫자 그리기 및 업데이트
    for (let i = 0; i < fallingNumbers.length; i++) {
        let number = fallingNumbers[i];

        if (heartImage.complete){
            ctx.drawImage(heartImage, number.x, number.y, number.width, number.height);
        }

        // 숫자 값 표시 (부호 포함)
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(`${number.operation}${number.value}`, number.x + 10, number.y + 25);

        // 숫자 위치 업데이트
        number.y += number.speed;

        // 플레이어와 충돌 시 점수 계산
        if (isColliding(player, number)) {
            switch (number.operation) {
                case '+':
                    score += number.value;
                    break;
                case '-':
                    
                    score -= number.value;
                    
                    break;
                case '*':
                    score *= number.value;  // 곱셈
                    break;
                case '/':
                    score = Math.floor(score / number.value);  // 나눗셈
                    break;
            }
            fallingNumbers.splice(i, 1);
            i--;
        }

        // 숫자가 화면을 벗어나면 제거
        if (number.y > canvas.height) {
            fallingNumbers.splice(i, 1);
            i--;
        }
    }

    // 떨어지는 블록 그리기 및 업데이트
    for (let i = 0; i < fallingBlock.length; i++) {
        let block = fallingBlock[i];

        // 블록 그리기

        if (wallImage.complete){
            ctx.drawImage(wallImage, block.x, block.y, block.width, block.height);
        }


        // 블록 위치 업데이트
        block.y += block.speed;

        if (isColliding(player, block)) {
            if(score < 20){
                score = 0;
            }else{
                score -= 20;
            }
            
            fallingBlock.splice(i, 1);
            i--;
        }

        // 블록이 화면을 벗어나면 제거
        if (block.y > canvas.height) {
            fallingBlock.splice(i, 1);
            i--;
        }
    }

    // 플레이어 이동 처리
    movePlayer();

    // 주기적으로 새로운 숫자와 블록을 생성
    if (Math.random() < 0.03) {
        createFallingNumber();
    }
    if (Math.random() < 0.025) {
        createBlock();
    }

    // 게임 시간 체크
    if (Date.now() - startTime < gameDuration) {
        requestAnimationFrame(update);
        drawScoreAndTime();  
    }else {
        drawScoreAndTime();
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        if(score > 5) { //클리어 조건 체크
            ctx.fillText("Good game!", canvas.width / 2 - 75, canvas.height / 2);

            setTimeout(function() {
                // 실행할 코드
                fade_out("levelone.html");
            }, 3000);

        } else {
            ctx.fillText("Bad Game!", canvas.width / 2 - 75, canvas.height / 2);
            setTimeout(function() {
                // 실행할 코드
                fade_out("levelone.html");
            }, 3000);
        }
    }
}

window.onload = function() {
            fade_in();
        };


// 게임 시작
startTime = Date.now(); // 게임 시작 시간 기록
update();  // 게임 업데이트 시작
