
        // 切换
        window.onload = function () {
            var oTab = document.getElementById("tabs");
            var oul = oTab.getElementsByTagName('ul')[0];
            var olis = oul.getElementsByTagName('li');
            var oSPANS = oTab.getElementsByTagName("span");
            for (var i = 0; i < olis.length; i++) {
                olis[i].index = i;
                olis[i].onclick = function () {
                    for (var j = 0; j < olis.length; j++) {
                        olis[j].className = "";
                        oSPANS[j].className = "hide"
                    }
                    this.className = "on";
                    oSPANS[this.index].className = "";
                }
            }
        }
        // 切换


        $('#sig').on('click', function() {
                var username = $('#username').val();
                var password = $('#pwd').val();
                if (username.trim().length == 0) {
                    alert('请输入用户名')
                }
                if (password.trim().length == 0) {
                    alert('请输入密码');
                    return;
                }
                $.ajax({
                    type: 'POST',
                    url: '../php/login.php',
                    data: {
                        username: username,
                        password: password
                    },
                    success: function(result) {
                        console.log(result)
                        if (result.code) {
                            location.href = 'homepage.html'
                        } else {
                            console.log(2)
                        }
                    },
                    dataType: 'json'
                })
        });
