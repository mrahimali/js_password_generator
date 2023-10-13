const rangeInput = document.getElementById('rangeInput');
        const selectedValue = document.getElementById('selectedValue');


        const pass = document.getElementById("password");

        function getLength(){
            const length = document.getElementById("rangeInput").value;
            selectedValue.textContent = length;
        }


        const upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lwr = "abcdefghijklmnopqrstuvwxyz";
        const num = "0123456789";
        const sym = "!@#$%^&*()_+-=[]{};:,<.>/?~` ";
        const allChars ="";

        function getSelectedChars() {
            let allChars = "";
            
            if (document.getElementById("uprCaseCheckbox").checked) {
                allChars += upr;
            }
            if (document.getElementById("lowerCaseCheckbox").checked) {
                allChars += lwr;
            }
            if (document.getElementById("numberCheckBox").checked) {
                allChars += num;
            }
            if (document.getElementById("SymCheckBox").checked) {
                allChars += sym;
            }

            return allChars;
        }

        function createPassword() {
            const length = document.getElementById("rangeInput").value;
            let password = "";
            const allChars = getSelectedChars();
            while (length > password.length) {
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }

            pass.value = password;
        }


        function copyPass() {
            pass.select();
            document.execCommand("copy");
        }