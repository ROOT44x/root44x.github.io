(function($) {
  $(function() {
    var $shareLink = $('#sharelink'),
      $downloadLink = $('#downloadlink'),
      $copyButton = $('#copylinkbtn'),
      clipboard;
    $shareLink.on('keyup paste click', function() {
      var link = $shareLink.val(),
        l = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");
      if(l !== link) {
        $downloadLink.val(l);
        $copyButton.removeAttr('disabled');
        $('#toast').toast('show');
      } else {
        $downloadLink.val('');
        $copyButton.attr('disabled', 'disabled');
        if (is_url(link) && link.length > 10) {
            $('#error').toast('show');
        }
      }
    });

    $downloadLink.on('click', function() {
      $downloadLink.select();
    });
  });
})(jQuery);

function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return false;
        }
        else
        {
          return true;
        }
}


  function copy() {
  /* Get the text field */
  var copyText = document.getElementById("downloadlink");
  copyText.select(); 
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");

  alert("Copied the text: " + copyText.value);
  document.getElementById('copylinkbtn').innerHTML = "Copied";
};


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
  };
