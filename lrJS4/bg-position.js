var box = document.getElementById('resultBox'); 
                    var rangePosArr = document.querySelectorAll('.bg-p input[type="range"]');
                    var textPosArr = document.querySelectorAll('.bg-p input[type="text"]');

                    function setBGP() {
                        box.style.backgroundPosition = ""
                        let backgroundPosition = ""
                        select.value = null;


                        rangePosArr.forEach(element => {
                            backgroundPosition += (" " + element.value.toString() + "px");
                        })

                        box.style.backgroundPosition = backgroundPosition
                        document.getElementById('resultPosition').value = "background-position:" + backgroundPosition + ";";
                    }

                    rangePosArr.forEach(element => {
                        element.oninput = function(event) {
                            let range = event.target;
                            let text = range.parentElement.children[2];
                            
                            text.value = range.value;

                            setBGP();
                        }
                    });

                    textPosArr.forEach(element => {
                        element.oninput = function(event) {
                            let text = event.target;
                            let range = text.parentElement.children[1];
                            
                            range.value = parseInt(text.value)

                            setBGP();
                        }
                    });
                    
                    var select = document.getElementById('defaultPositions')

                    select.addEventListener('change', () => {
                        rangePosArr.forEach(element => {
                            element.value = 0
                        })
                        textPosArr.forEach(element => {
                            element.value = 0
                        })

                        let selected = select.options[select.selectedIndex].value.toString();

                        box.style.backgroundPosition = selected;
                        document.getElementById('resultPosition').value = "background-position: " + selected + ";";
                    })


                    document.getElementById('resultPosition').value = "background-position: top;"