// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// フォーム送信
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault(); alert('ありがとうございます！ 近日メール対応予定です。');
});

// ToDo残し（前回コードも併存）
