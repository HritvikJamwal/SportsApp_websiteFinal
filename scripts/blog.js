$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$("#more-blogs").click(function(){
    
    $("a").removeClass("hidden-blog");
    
  });

  $("#more-blogs").click(function () {
    $(".aside-scroll").append('<a href="" class="aside-blog bottom-blogs"><img class="aside-img"src="./img/beckham.jpg"><div class="aside-blog-info"><h4>Title Blog 1</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="aside-blog bottom-blogs"><img class="aside-img"src="./img/beckham.jpg"><div class="aside-blog-info"><h4>Title Blog 1</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="aside-blog bottom-blogs"><img class="aside-img"src="./img/beckham.jpg"><div class="aside-blog-info"><h4>Title Blog 1</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="aside-blog bottom-blogs"><img class="aside-img"src="./img/beckham.jpg"><div class="aside-blog-info"><h4>Title Blog 1</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a>');
    $("#more-blogs").remove();
});

$("#sports").click(function () {
    $(".bottom-blogs").remove();
    $(".suggestion").append('<img id="preloader"src="./img/preloader.gif">')

    setTimeout(function(){
    $("#preloader").remove();
    $(".suggestion").append('<a href="" class="sports-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Sports Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="sports-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Sports Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="sports-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Sports Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a>');
}, 2000);
});



$("#industry").click(function () {
    $(".bottom-blogs").remove();
    $(".suggestion").append('<img id="preloader"src="./img/preloader.gif">')

    setTimeout(function(){
    $("#preloader").remove();
    $(".suggestion").append('<a href="" class="industry-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Industry Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="industry-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Industry Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="industry-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Industry Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a>');
}, 2000);
});

$("#athlete").click(function () {
    $(".bottom-blogs").remove();
    $(".suggestion").append('<img id="preloader"src="./img/preloader.gif">')

    setTimeout(function(){
    $("#preloader").remove();
    $(".suggestion").append('<a href="" class="athlete-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Athlete Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="athlete-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Athlete Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="athlete-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Athlete Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a>');
}, 2000);
});

$("#equipment").click(function () {
    $(".bottom-blogs").remove();
    $(".suggestion").append('<img id="preloader"src="./img/preloader.gif">')

    setTimeout(function(){
    $("#preloader").remove();
    $(".suggestion").append('<a href="" class="athlete-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Equipment Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="athlete-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Equipment Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a> <a href="" class="athlete-blog aside-blog bottom-blogs"><img class="aside-img"src="./img/blog-img.jpg"><div class="aside-blog-info"><h4>Equipment Blog</h4><p>A small description about the blog. Lorem ipsum se nuit, cordula mit sen.</p></div></a>');
}, 2000);
});

$("#read-more").click(function(){
    $("#add-text").append('More text added, llk ach bin mit den sui lemante mui bien. capax imperii nissi imperassat. he would have gone down as being capable of ruling, had he never ruled in the first place. The quick brown fox jumped over the little lazy dog. The quick brown fox jumped over the little lazy dog. More text added, llk ach bin mit den sui lemante mui bien. capax imperii nissi imperassat. he would have gone down as being capable of ruling, had he never ruled in the first place. The quick brown fox jumped over the little lazy dog. The quick brown fox jumped over the little lazy dog. More text added, llk ach bin mit den sui lemante mui bien. capax imperii nissi imperassat. he would have gone down as being capable of ruling, had he never ruled in the first place. The quick brown fox jumped over the little lazy dog. The quick brown fox jumped over the little lazy dog. More text added, llk ach bin mit den sui lemante mui bien. capax imperii nissi imperassat. he would have gone down as being capable of ruling, had he never ruled in the first place. The quick brown fox jumped over the little lazy dog. The quick brown fox jumped over the little lazy dog. More text added, llk ach bin mit den sui lemante mui bien. capax imperii nissi imperassat. he would have gone down as being capable of ruling, had he never ruled in the first place. The quick brown fox jumped over the little lazy dog. The quick brown fox jumped over the little lazy dog. More text added, llk ach bin mit den sui lemante mui bien. capax imperii nissi imperassat. he would have gone down as being capable of ruling, had he never ruled in the first place. The quick brown fox jumped over the little lazy dog. The quick brown fox jumped over the little lazy dog.');
    $("#read-more").remove();
});