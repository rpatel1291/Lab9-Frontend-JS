let inputForm = document.getElementById("input-form");

if (inputForm) {
    let userPhrase = document.getElementById("phrase");
    inputForm.addEventListener("submit", function(event) {
        event.preventDefault();
        try {
            let userPhraseValue = userPhrase.value;
            if (!userPhraseValue) throw "Invalid user input";
            else {
                /*let result = true;
                let phraseLowerCase = userPhraseValue.toLowerCase();
                let newPhrase = phraseLowerCase.replace(/[^a-z0-9]/g, "");

                if (newPhrase === "") {

                    var li_no = document.createElement('li');
                    li_no.innerHTML = userPhraseValue;
                    li_no.classList.add('not-palindrome');
                    document.getElementById("attempts").appendChild(li_no);
                    throw "Invalid user input";
                } else {

                    if (newPhrase.length % 2 == 1) {
                        for (let start = 0, end = newUserInput.length - 1; start !== end; start++, end--) {

                            if (newUserInput[start] !== newUserInput[end]) result = false;

                        }
                    } else {
                        for (let start = 0, end = newUserInput.length - 1; start < end; start++, end--) {

                            if (newUserInput[start] !== newUserInput[end]) result = false;

                        }
                    }*/
                let phraseLowerCase = userPhraseValue.toLowerCase();
                let newPhrase = phraseLowerCase.replace(/[^a-z0-9]/g, "");
                let checkPalondrome = newPhrase.split('').reverse().join('');


                if (checkPalondrome === newPhrase) {
                    var result = document.getElementById('result');
                    result.innerHTML = "Given text is palindrome.";
                    var li_yes = document.createElement('li');
                    li_yes.innerHTML = userPhraseValue;
                    li_yes.classList.add("is-palindrome");
                    document.getElementById('attempts').appendChild(li_yes);
                } else {
                    var result = document.getElementById('result');
                    result.innerHTML = "Given text is not palindrome.";
                    var li_no = document.createElement('li');
                    li_no.innerHTML = userPhraseValue;
                    li_no.classList.add("not-palindrome");
                    document.getElementById("attempts").appendChild(li_no);
                }
            }
        } catch (e) {

        }


    })
}