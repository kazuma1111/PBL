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
      if (dropdown.value === "ランキング管理画面.html" && name === "管理者" && password === "oic123") {
        let selectedValue = dropdown.value;
        window.location.href = selectedValue;
      } else if (dropdown.value === "入力者管理画面.html" && name === "入力者" && password === "oic987") {
        let selectedValue = dropdown.value;
        window.location.href = selectedValue;
      } else {
        alert("アカウントまたはパスワードが違います。");
      }
    }
//アカウント管理.html用
    function accountFactory() {
      let addName = document.getElementById("myTextBox");
      let addPass = document.getElementById("myTextBox2");
      // テーブルのtbody要素を取得
      let tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
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
        if (checkname !== "" && checkpass !== "") {
            // 新しい行を作成
            var newRow = document.createElement("tr");

            // 入力テキストを表示するセルを作成
            var nameCell = document.createElement("td");
            var passCell = document.createElement("td");
            nameCell.innerText = checkname;
            passCell.innerText = checkpass;

            // 削除ボタンを表示するセルを作成
            var deleteCell = document.createElement("td");
            var deleteButton = document.createElement("button");
            deleteButton.innerText = "削除";
            deleteButton.onclick = function() {
              deleteRow(newRow);
            };
            deleteCell.appendChild(deleteButton);

            // 行にセルを追加
            newRow.appendChild(nameCell);
            newRow.appendChild(passCell);
            newRow.appendChild(deleteCell);

            // テーブルに行を追加
            tableBody.appendChild(newRow);

            // テキストエリアをクリア
            document.getElementById("myTextBox1").value = "";
            document.getElementById("myTextBox2").value = "";
            }

            function deleteRow(row) {
            var tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
            tableBody.removeChild(row);
            alert(inputText + "削除しました");
            }

        addName.value = ""; 
        addPass.value = "";  // テキストエリアをクリア
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            