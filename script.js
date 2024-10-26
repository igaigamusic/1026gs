// 接続を確認
// alert(111);

let gameInterval;
const gameSpeed = 3000; // 障害物が現れる間隔（ミリ秒）


// スタートボタンを押したら
$(".game-button-start").on("click", function () {
    // ゲームのスクリーンが表示される
    $(".game-screen").show();
    startGame(); //これがないとゲームがリセットされない
    // この下は消さない🤗
});

// EXITボタンを押したらアラートを出す
$(".game-button-exit").on("click", function () {
    if (!confirm('本当に終了しますか？')) {
        /* キャンセルの時の処理は戻る */
        return false;
    } else {
        /* OKの時の処理はゲームのスクリーンを消す */
        $(".game-screen").hide();
    }
});

// ここから障害物を動かす動きをつける（途中）
function createObstacle() {
    const gameHeight = $(".game-screen").height(); // ゲーム画面の高さを取得
    const obstacleHeight = 30; // 障害物の高さ
    const randomTop = Math.floor(Math.random() * (gameHeight - obstacleHeight)); // ランダムな高さを設定

    const $obstacle = $("<div class='obstacle'></div>"); // 新しい障害物を生成
    $obstacle.css({ top: randomTop + "px" }); // 障害物の初期位置を設定
    $(".game-screen").append($obstacle); // ゲーム画面に追加

    // 障害物を左にアニメーションで移動
    $obstacle.animate({ left: "-30px" }, 4000, "linear", function () {
        $(this).remove(); // 画面外に出たら削除
    });
}

// document.addEventListener('DOMContentLoaded', () => {
//     const cheese = document.getElementsByClassName('cheese');
//     let positionX = 50; // キャラクターの初期位置 (50% = 中央)
//     let isJumping = false;

//     // 左右キーのイベントリスナー
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'ArrowLeft') {
//             // 左矢印キーを押した場合
//             if (positionX > 0) {
//                 positionX -= 5; // 左に移動
//                 cheese.style.left = positionX + '%';
//             }
//         } else if (event.key === 'ArrowRight') {
//             // 右矢印キーを押した場合
//             if (positionX < 95) {
//                 positionX += 5; // 右に移動
//                 cheese.style.left = positionX + '%';
//             }
//         }
//     });

//     // クリックでジャンプする機能
//     document.addEventListener('click', () => {
//         if (!isJumping) {
//             isJumping = true;
//             cheese.classList.add('jump');
//             setTimeout(() => {
//                 cheese.classList.remove('jump');
//                 isJumping = false;
//             }, 500); // 500ミリ秒後にジャンプを終了
//         }
//     });
// });

