$(document).ready(function () {
    

//TOP-SLIDER-INIT
//     var swiper = new Swiper('.main-slider', {
//         pagination: '.topslide-swiper-pagination',
//         paginationClickable: true,
//         nextButton: '.specialorder_blockslider-next',
//         prevButton: '.specialorder_blockslider-prev'
//     });



    //
    // $(" #searchbutton ").click(function(){
    //     var searchForm = $("#search-top");
    //    // searchForm.animate({bottom: '200px'}, "slow");
    //     searchForm.show("slow");
    //     $(" #searchbutton ").toggleClass( " searchform_close " );
    // });
    //
    // $(" .searchform_close ").click(function(){
    //     var searchForm = $("#search-top");
    //     searchForm.hide("slow");
    //     $(" #searchbutton ").toggleClass( " searchform_close " );
    // });
    //
    // .toggle( "slow", function() {
    //     // Animation complete.
    // });


    $(" #searchbutton ").click(function(){
        var searchForm = $("#search-top");

        searchForm.toggle( "slow");
        // searchForm.show("slow");

         $(" #searchbutton ").toggleClass( "searchform-close");
         $(" #searchbutton ").toggleClass( "searchform-search" );
    });
});