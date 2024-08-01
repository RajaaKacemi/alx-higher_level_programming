// 103-script.js
$(document).ready(function() {
  $('#language_code').keypress(function(e) {
    if (e.which === 13) { // Enter key
      const languageCode = $(this).val();
      $.getJSON('https://www.fourtonfish.com/hellosalut/hello/', { lang: languageCode }, function(data) {
        $('#hello').text(data.hello);
      });
    }
  });
});
