document.addEventListener("DOMContentLoaded", () => {

  const menuLinks = document.querySelectorAll(".categories a");

  const currentPage = location.pathname.split("/").pop();

  menuLinks.forEach(link => {

    const linkPage = link.href.split("/").pop();

    if (currentPage === linkPage) {
      link.classList.add("active");
    }

  });
});