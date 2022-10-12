// Inspired by this cool shot of Razvan Hosu:
// https://dribbble.com/shots/3366262-Product-presentation

function toggleFlip() {
    this.classList.toggle('flipped');
    
    var cardContainer = document.querySelector('.card-container');
    cardContainer.classList.toggle('flipped');
    
    var sideFront = document.querySelector('.side-front');
    sideFront.classList.toggle('disappear');
  }
  
  var flipButton = document.querySelector('.flip-button');
  
  flipButton.addEventListener('click', toggleFlip);
  
  
  // Rating jQuery Plugin
  
  $(function () {
   
    $("#rateYo").rateYo({
      rating: 4.5,
      starWidth: "25px",
      normalFill: "#f7f3cd"
    }).on("rateyo.change", function (e, data) {
      var rating = data.rating;
      $('.rating-text').text(rating);
    });
    
  });
  