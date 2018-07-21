function test() {
    var results = "";

    var names = new Array();
    names[0] = "Дима";
    names[1] = "Витя";
    names[2] = "Миша";
    names[3] = "Маша";
          
    var ages = new Array();
    ages[0] = "12";
    ages[1] = "23";
    ages[2] = "15";
    ages[3] = "19";

    results = "<table><tr><th>Имя</th><th>Возраст</th></tr>";
    for (var i=0; i < names.length; i=i+1) {               
        results += "<tr><td>" + names[i] + "</td><td>" + ages[i] + "</td></tr>";
        
    }
    results += "</table>";

    var div = document.getElementById("table");
    div.innerHTML = results;    
}