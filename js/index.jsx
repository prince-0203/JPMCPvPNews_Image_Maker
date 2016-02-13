$(function() {
  var canvas = $('#canvas');
  var form = $('#form');

  var update = function() {
    canvas
      .clearCanvas()
      .drawImage({
        source: 'punish.png',
        x: 0, y: 0,
        fromCenter: false,
        load: function() {
          canvas.drawImage({
            source: 'http://prince.webcrow.jp/avatar.php?id=' + $('#minecraftId', form).val(),
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
                  text: $('#minecraftId', form).val()
                })
                .drawText({
                  fillStyle: 'white',
                  strokeStyle: 'white',
                  x: 395, y: 500,
                  strokeWidth: 0.1,
                  fromCenter: false,
                  fontSize: 55,
                  fontFamily: 'rounded_m_1pregular',
                  text: $('#reason', form).val()
                })
                .drawText({
                  fillStyle: 'white',
                  strokeStyle: 'white',
                  x: 1068, y: 423,
                  strokeWidth: 0.1,
                  fromCenter: false,
                  fontSize: 70,
                  fontFamily: 'rounded_m_1pregular',
                  text: '(' + $('#server', form).val() + ')'
                })
                .drawText({
                  fillStyle: 'white',
                  strokeStyle: 'white',
                  x: 520, y: 650,
                  strokeWidth: 0.1,
                  fromCenter: false,
                  fontSize: 85,
                  fontFamily: 'rounded_m_1pregular',
                  text: $('#type', form).val()
                })
                .drawText({
                  fillStyle: 'white',
                  strokeStyle: 'white',
                  x: 955, y: 743,
                  strokeWidth: 0.1,
                  fromCenter: false,
                  fontSize: 40,
                  fontFamily: 'rounded_m_1pregular',
                  text: '(' + $('#dayTime', form).val() + ')'
                });
              $('#copyImage', form).attr('href', canvas.getCanvasImage('png'));
            }
          });
        }
      });
  };
  $('#generate', form).click(update);
  update();
});
