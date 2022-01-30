var audioDiv = document.getElementById("aud-container"); /// to access the audio container
console.log(audioDiv);
var img = document.getElementById("img-container"); // to access the image container
console.log(img);
var videoDiv = document.getElementById("vid-container"); // to access the video container
console.log(videoDiv);
var image = img.firstElementChild; // to get the img element which is a child of image container
console.log(image);
var video = videoDiv.firstElementChild; // to get the video element which is a child of video container
console.log(video);
videoDiv.appendChild(image); // append img element into  video container
console.log(videoDiv);
img.appendChild(video); // append video element into  image container
audioDiv.remove(audioDiv.firstChild);  // remove the audio element from from the conntainer
console.log(audioDiv);
const div = document.createElement("div"); //create new div element
div.style.cssText = "color:blue;border:1px solid red; background-color:cyan;"; // giv style for the new div element
div.innerHTML = "<h1><ins>New Element added</ins></h1>"; // assign innerHTML content for the div anested header and inserted text
var container = document.querySelector("div.new"); 
container.appendChild(div); // insert the newly created  div element into the audio container 
const list = document.createElement("ul");
console.log(list);
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
li.innerText = "Create Element";
li2.innerText = "Append child Element";
li3.innerText = "Remove Element";
li4.innerText = "Replace Element";
li5.innerText ="New list item replaces";
list.appendChild(li);
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);
container.appendChild(list);
list.replaceChild(li5,li4);
