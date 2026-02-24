// ハンバーガーメニュー
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// フォーム送信
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('予約ありがとうございます！\n24時間以内に折り返しご連絡します。');
    e.target.reset();
});

// カウンターアニメ（オプション）
