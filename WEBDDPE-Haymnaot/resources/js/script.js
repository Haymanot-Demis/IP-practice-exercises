var audioDiv = document.getElementById("aud-container"); /// to access the audio container
var img = document.getElementById("img-container"); // to access the image container
var videoDiv = document.getElementById("vid-container"); // to access the video container
var image = img.firstElementChild; // to get the img element which is a child of image container
var video = videoDiv.firstElementChild; // to get the video element which is a child of video container
videoDiv.appendChild(image); // append img element into  video container
img.appendChild(video); // append video element into  image container
audioDiv.remove(audioDiv.firstChild);  // remove the audio element from from the conntainer
const div = document.createElement("div"); //create new div element
div.style.cssText = "color:blue;border:1px solid red; background-color:cyan;"; // giv style for the new div element
div.innerHTML = "<h1><ins>New Element added</ins></h1>"; // assign innerHTML content for the div anested header and inserted text
audioDiv.appendChild(div); // insert the newly created  div element into the audio container 