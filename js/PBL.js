//ログイン.html用
    function myFunction() {
       let dropdown = document.getElementById("myDropdown");
       let selectedValue = dropdown.value;
       if (selectedValue === "option1") {
        window.location.href = "ランキング管理画面.html";
       } else if (selectedValue === "option2") {
        window.location.href = "競技選択.html";
       } else {
         // 選択がない場合の処理
         console.log("No option selected");
       }
    }
//チーム名管理.html用
    function teamFactory() {
      let baseFontSize = 16; // 基準のフォントサイズ
        //競技の値を取得
        let addTeam = document.getElementById("myTextBox");
        let cell1 = document.getElementById("cell1");
        let text = document.createTextNode(addTeam.value);
        cell1.appendChild(text);
        cell1.appendChild(document.createElement("br"));
        //テキストクリア
        addTeam.value = "";
    } 
//入力アカウント管理.html用
function accountFactory() {
  let baseFontSize = 16; // 基準のフォントサイズ
    //競技の値を取得
    let addName = document.getElementById("myTextBox");
    let addPass = document.getElementById("myTextBox2");
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let checkname= addName.value.trim();
    let checkpass= addPass.value.trim();
    let name = document.createTextNode(addName.value);
    let pass = document.createTextNode(addPass.value);
    let oicPattern = /^\d+@oic-ok\.ac\.jp$/;
    let numberPattern = /^\d+$/;
    if (!oicPattern.test(checkname)) {
      alert('oicのアドレスを入力してください。');
      return;
    } else if (!numberPattern.test(checkpass)) {
      alert('数字のみを入力してください。');
      return;
    } else if (addPass.value.length < addPass.maxLength) {
      alert("8文字で入力してね")
      return;
    }
    item1.appendChild(name);
    item1.appendChild(document.createElement("br"));
    item2.appendChild(pass);
    item2.appendChild(document.createElement("br"));
    //テキストクリア
    addName.value = "";
    addPass.value = "";
} 
    
  