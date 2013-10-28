//From a codecademy exercise


var user = prompt("Do you want INDIAN, MEXICAN, or ITALIAN food?").toUpperCase();
var option1;
var dumb = true;

switch(user)
{
    case 'INDIAN':
        option1 = prompt("Do you like spicy food? YES/NO").toUpperCase();
        if (option1 == 'YES') {
            console.log("Cool, let's share a few dishes.");
        }
        else {
            console.log("Okay, let's figure out what to order.");
        }
        break;
    case 'MEXICAN':
        option1 = prompt("What dish were you thinking?").toUpperCase();
        if (option1 == "BURRITO" || option1 == "TACOS") {
            console.log("That sounds good.. I like that too");
        }
        else {
            console.log("I think I'll get a burrito.")
        }
        break;
    case 'ITALIAN':
        option1 = prompt("Are you really set on that? YES/NO").toUpperCase();
        if (option1 == 'YES' && dumb == true) {
            console.log("Hmm.. I'm not really feeling that today.");
        }
        else {
            console.log("Let's pick something else we like, then.")
        }
        break;
    default:
        console.log("That wasn't even an option!");
        break;
}
