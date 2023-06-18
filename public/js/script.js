$(document).ready(function () {
    $("#first-card").css({
        animation: "zoom-in 1.5s ease-out",
        scale: "1 1",
        opacity: "100%",
    });
    //NEXT PERTAMA DITEKAN
    $("#navigasi").on("click", ".next-1", function () {
        //Navigasinya
        $("#next").removeClass("next-1");
        $("#next").addClass("next-2");
        $("#previous").removeClass("d-none");
        $("#previous").addClass("previous-1");
        //Card-nya
        $("#first-card").css({
            animation: "zoom-out 1s ease-out",
            scale: "0.3 0.3",
            opacity: "0",
        });
        setTimeout(function () {
            $("#first-card").css({
                display: "none",
            });
        }, 1000);
        setTimeout(function () {
            $("#second-card").css({
                animation: "zoom-in 1.5s ease-out",
                scale: "1 1",
                opacity: "100%",
                display: "block",
            });
        }, 1000);
    });
    //PREVIOUS PERTAMA DITEKAN
    $("#navigasi").on("click", ".previous-1", function () {
        //Navigasinya
        $("#next").addClass("next-1");
        $("#next").removeClass("next-2");
        $("#previous").addClass("d-none");
        $("#previous").removeClass("previous-1");
        //Card-nya
        $("#second-card").css({
            animation: "zoom-out-2 1s ease-out",
            scale: "0.3 0.3",
            opacity: "0",
        });
        setTimeout(function () {
            $("#second-card").css({
                display: "none",
            });
        }, 1000);
        setTimeout(function () {
            $("#first-card").css({
                animation: "zoom-in-2 1.5s ease-out",
                scale: "1 1",
                opacity: "100%",
                display: "block",
            });
        }, 1000);
    });
});
