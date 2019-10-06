// Grab All Links on Page and add to Array
var arr = [], links = document.links;
for(var i=0; i<links.length; i++) {
  arr.push(links[i].href);
};

// Create array without duplicate links
var arr2 = [...new Set(arr)]

// Include only links matching Regex
var re = new RegExp("https://thecorrespondent.com/[0-9]*/");

// Loop through Array and create a <p> link elements
var stringOfHtml = "";
for(i=0;i<arr2.length;i++){
    if (re.test(arr2[i])) {
 	  stringOfHtml += "<p><a href='"
	  stringOfHtml += arr2[i];
	  stringOfHtml += "'>";
	  stringOfHtml += arr2[i];
	  stringOfHtml += "</a><p>"
    } else {
      console.log(arr2[i] + " does not match regex.");
  }
};

// Open new window in browser and display list of links.
var w = window.open('', 'wnd');
w.document.body.innerHTML = stringOfHtml;
