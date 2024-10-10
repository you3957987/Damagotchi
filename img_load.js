const dama_images = ['damagotchi.png', 'damagotchi_a.png', 'damagotchi_b.png']; // 3가지 이미지 배열

const dama_images_array = [
    { date: 1, affection: 50, trust: 30, loyalty: 40, rebellion: 10, img: 'damagotchi.png' },
    { date: 10, affection: 80, trust: 70, loyalty: 90, rebellion: 20, img: 'damagotchi_a.png' },
    { date: 30, affection: 20, trust: 10, loyalty: 30, rebellion: 70, img: 'damagotchi_b.png' }
]; // 각 스테이터스에 따른 텍스트 저장 방식

function getDamaImg(date, affection, trust, loyalty, rebellion) {
    // dialogs 배열을 순회하며 조건에 맞는 텍스트 찾기
    const dama_img = dama_images_array.find(item => 
        item.date == date &&
        item.affection == affection &&
        item.trust == trust &&
        item.loyalty == loyalty &&
        item.rebellion == rebellion
    );
    // 조건에 맞는 텍스트가 있으면 반환, 없으면 기본 텍스트 반환
    return dama_img ? dama_img.img : "<<Caution>> File_Load_Error:Unknown cause";
}
//const damagotchiImage = document.getElementById('dama_image'); // 다마고치 이미지 태그 가져오기
//damagotchiImage.src = dama_images[randomValue - 1];// 이미지 로드 js 파일에 이미지 저장