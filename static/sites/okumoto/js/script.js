$(function(){
    console.log('jquery on load.');
    
    $('#toggleMenu').click(function(e){
        e.preventDefault();
        // console.log('toggle');
        
        let tgt = $('.mobile-header-nav');

        if(tgt.hasClass('open')){
            $(this).find('p').text('メニュー');
            $(this).find('i.fa-times').hide();
            $(this).find('i.fa-bars').show();
            tgt.removeClass('open');
            tgt.slideUp(200);
        }else{
            $(this).find('p').text('閉じる');
            $(this).find('i.fa-bars').hide();
            $(this).find('i.fa-times').show();
            tgt.addClass('open');
            tgt.slideDown(200);
        }
    });
});