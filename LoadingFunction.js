function fade_in(){
	const fade_in = document.getElementById('fade_in');

    fade_in.style.opacity = '0'; // 검은색을 서서히 제거
    fade_in.style.zIndex = '9999'; // 오버레이를 맨 앞으로 이동
    setTimeout(() => {
                fade_in.style.zIndex = '-99'; // 다른 요소 뒤로 이동
            }, 1000); // 1초 후 실행
}

function fade_out(nextpage){
	const fade_out = document.getElementById('fade_out');
	const fade_in = document.getElementById('fade_in');
    fade_out.style.zIndex = '9999'; // 오버레이를 맨 앞으로 이동
    fade_out.style.opacity = '1'; // 오버레이를 검게 만들기
	setTimeout(() => {
		window.location.href = nextpage; // 다음 페이지로 이동
    }, 1000); // 1초 후에 페이지 이동
}

function good_ending_out(nextpage){
    const good_ending_out = document.getElementById('good_ending_out');
    const fade_in = document.getElementById('fade_in');
    good_ending_out.style.zIndex = '9999'; // 오버레이를 맨 앞으로 이동
    good_ending_out.style.opacity = '1'; // 오버레이를 검게 만들기
    setTimeout(() => {
        window.location.href = nextpage; // 다음 페이지로 이동
    }, 2000); // 1초 후에 페이지 이동
}

function bad_ending_out(nextpage){
    const bad_ending_out = document.getElementById('bad_ending_out');
    const fade_in = document.getElementById('fade_in');
    bad_ending_out.style.zIndex = '9999'; // 오버레이를 맨 앞으로 이동
    bad_ending_out.style.opacity = '1'; // 오버레이를 검게 만들기
    setTimeout(() => {
        window.location.href = nextpage; // 다음 페이지로 이동
    }, 2000); // 1초 후에 페이지 이동
}