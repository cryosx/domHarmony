/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

// 1. In the nav element, target the span element with the id of "count" and change the number from 0 to 8.

document.getElementById("count").innerHTML = 8;

// 2. Target the div with the id of 'age' and change the contents to: "21 year old vibrant stud".

document.getElementById("age").innerHTML = "21 year old vibrant stud";


// 3. Target the span element with the id of "distance" and change the number from 1000 to 168.

document.getElementById("distance").innerHTML = 168;


// 4. Create a paragraph element with the id of "pro2". In this paragraph, add the following content: "My main objective is to find a Mrs. McDonald." Append this element inside of the paragraph element with the id of "profile".
var temp = document.createElement("p");
temp.setAttribute("id", "pro2");
temp.innerHTML = "My main objective is to find a Mrs. McDonald.";
document.getElementById("profile").appendChild(temp);

// 5. Create a span element of the id of "mail" and give it a content of 11. Append this element into the "Messages" li element.


