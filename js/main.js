 $( function()
    {
        var scrollTop;
        window.onscroll = function() {
            scrollTop = $(window).scrollTop();
            
            if(scrollTop > 50){
                $('.navbar').addClass('barra');
                $('.navbar').removeClass('ontop');
            }else{
                if(!($('.navbar-collapse').hasClass('in'))){
                    $('.navbar').removeClass('barra');
                    $('.navbar').addClass('ontop');
                }
                else
                    $('.navbar').removeClass('ontop');
            }

           
        }

        var borderless = true;
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').data('thumbnailIndicators', false);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);

        $('#image-gallery-button').on('click', function (event) {
            event.preventDefault();
            blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
        });

        $('#image-gallery-button').hover(
            function() {
                $(".main .image-banner").removeClass("image-banner-effect");
                $(".main .image-banner").addClass("image-banner-effect-pos");

            },
            function() {
                $(".main .image-banner").addClass("image-banner-effect");
                $(".main .image-banner").removeClass("image-banner-effect-pos");
            }
        );

        if($( window ).width() < 768){

            $('.nav a').click(function(){
                $('.navbar-toggle').click();
            });

            window.slider = Swipe(document.getElementById('slider'), {
              speed: 400,
              auto: 3000,
              continuous: true,
              disableScroll: false,
              stopPropagation: false
            });

            $('.next-but-swipe').click(function(){
                event.preventDefault();
                slider.next();
                return false;
            });

            $('.prev-but-swipe').click(function(){
                event.preventDefault();
                slider.prev();
                return false;
            });

            $('.navbar-toggle').on('click', function(){
                $('.navbar').removeClass('ontop');
                console.log(scrollTop);
                if(($('.navbar-collapse').hasClass('in'))){
                    //$('.navbar').removeClass('barra');
                    $('.navbar-fixed-top').height('auto');
                    if(scrollTop <= 50)
                        $('.navbar').addClass('ontop');
                }else{
                    $('.navbar').addClass('barra');
                    $('.navbar-fixed-top').height('100%');
                    
                }
            });

        }

        $('.case-banner, .open-video').on('click', function(){
            $('#overlay').fadeIn();
            var video = $(this).data('video');
            var altura = $( window ).height()/2;// - 100;
            var largura = $( window ).width()/2;// - 20;
            $('.overlay-container').width(largura);
            $('.overlay-container').height(altura);
            $('.overlay-container').html(
            '<iframe src="//player.vimeo.com/video/'+video+'?title=0&amp;byline=0&amp;portrait='+((altura > largura)?'1':'0')+'&amp;color=e16126&amp;autoplay=1&amp;loop=0" width="'+largura+'" height="'+altura+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
            );
            return false
        });

        $('#overlay').on('click', function(){
            $(this).fadeOut();
            $('.overlay-container').text('');
        });
        $('#close-overlay').on('click', function(){
            $('#overlay').fadeOut();
            $('.overlay-container').text('');
        });
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                $('#overlay').fadeOut();
                $('.overlay-container').text('');
            }
        };

        

    });