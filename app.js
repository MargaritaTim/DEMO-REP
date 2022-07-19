/*save ans to list, continue to next page*/

ans_lst = []

/*alert choosing button*/
chosen_btn = ()=> {
    alert("option chosen")
}

// page1 how are you feeling
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

btn1.addEventListener('click', chosen_btn);
btn2.addEventListener('click', chosen_btn);
btn3.addEventListener('click', chosen_btn);
btn4.addEventListener('click', chosen_btn);

// page2 how today's session make you feel
const really_happy_btn = document.querySelector('#really_happy');
const happy_btn = document.querySelector('#happy');
const content_btn = document.querySelector('#content');
const ok_btn = document.querySelector('#ok');
const depressed_btn = document.querySelector('#depressed');

really_happy_btn.addEventListener('click', chosen_btn);
happy_btn.addEventListener('click', chosen_btn);
content_btn.addEventListener('click', chosen_btn);
ok_btn.addEventListener('click', chosen_btn);
depressed_btn.addEventListener('click', chosen_btn);