var money = 0;

function moneyButton(){
  money = money + 1;
  document.getElementById("money").innerHTML = money;
};

const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 300;
