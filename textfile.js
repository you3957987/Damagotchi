const levelOneTexts = [
    "안녕! 만나서 반가워!!!.",// 2
    "그래? 나도 그런데 너도 나랑 똑같구나!!",// 3
    "그래 좋아! 혹시 재미있는 놀이 알고 있어??",// 4
    "근데 혹시 요즘 왜 지루한지 알려줄 수 있어??",// 5
    "그래 좋아 같이 놀자~!",// 6
    "다음 미니게임도 너무 기대된다!!",// 7
    "그래 나도 너무 재미있었어~", // 8
    "그럼 같이 간단한 간식먹으면서 쉴래?", // 9 = 먹이주기
    "나도 너무 힘들었어.. 근데 너 진짜 게임 잘하더라..!!", // 10 = 칭찬하기
    "달달한게 떙기는데 같이 달달한 과자 먹을래?",// 11 = 먹이주기
    "공복엔 사과가 좋다는데 같이 과일 먹을래?",// 12 = 먹이주기
    "그럼 당연하지! 다음에도 같이 놀자",// 13 = 칭찬하기 후 대답.
    "당연하지!",// 14 = 먹이주기, 칭찬하기 이후 공통 대답
    "흠.. 아직 넌 어린것 같아",// 15 = 다시 미니게임으로 돌아가기
    "맞아 너는 성장하고 있어!",// 16 = 미니게임 끝나고 중간기로 넘어가기
    "그래 조금더 같이 놀자!!",// 17 = 다시 미니게임 파트로 넘어가기
    "",// 18 = 
    "그래 같이 새로운 것을 해보자!",// 19 = 중간기 넘어가는 선택지
    ""// 20 = 
]; // 레벨 1 단계 일자진행 텍스트




const talkTexts = [
    "응애~~",
    "밥줘~~",
    "뿌앵 ㅜㅜㅜㅜㅜㅜ",
];

//날짜 호감도 신뢰도 충성심 반항심

const dialogs = [
    { date: 1, affection: 50, trust: 30, loyalty: 40, rebellion: 10, text: "오늘은 첫날이야! 너를 믿고 싶어." },
    { date: 10, affection: 80, trust: 70, loyalty: 90, rebellion: 20, text: "지금 우린 꽤 좋은 팀이야!" },
    { date: 30, affection: 20, trust: 10, loyalty: 30, rebellion: 70, text: "이제는 좀 다르게 생각해야겠어." }
]; // 각 스테이터스에 따른 텍스트 저장 방식

// 상태 값을 받아서 텍스트를 리턴하는 함수
function getDialogText(date, affection, trust, loyalty, rebellion) {
    // dialogs 배열을 순회하며 조건에 맞는 텍스트 찾기
    const dama_text = dialogs.find( item => 
        item.date == date &&
        item.affection == affection &&
        item.trust == trust &&
        item.loyalty == loyalty &&
        item.rebellion == rebellion
    );
    // 조건에 맞는 텍스트가 있으면 반환, 없으면 기본 텍스트 반환
    return dama_text ? dama_text.text : "<<Caution>> File_Load_Error:Unknown cause";
}

//const result = getDialogText(10, 75, 65, 85, 15);
//document.getElementById('talkText').innerText = result;; // "지금 우린 꽤 좋은 팀이야!"