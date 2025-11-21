$(document).ready(function () {
    // 프로젝트별 tag를 클래스화
    $(".project_item").each(function () {
        const tags = $(this)
            .find(".tag_list li")
            .map(function () {
                return $(this).text().trim();
            })
            .get();

        tags.forEach((tag) => {
            $(this).addClass(tag);
        });
    });

    $(".filter_list>li").click(function () {
        var value = $(this).attr("data-filter");

        if (value == "all") {
            $(".project_items").fadeOut(300, () => {
                $(".project_item").show();
                $(".project_items").fadeIn("1000");
            });
        } else {
            $(".project_items").fadeOut(300, () => {
                $(".project_item")
                    .not("." + value)
                    .hide();
                $(".project_items").fadeIn("1000");
                $(".project_item")
                    .filter("." + value)
                    .show();
                $(".project_items").fadeIn("1000");
            });
        }
        $(".filter_list > li").removeClass("active");
        $(this).addClass("active");
    });
});
