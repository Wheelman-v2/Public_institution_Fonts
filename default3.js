        /* 볼드, 이탤릭 체크박스 */
        function toggleStyles() {
            var boldCheckbox = document.getElementById("boldCheckbox");
            var italicCheckbox = document.getElementById("italicCheckbox");
            var blackBackgroundCheckbox = document.getElementById("blackBackgroundCheckbox");

            var textareas = document.querySelectorAll('.tex_size');

            for (var i = 0; i < textareas.length; i++) {
                var textarea = textareas[i];

                textarea.style.fontWeight = boldCheckbox.checked ? "bold" : "normal";
                textarea.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";

                if (blackBackgroundCheckbox.checked) {
                    textarea.style.backgroundColor = "black";
                    textarea.style.color = "white";
                } else {
                    textarea.style.backgroundColor = "#FCFDF7"; // 원하는 배경색으로 변경
                    textarea.style.color = "black"; // 원래 텍스트 색상으로 변경
                }
            }
        }
                    document.addEventListener('keydown', function(event) {
                        if (event.keyCode === 13) {
                            event.preventDefault();
                        };
                    }, true);
        /* 폰트 크기 슬라이더 값 */
        var initialFontSize = 30; // 초기 폰트 크기를 30px로 설정

        function changeFontSize() {
            var slider = document.getElementById("slider");
            var fontSizeValue = document.getElementById("fontSizeValue");

            var textarea1 = document.getElementById("tex_size1");
            var textarea2 = document.getElementById("tex_size2");
            var textarea3 = document.getElementById("tex_size3");

            var fontSize = parseFloat(slider.value);
            fontSizeValue.innerText = " " + fontSize + "px";
            textarea1.style.fontSize = fontSize + "px";
            textarea2.style.fontSize = fontSize + "px";
            textarea3.style.fontSize = fontSize + "px";

            // 초기 높이 설정
            textarea1.style.height = "auto";
            textarea2.style.height = "auto";
            textarea3.style.height = "auto";

            // 각 텍스트 영역의 높이를 텍스트 내용에 맞게 동적으로 조절
            var scrollHeight1 = textarea1.scrollHeight;
            textarea1.style.height = scrollHeight1 + "px";
            var scrollHeight2 = textarea2.scrollHeight;
            textarea2.style.height = scrollHeight2 + "px";
            var scrollHeight3 = textarea3.scrollHeight;
            textarea3.style.height = scrollHeight3 + "px";
        }
        
            /* textarea 박스 크기 초기화 */
            document.addEventListener("DOMContentLoaded", function() {
                var slider = document.getElementById("slider");
                slider.value = initialFontSize;
                changeFontSize();
            });

            /* 폰트 크기 증가 값 */
            $('input').on('input', function() {
                var v = $(this).val();
                $('textarea').css('font-size', v + 'px')
            });

            /* 텍스트 입력 시 엔터키 OFF */
            $(document).ready(function() {
                $("#Textwright").keyup(function() {
                    $("#tex_size1, #tex_size2, #tex_size3").text($("#Textwright").val());
                });
            });