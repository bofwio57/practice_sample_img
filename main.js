import { projects } from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
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
            </div>
        `;

        projectItems.appendChild(projectItem);
    });
});
