// 接続を確認
// alert(111);

// let gameInterval;
// const gameSpeed = 3000; // 障害物が現れる間隔（ミリ秒）


// // スタートボタンを押したら
// $(".game-button-start").on("click", function () {
//     // ゲームのスクリーンが表示される
//     $(".game-screen").show();
//     startGame(); //これがないとゲームがリセットされない
//     // この下は消さない🤗
// });

// // EXITボタンを押したらアラートを出す
// $(".game-button-exit").on("click", function () {
//     if (!confirm('本当に終了しますか？')) {
//         /* キャンセルの時の処理は戻る */
//         return false;
//     } else {
//         /* OKの時の処理はゲームのスクリーンを消す */
//         $(".game-screen").hide();
//     }
// });

// // ゲームの開始処理
// function startGame() {
//     // 既存の障害物を削除し、タイマーをリセット
//     $(".game-screen .obstacle").remove();
//     clearInterval(gameInterval);

//     // 一定間隔で障害物を生成
//     gameInterval = setInterval(createObstacle, gameSpeed);
// }

// // ここから障害物を動かす動きをつける
// function createObstacle() {
//     const gameHeight = $(".game-screen").height(); // ゲーム画面の高さを取得
//     const obstacleHeight = 30; // 障害物の高さ
//     const randomTop = Math.floor(Math.random() * (gameHeight - obstacleHeight)); // ランダムな高さを設定

//     const $obstacle = $("<div class='obstacle'></div>"); // 新しい障害物を生成
//     $obstacle.css({ top: randomTop + "px" }); // 障害物の初期位置を設定
//     $(".game-screen").append($obstacle); // ゲーム画面に追加

//     // 障害物を左にアニメーションで移動
//     $obstacle.animate({ left: "-30px" }, 4000, "linear", function () {
//         $(this).remove(); // 画面外に出たら削除
//     });
// }

// // ここからチーズを動かす動きをつける
// const step = 10; // チーズボールの移動距離
// let x = 10;
// let y = 10;

// $(document).keydown(function (event) {
//     const gameArea = $(".game-screen")[0].getBoundingClientRect();
//     const ballRect = $(".cheese")[0].getBoundingClientRect();

//     switch (event.key) {
//         case "ArrowUp":
//             if (y > 0) {
//                 y -= step;
//                 $(".cheese").css("top", `${y}px`);
//             }
//             break;
//         case "ArrowDown":
//             if (y + ballRect.height < gameArea.height) {
//                 y += step;
//                 $(".cheese").css("top", `${y}px`);
//             }
//             break;
//         case "ArrowLeft":
//             if (x > 0) {
//                 x -= step;
//                 $(".cheese").css("left", `${x}px`);
//             }
//             break;
//         case "ArrowRight":
//             if (x + ballRect.width < gameArea.width) {
//                 x += step;
//                 $(".cheese").css("left", `${x}px`);
//             }
//             break;
//     }
// });

// let gameInterval;
// const gameSpeed = 3000; // 障害物が現れる間隔（ミリ秒）
// let collisionCheckInterval; // 衝突検出のタイマーID
// const step = 10; // チーズボールの移動距離
// let x = 10;
// let y = 10;

// // スタートボタンを押したら
// $(".game-button-start").on("click", function () {
//     $(".game-screen").show();
//     startGame();
// });

// // EXITボタンを押したら
// $(".game-button-exit").on("click", function () {
//     if (!confirm('本当に終了しますか？')) {
//         return false;
//     } else {
//         $(".game-screen").hide();
//         clearInterval(gameInterval);
//         clearInterval(collisionCheckInterval); // 衝突検出を停止
//         $(".game-screen .obstacle").remove();
//     }
// });

// // ゲームの開始処理
// function startGame() {
//     $(".game-screen .obstacle").remove();
//     clearInterval(gameInterval);
//     clearInterval(collisionCheckInterval);

//     // 障害物を生成するインターバルを開始
//     gameInterval = setInterval(createObstacle, gameSpeed);
//     // 衝突をチェックするインターバルを開始
//     collisionCheckInterval = setInterval(checkCollision, 50);
// }

// // 障害物の生成
// function createObstacle() {
//     const gameHeight = $(".game-screen").height();
//     const obstacleHeight = 30;
//     const randomTop = Math.floor(Math.random() * (gameHeight - obstacleHeight));

//     const $obstacle = $("<div class='obstacle'></div>");
//     $obstacle.css({ top: randomTop + "px" });
//     $(".game-screen").append($obstacle);

//     // 障害物を左にアニメーションで移動
//     $obstacle.animate({ left: "-30px" }, 4000, "linear", function () {
//         $(this).remove();
//     });
// }

// // チーズボールを動かす
// $(document).keydown(function (event) {
//     const gameArea = $(".game-screen")[0].getBoundingClientRect();
//     const ballRect = $(".cheese")[0].getBoundingClientRect();

//     switch (event.key) {
//         case "ArrowUp":
//             if (y > 0) {
//                 y -= step;
//                 $(".cheese").css("top", `${y}px`);
//             }
//             break;
//         case "ArrowDown":
//             if (y + ballRect.height < gameArea.height) {
//                 y += step;
//                 $(".cheese").css("top", `${y}px`);
//             }
//             break;
//         case "ArrowLeft":
//             if (x > 0) {
//                 x -= step;
//                 $(".cheese").css("left", `${x}px`);
//             }
//             break;
//         case "ArrowRight":
//             if (x + ballRect.width < gameArea.width) {
//                 x += step;
//                 $(".cheese").css("left", `${x}px`);
//             }
//             break;
//     }
// });

// // 衝突検出関数
// function checkCollision() {
//     const cheese = $(".cheese")[0].getBoundingClientRect();

//     $(".obstacle").each(function () {
//         const obstacle = $(this)[0].getBoundingClientRect();

//         // チーズボールと障害物が重なっているかをチェック
//         if (
//             cheese.left < obstacle.left + obstacle.width &&
//             cheese.left + cheese.width > obstacle.left &&
//             cheese.top < obstacle.top + obstacle.height &&
//             cheese.top + cheese.height > obstacle.top
//         ) {
//             gameOver();
//         }
//     });
// }

// // ゲームオーバー処理
// function gameOver() {
//     clearInterval(gameInterval); // 障害物生成を停止
//     clearInterval(collisionCheckInterval); // 衝突検出を停止
//     alert("Game Over!"); // ゲームオーバーのメッセージを表示
//     $(".game-screen").hide(); // ゲーム画面を非表示
// }


let gameInterval;
const gameSpeed = 3000; // 障害物が現れる間隔（ミリ秒）
let collisionCheckInterval; // 衝突検出のタイマーID
const step = 10; // チーズボールの移動距離
let x = 0;
let y;

// スタートボタンを押したら
$(".game-button-start").on("click", function () {
    $(".game-screen").show();
    resetCheesePosition(); // スタート時にチーズボールの位置をリセット
    startGame();
});

// EXITボタンを押したら
$(".game-button-exit").on("click", function () {
    if (!confirm('本当に終了しますか？')) {
        return false;
    } else {
        $(".game-screen").hide();
        clearInterval(gameInterval);
        clearInterval(collisionCheckInterval);
        $(".game-screen .obstacle").remove();
        resetCheesePosition(); // 終了時にチーズボールの位置をリセット
    }
});

// ゲームの開始処理
function startGame() {
    $(".game-screen .obstacle").remove();
    clearInterval(gameInterval);
    clearInterval(collisionCheckInterval);

    // 障害物を生成するインターバルを開始
    gameInterval = setInterval(createObstacle, gameSpeed);
    // 衝突をチェックするインターバルを開始
    collisionCheckInterval = setInterval(checkCollision, 50);
}

// チーズボールを動かす
$(document).keydown(function (event) {
    const gameArea = $(".game-screen")[0].getBoundingClientRect();
    const ballRect = $(".cheese")[0].getBoundingClientRect();

    switch (event.key) {
        case "ArrowUp":
            if (y > 0) {
                y -= step;
                $(".cheese").css("top", `${y}px`);
            }
            break;
        case "ArrowDown":
            if (y + ballRect.height < gameArea.height) {
                y += step;
                $(".cheese").css("top", `${y}px`);
            }
            break;
        case "ArrowLeft":
            if (x > 0) {
                x -= step;
                $(".cheese").css("left", `${x}px`);
            }
            break;
        case "ArrowRight":
            if (x + ballRect.width < gameArea.width) {
                x += step;
                $(".cheese").css("left", `${x}px`);
            }
            break;
    }

    // ゴール到達チェック
    checkGoal();
});

// 障害物の生成
function createObstacle() {
    const gameHeight = $(".game-screen").height();
    const obstacleHeight = 30;
    const randomTop = Math.floor(Math.random() * (gameHeight - obstacleHeight));

    const $obstacle = $("<div class='obstacle'></div>");
    $obstacle.css({ top: randomTop + "px" });
    $(".game-screen").append($obstacle);

    // 障害物を左にアニメーションで移動
    $obstacle.animate({ left: "-30px" }, 4000, "linear", function () {
        $(this).remove();
    });
}

// ゴール到達のチェック
function checkGoal() {
    const cheese = $(".cheese")[0].getBoundingClientRect();
    const goal = $(".goal")[0].getBoundingClientRect();

    // チーズボールとゴールが重なっているかをチェック
    if (
        cheese.left < goal.left + goal.width &&
        cheese.left + cheese.width > goal.left &&
        cheese.top < goal.top + goal.height &&
        cheese.top + cheese.height > goal.top
    ) {
        gameWin(); // ゴールしたら勝利処理
    }
}

// ゲーム勝利の処理
function gameWin() {
    clearInterval(gameInterval); // 障害物生成を停止
    clearInterval(collisionCheckInterval); // 衝突検出を停止
    alert("ゴール！！！"); // 勝利メッセージを表示
    $(".game-screen").hide(); // ゲーム画面を非表示
    resetCheesePosition(); // 勝利時にチーズボールの位置をリセット
}

// 衝突検出関数
function checkCollision() {
    const cheese = $(".cheese")[0].getBoundingClientRect();

    $(".obstacle").each(function () {
        const obstacle = $(this)[0].getBoundingClientRect();

        // チーズボールと障害物が重なっているかをチェック
        if (
            cheese.left < obstacle.left + obstacle.width &&
            cheese.left + cheese.width > obstacle.left &&
            cheese.top < obstacle.top + obstacle.height &&
            cheese.top + cheese.height > obstacle.top
        ) {
            gameOver(); // 衝突したらゲームオーバー
        }
    });
}

// ゲームオーバー処理
function gameOver() {
    clearInterval(gameInterval); // 障害物生成を停止
    clearInterval(collisionCheckInterval); // 衝突検出を停止
    alert("ゲームオーバー･･･"); // ゲームオーバーのメッセージを表示
    $(".game-screen").hide(); // ゲーム画面を非表示
    resetCheesePosition(); // ゲームオーバー時にチーズボールの位置をリセット
}

// チーズボールの位置を初期位置にリセットする関数
function resetCheesePosition() {
    const gameArea = $(".game-screen")[0].getBoundingClientRect();
    const cheeseHeight = $(".cheese")[0].getBoundingClientRect().height;

    x = 0; // 左から0pxの位置に設定
    y = gameArea.height - cheeseHeight - 10; // ゲーム画面の下から10pxの位置に設定

    $(".cheese").css({ left: `${x}px`, top: `${y}px` });
}