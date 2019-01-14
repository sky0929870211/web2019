var database = firebase.database();
var submit = document.querySelector(".submit");
var uid = document.querySelector(".uid");
var upwd = document.querySelector(".upwd");
var upwd2 = document.querySelector(".upwd2");
var uname = document.querySelector(".uname");
var uphone = document.querySelector(".uphone");
var uemail = document.querySelector(".uemail");
var uaddress = document.querySelector(".uaddress");

submit.addEventListener('click',function(e){
    var _uid = uid.value;
    var _upwd = upwd.value;
    var _upwd2 = upwd2.value;
    var _uname = uname.value;
    var _uphone = uphone.value;
    var _uemail = uemail.value;
    var _uaddress = uaddress.value;
    var info={
        "帳號":_uid,
        "密碼":_upwd,
        "確認密碼":_upwd2,
        "姓名":_uname,
        "電話":_uphone,
        "電子信箱":_uemail,
        "住址":_uaddress
    }
    var count=0;
    for(item in info){
        if(info[item]==""){
            alert(item+"不可為空");
            count++;
            location.reload();
        }
    }
    if(_upwd!=_upwd2){
        alert('兩次密碼不相同');
    }

    if(count==0){
        var i =0;
        database.ref('user').once('value',function(snapshot){
            snapshot.forEach(function(data){
                if(_uid==data.val().uid){
                    i++
                }
            })
            if(i>0){
                alert("此帳號已被註冊");
            }
            else{
                var adduser = database.ref('/user').push();
                adduser.set({
                        "uid":_uid,
                        "pwd":_upwd,
                        "name":_uname,
                        "phone":_uphone,
                        "email":_uemail,
                        "address":_uaddress
                })
                alert("註冊成功");
            }
        })
    }
    
    
    
});

            