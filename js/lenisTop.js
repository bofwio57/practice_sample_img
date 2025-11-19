window.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true, // 부드러운 스크롤
        smoothWheel: true, // 마우스 휠도 스무스
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const btnTop = document.getElementById("btn_top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });

    // top 버튼 클릭
    btnTop.addEventListener("click", (event) => {
        event.preventDefault();
        lenis.scrollTo(0, {
            duration: 0.6, // 조금 길게
            easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t), // 부드러운 곡선
        });
    });
});
