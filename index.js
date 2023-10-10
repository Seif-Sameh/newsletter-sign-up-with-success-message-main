let main = document.querySelector(".container");
let done = document.querySelector(".done");

let submitBtn = document.querySelector(".submitBtn");

let inputMail = document.querySelector(".inputMail");

let dismissBtn = document.querySelector(".dismissBtn");

let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    if(inputMail.value.match(emailValidation)){
        main.style.display = "none";
        done.style.display = "block";
        done.querySelector("span").innerText = inputMail.value;
    }
    else{
        inputMail.classList.add("invalid-box");
        document.querySelector(".invalid").style.display = "block";
    }
})

dismissBtn.addEventListener("click", () => {
    main.style.display = "flex";
    done.style.display = "none";
    inputMail.value = "";
    inputMail.classList.remove("invalid-box");
    document.querySelector(".invalid").style.display = "none";
    window.scrollTo(0, 0);
})