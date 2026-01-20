import { projects } from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
    //data 가져오기
    const projectItems = document.querySelector(".project_items");

    projects.forEach((data) => {
        const projectItem = document.createElement("div");
        projectItem.className = "project_item";

        const tagList = data.tag.map((t) => `<li>${t}</li>`).join("");

        projectItem.innerHTML = `
            <div class="img_area">
                <img src="${data.url}" alt="" />
            </div>
            <div class="txt_area">
                <p class="sub_tit">${data.name}</p>
                <ul class="tag_list">
                    ${tagList}
                </ul>
                <div class="btn_area">
                    <button class="btn btn_icon btn_ghost">
                        <span class="material-symbols-outlined"> edit</span>
                        수정
                    </button>
                    <button class="btn btn_icon btn_ghost" id="btn_copy">
                        <span class="material-symbols-outlined"> content_copy </span>
                        복사
                    </button>
                </div>
            </div>
        `;

        projectItems.appendChild(projectItem);
    });

    //복사
    const items = document.querySelectorAll(".project_item");

    items.forEach((item) => {
        item.addEventListener("click", () => {
            const title = item.querySelector(".sub_tit").textContent.trim();

            navigator.clipboard
                .writeText(title)
                .then(() => {
                    showToast(title);
                })
                .catch((err) => console.error(err));
        });
    });

    function showToast(message) {
        const toast = document.getElementById("project_toast");
        toast.textContent = message;

        // 토스트 표시
        toast.classList.add("show");

        // 2초 후 사라짐
        setTimeout(() => {
            toast.classList.remove("show");
        }, 1500);
    }
});
