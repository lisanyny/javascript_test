// varによる再宣言

// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

//巻き上げ（ホイスティング）
// var str = "webcamp"

// function foo() {
//   console.log(str)
//   var str ="dmm webcamp"
//   console.log(str)
// }

// foo()

//簡単な関数
// let alertString;

// alertString = addString("Webcamp");

// alert(alertString);

// function addString(strA){
//   let addStr = "Hello" +strA;
//   return addStr;
// }

//複数の関数で表示
// let promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);

//じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt("じゃんけん手をグー、チョキ、パーから選んでください");
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
//じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

//ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
if (user_hand!= null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}
//ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

//ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(use == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ"
    }
  }

  return winLoseStr;
}