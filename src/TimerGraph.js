NEO.TimerGraph = function(obj){

}

NEO.TimerGraph.prototype = {
    constructor: NEO.TimerGraph,

    init:function(){
    },
    pattern:function(){
        var t= [];
        t[0] = "<svg xmlns='http://www.w3.org/2000/svg'><defs><pattern id='pp' x='0' y='0' width='50' height='20' patternUnits='userSpaceOnUse'>";
        t[1] = "<g fill='none' stroke='#f0934e' stroke-width='1'><path d='M0 5 L0 20'/><path d='M10 10 L10 20'/><path d='M20 10 L20 20'/><path d='M30 10 L30 20'/><path d='M40 10 L40 20'/><path d='M50 5 L50 20'/></g>";
        t[2] = "</pattern></defs><rect x='0' y='0' width='100%' height='20' fill='url(#pp)'/></svg>";
        return t.join("\n");
    }
}