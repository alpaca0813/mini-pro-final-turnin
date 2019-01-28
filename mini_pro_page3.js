var gameFlag=false;
var number;
var speed=900;
var timer=0;
var maxNumber=0;
var answr="";
var correctAns=0;
var count=3;
var correctCnt=0;

function sutarto() {
        if(gameFlag==false){
                correctAns=0;
                answr="";
                speed=1200;
                document.getElementById('kazu').innerHTML="&nbsp;";
                maxNumber=100*(correctCnt+1);
                timer=setInterval("tugi();", speed);
                gameFlag=true;
        }
}
function tugi() {
        if(count>=0){
                number=Math.floor(Math.random()*maxNumber+1);
                correctAns=correctAns+number;
                document.getElementById('kazu').innerHTML=number;
                count-=1;
        }
        else{
                gameFlag=false;
                clearInterval(timer);
                document.getElementById('kazu').innerHTML="&nbsp;";
                count=3;
        }
}

function show7 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (7+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show8 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (8+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show9 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (9+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show4 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (4+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show5 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (5+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show6 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (6+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show1 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (1+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show2 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (2+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show3 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (3+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function show0 (num) {
        if(gameFlag==false && maxNumber>0){
                answr=(answr+"") + (0+"");
                document.getElementById('botan').innerHTML=answr;
}
}
function risetto() {
        answr="";
        document.getElementById('butan').innerHTML="&nbsp";
}
function kotae() {
        if(gameFlag==false && kazu!=""){
                if(correctAns==answr){
                        correctCnt+=1;
                        (confirm("このぐらいはできて当たり前だよねSFC生だもんね！")==true)
                        location.href = "http://web.sfc.keio.ac.jp/~s17574yh/minipro/mini_pro_page2.html";
}
else {
alert('やーいやーい能無し〜');
}
}
}

(function () {
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
