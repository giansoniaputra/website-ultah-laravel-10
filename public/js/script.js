$(document).ready(function () {
    //ANIMASI PERTAMA MUNCUL
    $(".happy").css({
        opacity: "100%",
        animation: "luar-kiri 1.5s ease-in-out",
    });
    $(".foto-sampul").css({
        opacity: "100%",
        animation: "luar-kanan 1.5s ease-in-out",
    });
    $(".foto-bayangan").css({
        opacity: "100%",
        animation: "luar-kanan-bayangan 1.5s ease-in-out",
    });
    $(".nama").css({
        opacity: "100%",
        animation: "luar-kanan-bayangan 1.5s ease-in-out",
    });
    $(".love").css({
        opacity: "100%",
        animation: "luar-kanan-love 1.5s ease-in-out",
    });
    $(".nama").css({
        opacity: "0",
    });
    $(".foto-bintang").css({
        opacity: "0",
    });
    $(".awan-start").css({
        opacity: "100%",
        animation: "awan-in 1s ease-in-out",
        bottom: 0,
        left: 0,
    });
    $(".awan-end").css({
        opacity: "100%",
        animation: "awan-in2 1s ease-in-out",
        bottom: 0,
        right: 0,
    });
    setTimeout(function () {
        $(".foto-sampul").css({
            transform: "rotate(0)",
        });
    }, 1700);
    setTimeout(function () {
        $(".happy").css({
            animation: "cenat-cenut 2s ease-in-out infinite",
        });
        $(".nama").css({
            opacity: "100%",
            animation: "pudar 1.5s ease-in-out",
        });
        $(".kupu-kupu").css({
            opacity: "100%",
            animation: "pudar 1.5s ease-in-out",
        });
        $(".kupu-kupu2").css({
            opacity: "100%",
            animation: "pudar 1.5s ease-in-out",
        });
        $(".wish").css({
            opacity: "100%",
            animation: "pudar 1.5s ease-in-out",
        });
        $(".foto-sampul").css({
            transform: "rotate(0)",
        });
    }, 1500);
    setTimeout(function () {
        $(".foto-bintang").css({
            opacity: "100%",
            animation: "pudar 1.5s ease-in-out",
        });
        $(".kupu-kupu").css({
            animation: "cenat-cenut 1.5s ease-in-out infinite",
        });
        $(".kupu-kupu2").css({
            animation: "cenat-cenut 1.5s ease-in-out infinite",
        });
    }, 2000);
    setTimeout(function () {
        //NEXT PERTAMA DITEKAN
        $("#navigasi").on("click", ".next-1", function () {
            //Navigasinya
            $("#next").removeClass("next-1");
            $("#next").addClass("next-2");
            $("#previous").removeClass("d-none");
            $("#previous").addClass("previous-1");
            //Card-nya
            $("#first-card").css({
                animation: "zoom-out 1.5s ease-out",
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
});
