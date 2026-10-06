$(document).ready(function () {

    /* -----------------------------
       DARK MODE
    ----------------------------- */

    $("#themeBtn").click(function () {

        $("body").toggleClass("dark");

        if ($("body").hasClass("dark")) {
            $(this).text("☀");
        } else {
            $(this).text("☾");
        }

    });


    /* -----------------------------
       PAGE FADE EFFECT
    ----------------------------- */

    $("main, .hero, .quick").hide().fadeIn(700);


    /* -----------------------------
       PROJECT HOVER EFFECT
    ----------------------------- */

    $(".project-card").hover(
        function () {
            $(this).css("border-color", "#087f8c");
        },
        function () {
            $(this).css("border-color", "#dce5e7");
        }
    );


    /* -----------------------------
       CONTACT FORM VALIDATION
    ----------------------------- */

    $("#contactForm").submit(function (event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        if (name === "" ||
            email === "" ||
            subject === "" ||
            message === "") {

            $("#formMessage")
                .text("Please fill in all fields.")
                .css("color", "red");

            return;
        }


        let emailPattern =
            /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


        if (!email.match(emailPattern)) {

            $("#formMessage")
                .text("Please enter a valid email address.")
                .css("color", "red");

            return;
        }


        $("#formMessage")
            .text("Message submitted successfully!")
            .css("color", "#087f8c");


        $("#contactForm")[0].reset();

    });


    /* -----------------------------
       SKILL BAR ANIMATION
    ----------------------------- */

    $(".progress").each(function () {

        let width = $(this).css("width");

        $(this).css("width", "0");

        $(this).animate(
            { width: width },
            1200
        );

    });


    /* -----------------------------
       SMOOTH BUTTON EFFECT
    ----------------------------- */

    $(".btn").click(function () {

        $(this).animate(
            { opacity: 0.7 },
            100
        ).animate(
            { opacity: 1 },
            100
        );

    });

});