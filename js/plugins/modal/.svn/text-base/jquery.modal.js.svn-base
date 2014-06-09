//      Pop Easy | jQuery Modal Plugin
//      Version 1.0
//      Created 2013 by Thomas Grauer
///////////////////////////////////////////////////////////////////////////////////////
//      Permission is hereby granted, free of charge, to any person obtaining
//      a copy of this software and associated documentation files (the
//      "Software"), to deal in the Software without restriction, including
//      without limitation the rights to use, copy, modify, merge, publish,
//      distribute, sublicense, and/or sell copies of the Software, and to
//      permit persons to whom the Software is furnished to do so, subject to
//      the following conditions:
//
//      The above copyright notice and this permission notice shall be
//      included in all copies or substantial portions of the Software.
//
//      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//      LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
//      OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//      WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////////

(function(){

    $.fn.modal= function(options){

        options = $.extend({
            trigger: '.modalLink',
            olay: 'div.overlay',
            modals: 'div.modal',
            animationEffect: 'fadeIn',
            animationSpeed: 10,
            moveModalSpeed: 'slow',
            background: '000',
            opacity: 0.8,
            openOnLoad: false,
            docClose: false,
            closeByEscape: false,
            moveOnScroll: true,
            resizeWindow: false,
            video:'',
            videoClass:'video',
            close:'.bt-close'

        },options);

        var olay = $(options.olay);
        var modals = $(options.modals);
        var currentModal;
        var isopen=false;

        if (options.animationEffect==='fadein'){options.animationEffect = 'fadeIn';}
        if (options.animationEffect==='slidedown'){options.animationEffect = 'slideDown';}

        olay.css({opacity : 0});

        if(options.openOnLoad) {
            openModal();
        }else{
            olay.hide();
            modals.hide();
        }

        $(options.trigger).bind('click', function(e){
            e.preventDefault();

            if ($('.modalLink').length >1) {
                getModal = $(this).attr('href');
                currentModal = $(getModal);
            }else{
                currentModal = $('.modal');
            }
            openModal();
        });

        function openModal(){
            // disable_scroll();
            $('.' + options.videoClass).attr('src',options.video);
            modals.hide();
            currentModal.css({
                top:$(window).height() /2 - currentModal.outerHeight() /2 + $(window).scrollTop(),
                left:$(window).width() /2 - currentModal.outerWidth() /2 + $(window).scrollLeft()
            });

            if(isopen===false){
                olay.css({opacity : options.opacity, backgroundColor: '#'+options.background});
                olay[options.animationEffect](options.animationSpeed);
                currentModal.delay(options.animationSpeed)[options.animationEffect](options.animationSpeed);
            }else{
                currentModal.show();
            }

            isopen=true;
        }

        function moveModal(){
            modals
            .stop(true)
            .animate({
            top:$(window).height() /2 - modals.outerHeight() /2 + $(window).scrollTop(),
            left:$(window).width() /2 - modals.outerWidth() /2 + $(window).scrollLeft()
            },options.moveModalSpeed);
        }

        function closeModal(){
            // enable_scroll();
            $('.' + options.videoClass).attr('src','');
            isopen=false;
            modals.fadeOut(100, function(){
                if (options.animationEffect === 'slideDown') {
                    olay.slideUp();
                }else if (options.animationEffect === 'fadeIn') {
                    olay.fadeOut();
                }
            });

            if (window.previousView && window.previousView.clean) window.previousView.clean();

            $('#modal1').attr('class', 'modal');
            app_router.navigate('/',false);
            return false;
        }

        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        var keys = [37, 38, 39, 40];

        function preventDefault(e) {
          e = e || window.event;
          if (e.preventDefault)
              e.preventDefault();
          e.returnValue = false;
        }

        function keydown(e) {
            for (var i = keys.length; i--;) {
                if (e.keyCode === keys[i]) {
                    preventDefault(e);
                    return;
                }
            }
        }

        function wheel(e) {
          preventDefault(e);
        }

        function disable_scroll() {
          if (window.addEventListener) {
              window.addEventListener('DOMMouseScroll', wheel, false);
              window.addEventListener('mousewheel', wheel, false);
              window.addEventListener('wheel', wheel, false);
          }
          window.onmousewheel = document.onmousewheel = wheel;
          document.onkeydown = keydown;
        }

        function enable_scroll() {
            if (window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', wheel, false);
                window.removeEventListener('mousewheel', wheel, false);
                window.removeEventListener('wheel', wheel, false);
            }
            window.onmousewheel = document.onmousewheel = document.onkeydown = null;
        }

        if(options.docClose){
            olay.bind('click touchstart', closeModal);
        }

        $(document).on('click touchstart', options.close, closeModal);

        if (options.closeByEscape) {
            $(window).bind('keyup', function(e){
                if(e.which === 27){
                    closeModal();
                }
            });
        }

        if (options.resizeWindow) {
            $(window).bind('resize', moveModal);
        }else{
            return false;
        }

        if (options.moveOnScroll) {
            $(window).bind('scroll', moveModal);
        }else{
            return false;
        }
    };
})();
