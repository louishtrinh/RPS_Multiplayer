/* Firebase declare */
database = firebase.database();

rpsOnline = {
  updateChat: function() {
    var chatLine = $("#chat-input")
      .val()
      .trim();
    $("#chat-input").val("");
    console.log(chatLine);
  }
};
/* $(document).on("click", ".rmvFavBtn", callback);
database.ref().on("child_added", function(snapshot) {
    
  });

  removeFav: function() {
    var keyToRemove = $(this).attr("data-key");
    database.ref().child(keyToRemove).set({});
    $(this).closest(".card").remove();
  } */

/* $(document).on("click", "#enterChat", rpsOnline.updateChat);
 */
$("#chatBtn").on("click", function(event) {
  event.preventDefault();
  var chatLine = $("#chat-input")
    .val()
    .trim();
  $("#chat-input").val("");
  database.ref().push({
    chat: chatLine
  });
});

database.ref().on("child_added", function(snapshot) {
  $("#chatLogs").prepend(snapshot.val().chat);
});
