$(function() {
  var cheesyTemplate = Handlebars.compile($('#colores').html());

  $.ajax({
    url: 'data.json'
  })
  .done(function(json) {
    var compiledHtml = cheesyTemplate({couleur: json});
    $('body').html(compiledHtml);
  });
});
