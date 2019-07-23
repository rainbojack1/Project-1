
// var country = 'Atlanta';  //works with cities too
// var place = 'bar'

// var apiKey = 'AIzaSyAq5H3zQDHnoQzLHEg4a1LH9dC5WIlIFwY'
// var queryURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + place + '+in+' + country + '&key=' + apiKey

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = queryURL;
// fetch(proxyurl + url) 
// .then(response => response.text())
// .then(contents => console.log(JSON.parse(contents)))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
// var QueryURL = "http://api.eventful.com/json/events/search?...&keywords=" + keyword + "&location=" + City + "&date=" + when + "&app_key=DzrBFd4tkfmKkSSH"

var keyword = 'food';
var username;
var password;
var newUsername;
var newPassword;

$(".cat").click(function (event) {
    event.preventDefault();
    console.log("You picked a category: ", $(this).attr("data-val"));
    keyword = $(this).attr("data-val");
    console.log("New keyword: ", keyword);

    $("#loading").show();

    var place = 'Georgia';
    var when = 'Future';
    var queryURL = "http://api.eventful.com/json/events/search?keywords=" + keyword + "&location=" + place + "&date=" + when + "&app_key=DzrBFd4tkfmKkSSH"
    var eventData = '';

    const proxyurl = "https://-anywhere.herokuapp.com/";
    const url = queryURL;cors
    fetch(proxyurl + url)
        .then(response => response.text())
        .then(function (data) {
            var myData = JSON.parse(data)
            console.log(myData)

            //pull data with myData variable//

            $("#loading").hide();
            $("#events-response").append("<div><h4 id='key'>" + keyword + "</h4></div>");
            
            for (var i = 0; i < 15; i++) {

                newDiv = $('<div>')
                newDiv.attr('class', 'event')
                newDiv.attr('id', 'event' + i)
                var newA = "<a href='" + myData.events.event[i].url + "' target='_blank' alt='link to event' data-toggle='tooltip' data-placement='top' title='" + myData.events.event[i].title + "'><img class='thumbnail' src='"+ "/users" + "'></a>"
                                                                                                                                                                                                                    //myData.events.event[i].image.medium.url                                                                                                                                                                                                    
                var newButton = $('<button>')
                newButton.attr('class', 'favorite-button');
                newButton.attr('div-data', 'event' + i);
                newButton.text('Favorite this event!')
                newDiv.append(newA);
                if(userLogged != undefined){
                newDiv.append(newButton);
            }
                $("#events-response").append(newDiv);

            }
            
            //$("#linkmodal").show();

        })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser??"))

        $(".modalbox").hide();
});


  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
 
