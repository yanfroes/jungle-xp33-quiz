function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
};


$('#form').submit(function (event) {
     var name = $('#name').val();
     var email = $('#email').val();
     event.preventDefault();
     $.ajax({
         url: 'https://gmail.us18.list-manage.com/subscribe/post',
         method: 'POST',
         data: {u: 'cb5a8b59143f4aef7652ae4ff', id: '64f755d87b', EMAIL: email, NAME: name},
         dataType: 'jsonp'
     });
     $.ajax({
         url: 'https://smtl.gama.academy/leads/db22dd71-915e-11ea-9e98-2f3c29e0891c',
         method: 'POST',
         data: {name: name, email: email, debugMode: 'True'} ,
         success: function() {
             window.location = "https://yanfroes.github.io/jungle-xp33-quiz/quiz.html";
         }
     });
 });
