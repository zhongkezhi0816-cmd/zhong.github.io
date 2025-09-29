
// // パスワード設置
// const correct = "zkz0816"; // 
// let p = prompt("パスワードを入力してください:");
// if (p !== correct) {
//   document.body.innerHTML = "<h2>パスワードが違います</h2>";
//   throw new Error("unauthorized");
// }



// スキルセクションアニメション効果
document.addEventListener('DOMContentLoaded', function () {
  // すべてのプログレスバー要素を取得
  const progressBars = document.querySelectorAll('.skill-progress');
  const percentageTexts = document.querySelectorAll('.skill-percentage');

  // Intersection Observerを作成して要素がビューポートに入るかを検出
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 要素がビューポートに入った時にアニメーションを開始
        startSkillAnimation();
        observer.unobserve(entry.target); // アニメーションは1回のみ実行
      }
    });
  }, { threshold: 0.5 }); // 要素の50%がビューポートに入った時にトリガー

  // スキルコンテナを監視
  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    observer.observe(skillsContainer);
  }

  // スキルアニメーション関数
  function startSkillAnimation() {
    progressBars.forEach((bar, index) => {
      const targetWidth = bar.getAttribute('data-width'); // 目標パーセンテージを取得
      const percentageText = percentageTexts[index];

      let currentWidth = 0;
      const duration = 1500; // アニメーション時間（ミリ秒）
      const increment = targetWidth / (duration / 16); // 1フレームごとに増加する幅

      const animate = () => {
        currentWidth += increment;
        if (currentWidth < targetWidth) {
          bar.style.width = currentWidth + '%';
          percentageText.textContent = Math.round(currentWidth) + '%';
          requestAnimationFrame(animate);
        } else {
          bar.style.width = targetWidth + '%';
          percentageText.textContent = targetWidth + '%';
        }
      };

      // 各スキルバーのアニメーションを遅延開始して、ずらした効果を創造
      setTimeout(animate, index * 300);
    });
  }
});



// GitHubリンクとモーダルの機能
document.addEventListener('DOMContentLoaded', function () {
  const githubLink = document.getElementById('github-link');
  const modal = document.getElementById('loading-modal');
  const closeModal = document.getElementById('close-modal');

  if (githubLink && modal) {
    // GitHubリンククリック時の処理
    githubLink.addEventListener('click', function (e) {
      e.preventDefault(); // デフォルトのリンク動作をキャンセル
      modal.style.display = 'block';
    });

    // 閉じるボタンの処理
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // モーダル外クリックで閉じる
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    });
  }
});




