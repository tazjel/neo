NEO.Switch = function(obj){

    this.type = 'switch';

    this.ends = obj.ends || [];
    
    NEO.Proto.call( this, obj );

    this.init();
}

NEO.Switch.prototype = Object.create( NEO.Proto.prototype );
NEO.Switch.prototype.constructor = NEO.Switch;

NEO.Switch.prototype.update = function(f){
    var active = false;
    var i = this.keys.length;
    while(i--){
        if(f>=this.keys[i] && f<=this.ends[i]) active = true;
    }
    /*
    var i = this.items.length, it;
    while(i--){
        it = this.items[i];
        if(f>=it.id && f<=it.end) active = true;
    }*/

    /*if (this.keys.indexOf(f) > -1){

        active = true;
    }*/

    if(active) this.c[5].style.background = 'rgba(86,175,178,0.3)';
    else this.c[5].style.background = 'none';

    this.callback(active);
};



// ------------------------------------------


NEO.KeySwitch = function(f, end){
    this.id = f;
    
    //this.length = length || 3;
    this.end = end || (f+3); //this.id+this.length;
    this.length = this.end-this.id;

    var frameSize = NEO.main.frameSize;
    var l = f*frameSize;
    this.w = frameSize;
    this.content = NEO.DOM('NEO', 'div','width:'+(this.w*(this.length+1))+'px; height:60px; left:'+l+'px; top:0; pointer-events:auto; cursor:default;');
    this.content.appendChild(NEO.DOM('NEO', 'rect','width:100%; height:60px; top:0; ',{ width:'100%', height:60, fill:'rgba(86,175,178,0.5)' } ));
    this.content.appendChild(NEO.DOM('NEO', 'div','width:'+this.w+'px; height:60px; top:0; left:0; pointer-events:auto; cursor:e-resize; background:#56afb2;' ));
    this.content.appendChild(NEO.DOM('NEO', 'div','width:'+this.w+'px; height:60px; top:0; right:0; pointer-events:auto; cursor:e-resize; background:#56afb2;' ));
    this.content.name = 'switch';
    //this.content.children[0].name = 'switch';
    this.content.childNodes[1].name = 'switch';
    this.content.childNodes[2].name = 'switch';

    //console.log(this.content.childNodes)
}

NEO.KeySwitch.prototype = {
    constructor: NEO.KeyBang,
    clear:function(){
        
    },
    reSize:function(w){
        this.w = w;
        this.content.style.width = (this.w*(this.length+1)) + 'px';
        this.content.style.left = (this.id*this.w) + 'px';
        this.content.childNodes[1].style.width = this.w+'px';
        this.content.childNodes[2].style.width = this.w+'px';
    },
    move:function(f, isEnd){
        if(isEnd) this.end = f;
        else this.id = f;
        this.length = this.end-this.id;
        this.content.style.left = (this.id*this.w) + 'px';
        this.content.style.width = (this.w*(this.length+1)) + 'px';
    }
}