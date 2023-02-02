
  art()
   function art(){
    var a=""
    var b=""
    while( b != "123456"){
      a = prompt("請輸入密碼")
    if (a=="123456"){
      b=a
      alert("輸入成功")
      location.assign('https://github.com/richardduh/richardduh.github.io');
      return 0
    }
    if (a !="123456" && a !="")
    {
      if (a == null)
      {
        window.history.back();
        location.reload();

        window.location.go(-1);
      }
      else{
        alert("密碼錯誤!")
      }
    }
    }
   }
