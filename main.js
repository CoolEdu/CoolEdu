const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function validate()
{
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
if(email=="cooledu@gmail.com"&& password=="user")
{
	window.open("https://sites.google.com/view/cooleducations");
	return false;

}
else
{	
    window.open("alert.html");
}



}