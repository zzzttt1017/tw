javascript: (function() {
    var obj = $('iframeautoheight').contentDocument.getElementsByTagName('select');
    for (i = 1; i < obj.length; i++) { obj[i].value = 'B'; }
    var rid = Math.max(1, Math.floor(Math.random() * obj.length));
    obj[rid].value = 'A';
    $('iframeautoheight').contentDocument.getElementById('pjxx').innerText = '老师非常不错，赞一个';
    $('iframeautoheight').contentDocument.getElementById('Button1').click();
})();