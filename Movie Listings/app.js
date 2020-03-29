//Set variables for the different buttons and functions






function search(){


var title =(document.getElementById("searchNow").value);



var queryURL = "https://www.omdbapi.com/?t=" + title + "&s=&plot=short&apikey=969ce928";

var find = 
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  console.log(response);
  console.log(response.Runtime);
  document.getElementById('post').innerHTML =response.Title
  document.getElementById('year').innerHTML =response.Year
  document.getElementById('genre').innerHTML =response.Genre
  document.getElementById('plot').innerHTML =response.Plot
  
});
  
}

