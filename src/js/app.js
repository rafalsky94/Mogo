

let swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        const titles = ["01 INTRO", "02 WORK", "03 ABOUT", "04 CONTACTS"];
        return '<span class="' + className + '">' + titles[index] + '</span>';
    }
});


$(()=> {
    $("a").on("click", (e) => {
        $(e.target).css("text-decoration", "underline");
    })













});