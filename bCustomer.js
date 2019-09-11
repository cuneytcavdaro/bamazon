var mysql = require("mysql");
var inquirer = require("inquirer");
// var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("id: " + connection.threadId);
});
function display(){
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res){
        if(err) throw err;
        
        for(var i = 0; i < res.length; i++){
            console.log('ID: ' + res[i].id + '      Product: ' + res[i].product + '     Department: ' + res[i].department);
            console.log('Price: ' + res[i].price + '        Quantity: ' + re[i].quantity_initial);
            console.log('   ');
        }
        purchase();
    });
}

function purchase(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Please enter ID of your item to purchase",
            filter:Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "Enter number of quantity",
            filter:Number
        },
    ]).then(function(results){
        var qRequest = results.Quantity;
        var idRequest = results.ID;
        order(idRequest,qRequest);
    });
};

function order(ID, qNumber){
    connection.query("SELECT * FROM products WHERE id = " + ID, function(err, res){
        if(err) throw err;
    if(qNumber <= res[0].quantity_initial){
        var total = res[0].price*qNumber;
        console.log("You have a " + qNumber + " of " + res[0].product + ". Total will be: " + total);
        connection.query("UPDATE products SET quantity_initial = quantity_initial - " + qNumber + "WHERE id = " + pID);
    }else{
        console.log("Insufficient quantity!");
    };
    display();
});
};
display();
