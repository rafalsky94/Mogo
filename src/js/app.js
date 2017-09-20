

let swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        const titles = ["01 INTRO", "02 WORK", "03 ABOUT", "04 CONTACTS"];
        return '<span class="' + className + '">' + titles[index] + '</span>';
    }
});


$(()=> {
    const textContent = $(".text-content");

    textContent.find("p").hide();

    textContent.find("h2").on("click", (e) => {;

        $(e.target).next().toggle();
        
    })

});