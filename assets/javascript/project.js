
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

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = queryURL;
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
                var newA = "<a href='" + myData.events.event[i].url + "' target='_blank' alt='link to event' data-toggle='tooltip' data-placement='top' title='" + myData.events.event[i].title + "'><img class='thumbnail' src='"+ myData.events.event[i].image.medium.url + "'></a>"
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

//Open and close sidenav
function w3_open() {
    $("#mySidebar").show();
}

function w3_close() {
    $("#mySidebar").hide();
}

//Open preferences modal
$("#preferences").click(function (event) {
    event.preventDefault();
    $("#id01").show();
})

//Open login modal
$("#login").click(function (event) {
    event.preventDefault();
    $("#login-modal").show();
    // $("#preferences").show().css("display", "block");
    // $("#logout").show().css("display", "block");
})

$('#login-btn').on('click', function () {
    username = $("#username").val().trim();
    password = $("#password").val().trim();
    console.log("Reached project.js", username + "; " + password);
    getCredentials();
    sendLoginToDB();
    $("#login-modal").modal('hide');
});

$("#register-btn").on('click', function () {
    $("#signup-modal").modal('show');
    $("#login-modal").modal('hide');
});

$('#signup-btn').on('click', function () {
    newUsername = $("#newUsername").val().trim();
    newPassword = $("#newPassword").val().trim();
    console.log("Reached project.js", newUsername + "; " + newPassword);
    getCredentials();
    sendSignupToDB();
    $("#signup-modal").modal('hide');
});

$("#logout").on('click', function(){
    sendLogoutToDB();
})

