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
    function changeLink() {
      let name = document.getElementById("myTextBox").value;
      let password = document.getElementById("myTextBox2").value;
      let dropdown = document.getElementById("myDropdown");
      if (name === "管理者" && password === "oic123") {
        let selectedValue = dropdown.value;
        window.location.href = selectedValue;
      } else if (name === "入力者" && password === "oic987") {
        let selectedValue = dropdown.value;
        window.location.href = selectedValue;
      } else {
        alert("アカウントまたはパスワードが違います。");
      }
    }

//チーム名管理.html用
    let textArray = [];  // テキストの配列を管理する変数
    function accountFactory() {
      let addName = document.getElementById("myTextBox");
      let addPass = document.getElementById("myTextBox2");
      let item1 = document.getElementById("item1");
      let item2 = document.getElementById("item2");
      let checkname= addName.value.trim();
      let checkpass= addPass.value.trim();
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
        if (checkname !== "") {
            textArray.push(checkname);  // 配列にテキストを追加
            item1.innerHTML += "<p onclick=\"selectText(this)\">" + checkname + "</p>";  // テキストを表示
        }
        if (checkpass !== "") {
          textArray.push(checkpass);  // 配列にテキストを追加
          item2.innerHTML += "<p onclick=\"selectText2(this)\">" + checkpass + "</p>";  // テキストを表示
      }
        addName.value = ""; 
        addPass.value = "";  // テキストエリアをクリア
    }
    function selectText(element) {
        element.classList.toggle("selected");  // 選択した項目に"selected"クラスを追加または削除
    }
    function selectText2(element) {
      element.classList.toggle("selected2");  // 選択した項目に"selected"クラスを追加または削除
  }
    function deleteButton() {
        let item1 = document.getElementById("item1");
        let item2 = document.getElementById("item2");
        let selectedElements = item1.getElementsByClassName("selected");
        let selectedElements2 = item2.getElementsByClassName("selected2");
        while (selectedElements.length > 0) {
            let selectedElement = selectedElements[0];
            let selectedText = selectedElement.textContent;
            let index = textArray.indexOf(selectedText);
            if (index > -1) {
                textArray.splice(index, 1);  // 配列からテキストを削除
            }
            selectedElement.remove();  // 項目を表示から削除
        }
        while (selectedElements2.length > 0) {
          let selectedElement2 = selectedElements2[0];
          let selectedText2 = selectedElement2.textContent;
          let index2 = textArray.indexOf(selectedText2);
          if (index2 > -1) {
              textArray.splice(index2, 1);  // 配列からテキストを削除
          }
          selectedElement2.remove();  // 項目を表示から削除
      }
    }
    
   //競技名管理
   let textArray1 = [];  // テキストの配列を管理する変数
   function sportFactory() {
     let addsportName = document.getElementById("myTextBox3");
     let register = document.getElementById("register1");
     let checksportname= addsportName.value.trim();
       if (checksportname !== "") {
           textArray1.push(checksportname);  // 配列にテキストを追加
           register.innerHTML += "<p onclick=\"selectText(this)\">" + checksportname + "</p>";  // テキストを表示
       }
       addsportName.value = ""; 
   }
   function selectText(element) {
       element.classList.toggle("selected");  // 選択した項目に"selected"クラスを追加または削除
   }
   function deleteButton1() {
       let register1 = document.getElementById("register1");
       let selectedElements = register1.getElementsByClassName("selected");
       while (selectedElements.length > 0) {
           let selectedElement = selectedElements[0];
           let selectedText = selectedElement.textContent;
           let index = textArray1.indexOf(selectedText);
           if (index > -1) {
               textArray1.splice(index, 1);  // 配列からテキストを削除
           }
           selectedElement.remove();  // 項目を表示から削除
       }
   }
/**集計画面 */
'use strict';
//勝敗選択
let btn = document.getElementById('triggerButton');
btn.addEventListener('click' ,function (e){
  alert('clicked!');
}, false);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            