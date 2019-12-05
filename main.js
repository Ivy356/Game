var money = 0;

function moneyClick(){
    money = money + 1;
    document.getElementById("money").innerHTML = money;
};

var guns = 0;

function getGun(){
    var gunCost = Math.floor(10 * Math.pow(1.1,guns));     //works out the cost of this cursor
    if(money >= gunCost){                                   //checks that the player can afford the cursor
        guns = guns + 1;                                   //increases number of cursors
    	  money = money - gunCost;                          //removes the cookies spent
        document.getElementById('guns').innerHTML = guns;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,guns));       //works out the cost of the next cursor
    document.getElementById('gunCost').innerHTML = nextCost;  //updates the cursor cost for the user
    };
    var gunProd = Math.floor(1 + Math.pow(1,guns));
    if(money >= gunProd){
        money = money + gunProd;
        document.getElementById('gunProd').innerHTML = gunProd;
};

window.setInterval(function(){
	
	gunProd(guns);
	
}, 1000);
