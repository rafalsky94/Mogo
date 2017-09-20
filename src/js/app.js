

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

    const photo = textContent.children()[0];
    const photoPar = $(photo).find("p");

    textContent.find("p").hide();
 
    photoPar.show();
    textContent.find("h2").on("click", (e) => {;

        $(e.target).next().show();

        let firstPar = $(e.target).parent().siblings().children()[2];
        let secondPar = $(e.target).parent().siblings().children()[5];

        if (firstPar.style.display = "none") {
            $(firstPar).hide()
            $(secondPar).hide()
        }



    })

});