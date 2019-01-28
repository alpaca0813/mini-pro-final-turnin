function golevel1(){
  if (confirm("レベル１を本当にしますか？")==true)
    location.href = "file:///Users/yhashimoto/info2/minipro.github.io/mini_pro_page2.html";
}

function golevel2(){
  if (confirm("レベル２を本当にしますか")==true)
    location.href = "file:///Users/yhashimoto/info2/minipro.github.io/mini_pro_page3.html";
}

function golevel3(){
  if (confirm("レベル３を本当にしますか")==true)
    location.href = "file:///Users/yhashimoto/info2/minipro.github.io/mini_pro_page4.html";
}

$(function () {
  var $body = $(document.body);
  var $form = $('#form');
  var $name = $form.find('#inputName');

  $form.submitter({
    dataType: 'json',
    start: function (e) {
      if (!$name.val()) {
        e.preventDefault(); // Prevent submit
        $name.focus();

        // Tooltip: https://github.com/fengyuanchen/tooltip
        $body.tooltip('Please enter a name', 'warning');
      }
    },
    done: function (e, data) {
      if ($.isPlainObject(data) && data.success) {
        $body.tooltip(data.result, 'success');
      }
    },
    fail: function (e, textStatus) {
      $body.tooltip(textStatus, 'danger');
    }
  });
});

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.masonry.min.js"></script>
<script>
$(function(){
$('#container').masonry({level	//ここには敷き詰めたい要素を囲うidなど指定します。
itemSelector : '.item'	//ここに敷き詰めたい要素のclassを指定します。
});
});
