function openNewPage(event, url, buttonId) {
    // 클릭한 버튼의 위치 계산
    const button = document.getElementById(buttonId);
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2; // 버튼의 가운데 X 좌표
    const centerY = rect.top + rect.height / 2; // 버튼의 가운데 Y 좌표

    // 오버레이 위치 설정
    const overlay = document.getElementById('overlay');
    overlay.style.left = `${centerX}px`;
    overlay.style.top = `${centerY}px`;

    // 모든 버튼의 텍스트 숨기기
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.add('hide-text');
    });

    // 선택된 버튼의 텍스트만 보이게 하기
    button.classList.remove('hide-text');

    // 오버레이 활성화
    overlay.classList.add('active');

    // 1초 후에 새 페이지로 이동
    setTimeout(() => {
        window.location.href = url; // 현재 창에서 새 페이지로 이동
    }, 1000); // 애니메이션 시간과 동일하게 설정
}

function goBack() {
    window.history.back(); // 이전 페이지로 이동
}
