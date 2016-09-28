Vue.component('clock', {
	template: '#clock-template'
});

var vm = new Vue({
	
	el: "#app"

});

function clock(){
    //calculate angle
    var d, h, m, s;
   time = new Date;
    
    h = 30 * ((time.getHours() % 12) + time.getMinutes() / 60);
    m = 6 * time.getMinutes();
    s = 6 * time.getSeconds();
    
    //move hands
    setAttr('h-hand', h);
    setAttr('m-hand', m);    
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    
    //display time
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    
    if(h >= 12){
        setText('suffix', 'PM');
    }else{
        setText('suffix', 'AM');
    }
    
    if(h != 24){
        h %= 24;
    }
    
    setText('sec', s);
    setText('min', m);
    setText('hr', h);
    
    //call every second
    setTimeout(clock, 1000);    
};

function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
}

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
}

window.onload=clock;
