$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        
        var links = this.el.find('.links');         // 로컬변수
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)     // 이벤트
    }
    
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();
 
        $next.slideToggle();
        $this.parent().toggleClass('open');
 
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }    
 
    var accordion = new Accordion($('#profile_dropdown'), false);         // 로컬변수
});


출처: https://ooppa.tistory.com/2357 [묘한오빠의 휴지통]