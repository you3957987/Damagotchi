const selectTexts = [
    "안녕! 나는 다마고치야.",
    "오늘 기분은 어때?",
    "나는 배가 고파!",
    "너와 함께 놀고 싶어!",
];
const talkTexts = [
    "좋은 하루 되길 바래!",
    "나는 게임을 좋아해!",
    "너는 어떤 음식을 좋아하니?",
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