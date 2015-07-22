console.log("Your code goes in this document.");

// Solution 1

var priceList = items.map(function(el) {
  return el.price
});
var sum = priceList.reduce(function(accm, curr) {
  return accm += curr
});
var avg = sum / items.length;
solution1 = Math.round(avg * 100, 2) / 100;
document.getElementById('answer1').innerHTML = solution1;


// Solution 2

var filteredItems = items.filter(function(el) {
  return el.price >= 14 && el.price <= 18
});
var solution2 = filteredItems.map(function(el) {
  return "ID: " + el.listing_id
})
solution2 = solution2.join("\n");
document.getElementById('answer2').innerHTML = solution2;

// Solution 3

gbpItem = items.filter(function(el) {
  return el.currency_code === "GBP"
});
solution3 = "ID: " + gbpItem[0].listing_id + " PRICE: " + gbpItem[0].price;
document.getElementById('answer3').innerHTML = solution3;

// Solution 4

function madeOfWood(item) {
  var t = item.materials.indexOf("wood")
  if ( t >= 0 ) {
    return item;
  };
};
var woodenItems = items.filter(function(el) {
  return madeOfWood(el)
});
var solution4 = woodenItems.map(function(el) {
  return "ID: " + el.listing_id
});
solution4 = solution4.join("\n");
document.getElementById('answer4').innerHTML = solution4;

// Solution 5

function moreThan8Materials(item) {
  var t = item.materials.length
  if ( t >= 8 ) {
    return item;
  };
};
var eightPlusMaterialItems = items.filter(function(el) {
  return moreThan8Materials(el)
});
var solution5 = eightPlusMaterialItems.map(function(el) {
  return "ID: " + el.listing_id + " | # of Items: " + el.materials.length + " | Items: " + el.materials
});
solution5 = solution5.join("\n");
document.getElementById('answer5').innerHTML = solution5;

// Solution 6

function iMade(item) {
  var t = item.who_made;
  if (t === "i_did") {
    return item;
  };
};
var itemsMadeBySeller = items.filter(function(el) {
  return iMade(el);
});
document.getElementById('answer6').innerHTML = itemsMadeBySeller.length;
