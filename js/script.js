// 뒤로가기 버튼 클릭 시 동작
document.getElementById('backButton').addEventListener('click', () => {
    // 오버레이 활성화
    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');

    // 1초 후에 현재 창을 닫고 che_calcul2.html 열기
    setTimeout(() => {
        window.open('https://yoonys213.github.io/measurement-uncertainty-site/che_calcul2.html', '_blank'); // 새 창에서 열기
        window.close(); // 현재 창 닫기
    }, 1000); // 애니메이션 시간과 동일하게 설정
});
