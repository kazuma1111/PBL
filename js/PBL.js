    // console.log('paoo');
    // let dropdown = document.getElementById("myDropdown");
    //   let selectedValue = dropdown.value;

    //   console.log(selectedValue);


    // function myFunction2() {
    //   let button = document.getElementById("sample");
    //   let samplename = sample.value;

    //   console.log(samplename);
    // }
    function myFunction() {
       let dropdown = document.getElementById("myDropdown");
       let selectedValue = dropdown.value;
    
      //  console.log(selectedValue);
      // console.log('とりこ');
       if (selectedValue === "option1") {
        window.location.href = "ランキング管理画面.html";
       } else if (selectedValue === "option2") {
        window.location.href = "競技選択.html";
       } else {
         // 選択がない場合の処理
         console.log("No option selected");
       }
    }
    
  