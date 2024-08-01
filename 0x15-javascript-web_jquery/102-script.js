// 102-script.js
$(document).ready(function() {
  $('#btn_translate').click(function() {
    const languageCode = $('#language_code').val();
    $.getJSON('https://www.fourtonfish.com/hellosalut/hello/', { lang: languageCode }, function(data) {
      $('#hello').text(data.hello);
    });
  });
});
