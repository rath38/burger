// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
   
    console.log(id);


    var newDevouredState = {
      devoured: 1
    };


    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDate = moment().format('YYYY-MM-DD');

    var dateString = newDate.toString();



    var newBurger = {
      name: $("#bur").val().trim(),
      devoured: 0,
      dates: dateString
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
