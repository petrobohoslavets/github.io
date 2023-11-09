        var block = document.getElementById('block');
        var rangeArr = document.querySelectorAll('.br input[type="range"]');
        var textArr = document.querySelectorAll('.br input[type="text"]');

        function setBR() {
            block.style.borderRadius = ""
            let borderRadius = ""

            rangeArr.forEach(element => {
                borderRadius += (" " + element.value.toString() + "px");
            })

            block.style.borderRadius = borderRadius
            document.getElementById('resultCode').value = "border-radius:" + borderRadius + ";";
        }

        rangeArr.forEach(element => {
            element.oninput = function(event) {
                let range = event.target;
                let text = range.parentElement.children[2];
                
                text.value = range.value;

                setBR();
            }
        });

        textArr.forEach(element => {
            element.oninput = function(event) {
                let text = event.target;
                let range = text.parentElement.children[1];
                
                range.value = parseInt(text.value)

                setBR();
            }
        });


        document.getElementById('resultCode').value = "border-radius: 0px 0px 0px 0px;"
