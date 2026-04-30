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
}