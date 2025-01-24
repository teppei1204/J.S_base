//変数
let kabuki = 'Hello World!';
kabuki = 'Hello World2!';

//定数、文字列を変えたくない時に定数を使う
const bigKabuki = 'Hello World....'

//配列 []を使うことで決まった配列を呼び出せる
let general = ['赤犬','青キジ','黄猿','藤虎'];

//ループ文 length(配列の数を指定する命令)
// let index = 0;
// while(index < general.length){//=4
  // console.log(index);
  // console.log(general[index]);
  // index++;
// }

//if / else
// if(general.length > 3){
//   console.log('通さん！');
// }else{
//   console.log('通さな、、、')
// }

//関数 ①同じ命令を何度も使いたい時 ②任意のタイミングで命令を実行させたい時
// argument = arg(引数という意味)
const test = (arg) => {//⬅️雛形のようなもの
  if(general.length > arg){
    console.log('通さん！');
  }else{
    console.log('通さな、、、')
  }
};

//オブジェクト
const general2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  tycoon: () => {
    console.log('Hello World');
  }
};
//デフォルトである特殊なオブジェクト
//ブラウザ全体のオブジェクト
window.alert('Hi')//ポップアップを呼ぶ関数

//表示しているページ全体のオブジェクト
document.getElementsByTagName('')//HTMLの何かを指定・参照したい時に使う(''[])も可能
//event ユーザーがアクションをしたタイミングで何かをしたい時に使う
//addEventListener 引数を二つ指定できる
document.getElementsByTagName('button')[0].addEventListener('click',()=> {
                                        //ボタンがクリックされたタイミングでこの関数を実行
window.alert('Hello World');
});

