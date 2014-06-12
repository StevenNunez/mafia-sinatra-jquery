if (window.location.pathname === '/'){
  $.getJSON('/games.json', function(games){
    _.each(games, function(game){
      var templateString = "<li data-id='<%= item.id %>'><a href='#'><%= item.label %></a></li>";
      var template = _.template(templateString);
      $('#existing-games').append(template({item: game}));
    });

    // Add event handler for clicks on lis in #existing-games
    $('#existing-games li').click(function(){
      var itemId = $(this).data('id');
      // $.post('/join/' + , what, what with return)
      $.post('/join/' + itemId, {}, function(){
        window.location = '/play';
      })
    });
  });
}
if (window.location.pathname === '/play'){
  $.getJSON('/game.json', function(data){
    $('#game-label').text(data.label);
    _.each(data.townsPeople, function(townsPerson){
      var templateString = "<li><a href='#'><%= item.name %></a></li>";
      var t = _.template(templateString);
      $('.towns-people').append(t({item:townsPerson}));
    });
  });
}
