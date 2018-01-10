$(function() {
    /********************************************************/
    /* コンテンツエリアの高さ調節                             */
    /*******************************************************/
    
    function resize_content() {
        // 高さ取得
        var window_height = $(window).height();
        var head_height = $("#head").height();
        // CSS適応
        $("#record").css("height", (window_height - head_height));
        $("#history").css("height", (window_height - head_height));
    }
    resize_content();
    $(window).on("resize", function(){
        resize_content();
    })


    /********************************************************/
    /* 金額表示                                             */
    /*******************************************************/
    $(document).ready(function(){
        var key_code_index = new Array("0","1","2","3","4","5","6","7","8","9",
                                "/","*","-","+",
                                "numlock","back","delete","enter");
        var key_code_value = new Array(96,97,98,99,100,101,102,103,104,105,
                                111,106,109,107,
                                144,8,110,13);
        var key_code = null;
        var digit_limit = 10;     /* yen digit have limit is 100 milion. */
        var digit_cnt = 0;
        var yen = "";
        var key_input_block = false;
        var td = document.getElementById("input_yen");
        
        $(window).keydown(function(e){
            // $("div").text(e.keyCode);
            if ($.inArray(e.keyCode, key_code_value) != -1) {
                key_code = key_code_index[$.inArray(e.keyCode, key_code_value)];
                switch (key_code) {
                    case "1":
                        if (key_input_block == false) {
                            yen = yen + '1';
                            digit_cnt++;    
                        }
                        break;
                    case "2":
                        yen = yen + '2';
                        digit_cnt++;
                        break;
                    case "3":
                        yen = yen + '3';
                        digit_cnt++;
                        break;
                    case "4":
                        yen = yen + '4';
                        digit_cnt++;
                        break;
                    case "5":
                        yen = yen + '5';
                        digit_cnt++;
                        break;
                    case "6":
                        yen = yen + '6';
                        digit_cnt++;
                        break;
                    case "7":
                        yen = yen + '7';
                        digit_cnt++;
                        break;
                    case "8":
                        yen = yen + '8';
                        digit_cnt++;
                        break;
                    case "9":
                        yen = yen + '9';
                        digit_cnt++;
                        break;
                    case "0":
                        yen = yen + '0';
                        digit_cnt++;
                        break;
                    case "/":
                        break;
                    case "*":
                        break;
                    case "-":
                        break;
                    case "+":
                        break;
                    case "numlock":
                        break;
                    case "back":
                        yen = yen.slice(0,-1)
                        digit_cnt--;
                        break;
                    case "delete":
                        yen = "";
                        digit_cnt = 0;
                        break;
                    case "enter":
                        break;
                    default:
                        alert("error.");
                        break;
                }
                // カンマ区切り                
                td.innerHTML = yen;
                // 金額の桁判定（１０桁）
                if (digit_cnt > 10) {
                    key_input_block = true;
                } else {
                    key_input_block = false;
                }
            } else {
                return false;
            }
            return false;
        });
    });


    /********************************************************/
    /* ドロップダウンリスト作成                         */
    /*******************************************************/
    $(document).ready(function(){
        var cate_large = new Array("食費","日用雑貨","交通","交際費","エンタメ","教育・教養","美容・衣服","医療・保険","通信","水道・光熱","住まい","クルマ","税金","大型出費","その他")
        var cate_large_idx_0_list = new Array("食料品","カフェ","朝ごはん","昼ごはん","晩ごはん","間食","居酒屋","バー","その他")

        // make large-cate-number(default)
        var p = document.getElementById("large_cate_number");
        p.innerHTML = cate_large.length;
        // make small-cate-number(default)
        var p = document.getElementById("small_cate_number");
        p.innerHTML = cate_large_idx_0_list.length;
        // make large-cate(default)
        var select = document.getElementById("large_select");
        for (var i in cate_large) {
            var option = document.createElement('option');
            option.setAttribute("value", "cate_large_idx_" + i);
            option.innerHTML = cate_large[i];
            select.appendChild(option)
        }
        // make small-cate(default)
        var select = document.getElementById("small_select");
        for (var i in cate_large_idx_0_list) {
            var option = document.createElement("option");
            option.setAttribute("value", i);
            option.innerHTML = cate_large_idx_0_list[i];
            select.appendChild(option)
        }
    });

    /*********************************/
    /* カレンダー                     */
    /*********************************/
    $(function() {
        $("#datepicker").datepicker();
        $("#datepicker").datepicker("option", "showOn", 'button');
        $("#datepicker").datepicker("option", "buttonImageOnly", true);
        $("#datepicker").datepicker("option", "buttonImage", './img/ico_calendar.png');
    });

});

