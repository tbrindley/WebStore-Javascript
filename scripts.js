function setDisplayNone(){
    document.getElementById("drinks").style.display = "none";
    document.getElementById("snacks").style.display = "none";
    document.getElementById("meals").style.display = "none";
    document.getElementById("cart").style.display = "none";
}
                       
function showall(){
    document.getElementById("drinks").style.display = "block";
    document.getElementById("snacks").style.display = "block";
    document.getElementById("meals").style.display = "block";
}
            
function displayButtons(x){
    var id = document.getElementById(x);
    if (id.style.display === 'none') {
        id.style.display = 'block';
    } else {
        id.style.display = 'none';
        }
}

function addToCart(item,cost){
    var id = document.getElementById("cart");
    var textnode = document.createTextNode(item + ", $" + cost);
    id.appendChild(textnode);
    
    var oldtotal = Number(document.getElementById('total').textContent);
    var newtotal = cost + oldtotal;
    var printTotal = newtotal.toFixed(2);
    
    document.getElementById("total").innerHTML = printTotal;
}
