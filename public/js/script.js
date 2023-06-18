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
            animation: "zoom-out-2 1.5s ease-out",
            scale: "0.3 0.3",
            opacity: "0",
        });
        $("#second-card").css({
            animation: "zoom-in 1.5s ease-out",
            scale: "1 1",
            opacity: "100%",
            display: "block",
        });
        $("#second-card").addClass(
            "position-absolute top-0 start-50 translate-middle-x mt-4"
        );
    });
    //PREVIOUS PERTAMA DITEKAN
    $("#navigasi").on("click", ".previous-1", function () {
        //Navigasinya
        $("#next").addClass("next-1");
        $("#next").removeClass("next-2");
        $("#previous").addClass("d-none");
        $("#previous").removeClass("previous-1");
        //Card-nya
        $("#first-card").css({
            animation: "zoom-in 1.5s ease-out",
            scale: "1 1",
            opacity: "100%",
        });
        $("#second-card").css({
            animation: "zoom-out-2 1.5s ease-out",
            scale: "0.3 0.3",
            opacity: "0",
        });
        // $("#second-card").addClass(
        //     "position-absolute top-0 start-50 translate-middle-x mt-4"
        // );
    });
});
