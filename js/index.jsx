$(function() {
  var canvas = $('#canvas');
  var form = $('#form');

  var update = function() {
    var minecraftId = $('#minecraftId', form).val();
    var reason = $('#reason', form).val();
    var server = $('#server', form).val();
    var type = $('#type', form).val();
    var dayTime = $('#dayTime', form).val();

    $('#result', form).val('【処罰】' + minecraftId + '\n' + reason + ' → ' + type + '(' + Math.floor(Math.random() * 61) + '秒前)\nhttps://pvp.minecraft.jp/punishments/56…');

    var img = new Image();
    img.src = 'http://prince.webcrow.jp/avatar.php?id=' + $('#minecraftId', form).val();
    img.setAttribute('crossOrigin', 'Anonymous');
    img.onload = function() {
      canvas
        .clearCanvas()
        .drawImage({
          source: 'punish.png',
          x: 0, y: 0,
          fromCenter: false,
          load: function() {
            canvas.drawImage({
              source: img,
              x: 110, y: 301,
              width: 97, height: 96,
              fromCenter: false,
              load: function() {
                canvas
                  .drawText({
                    fillStyle: 'white',
                    strokeStyle: 'white',
                    x: 240, y: 300,
                    strokeWidth: 0.1,
                    fromCenter: false,
                    fontSize: 85,
                    fontFamily: 'rounded_m_1pregular',
                    text: minecraftId
                  })
                  .drawText({
                    fillStyle: 'white',
                    strokeStyle: 'white',
                    x: 395, y: 500,
                    strokeWidth: 0.1,
                    fromCenter: false,
                    fontSize: 55,
                    fontFamily: 'rounded_m_1pregular',
                    text: reason
                  })
                  .drawText({
                    fillStyle: 'white',
                    strokeStyle: 'white',
                    x: 1068, y: 423,
                    strokeWidth: 0.1,
                    fromCenter: false,
                    fontSize: 70,
                    fontFamily: 'rounded_m_1pregular',
                    text: '(' + server + ')'
                  })
                  .drawText({
                    fillStyle: 'white',
                    strokeStyle: 'white',
                    x: 520, y: 650,
                    strokeWidth: 0.1,
                    fromCenter: false,
                    fontSize: 85,
                    fontFamily: 'rounded_m_1pregular',
                    text: type
                  })
                  .drawText({
                    fillStyle: 'white',
                    strokeStyle: 'white',
                    x: 955, y: 743,
                    strokeWidth: 0.1,
                    fromCenter: false,
                    fontSize: 40,
                    fontFamily: 'rounded_m_1pregular',
                    text: '(' + dayTime + ')'
                  });
                $('#copyImage', form).attr('href', canvas.getCanvasImage('png'));
              }
            });
          }
        });

    };
  };
  $('#generate', form).click(update);
  update();
});
