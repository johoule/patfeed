function checkIt() {
  // Initialize scores
  var nerd = 0;
  var jock = 0;
  var cheer = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'nerd') {
        nerd++;
      }
      else if (e.value == 'jock') {
        jock++;
      }
      else if (e.value == 'cheer') {
        cheer++;
      }
    }

  }

  // Determine result
  var counts = "Nerd: " + nerd + ", " +
               "Jock: " + jock  + ", " +
               "Cheer: " + cheer;

  // What is the highest value?
  var max = Math.max(nerd, jock, cheer);

  // Form a message
  var message;

  if (max == nerd) {
    message = "Looks like you took a break from playing video games and coding websites, you nerd.";
  }
  else if (max == jock) {
    message = "Do you even lift, bro? Of course you do. You're clearly a jock.";
  }
  else if (max == cheer) {
    message = "Hip hip, hooray! You are such a cheerleader. Go sports!";
  }

  // Display result
  document.getElementById('result').innerHTML = counts;
  // document.getElementById('result').innerHTML = message;
}
