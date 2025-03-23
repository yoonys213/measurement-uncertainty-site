// 뒤로가기 버튼 클릭 시 동작
document.getElementById('backButton').addEventListener('click', () => {
    // 오버레이 활성화
    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');

    // 1초 후에 che_calcul2.html로 이동
    setTimeout(() => {
        window.location.href = 'che_calcul2.html'; // che_calcul2.html로 이동
    }, 1000); // 애니메이션 시간과 동일하게 설정
});
