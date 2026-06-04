// 최소 스크립트: 푸터의 연도를 자동으로 표시합니다.
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    // 버튼 아이콘 변경
    const btn = document.getElementById("darkBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀️";
    } else {
        btn.innerText = "🌙";
    }

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark'); // 다크모드 저장
    } else {
        localStorage.setItem('theme', 'light'); // 라이트모드 저장
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
};