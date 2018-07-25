var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://api.chucknorris.io/jokes/random', true);
xhttp.send();

xhttp.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data.value);

    document.getElementById("joke").innerHTML = data.value;
}