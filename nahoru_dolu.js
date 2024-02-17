function checkWindowSize() {
        if ($(window).width() <= 680) {
            $(".vlevo-menu ul li.schovat").appendTo("footer");
        } else {
            $(".vlevo-menu ul li.schovat").appendTo(".vlevo-menu ul");
        }
    }

    $(document).ready(function() {
        checkWindowSize(); 
        $(window).resize(checkWindowSize);
    });
