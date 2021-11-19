var images = ["mom.jpg", "dad.png", "me.png","big brother.png","small brother.png", "clipart-pictures-family-1.png"];
var names = ["Mom", "Dad", "Me","Big Brother","Small Brother", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
