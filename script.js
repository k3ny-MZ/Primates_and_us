const pages = ["home", "exhibit", "animal", "about"];

  function showPage(name) {
    pages.forEach(pageName => {
      const page = document.getElementById("page-" + pageName);
      if (page) {
        page.classList.remove("active");
        page.style.display = "none";
      }
    });

    const target = document.getElementById("page-" + name);
    if (target) {
      target.style.display = "block";
      target.classList.add("active");
    }

    document.querySelectorAll(".nav-links a").forEach(link => link.classList.remove("active"));
    const activeLink = document.getElementById("nav-" + name);
    if (activeLink) {
      activeLink.classList.add("active");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showAnimal(name) {
    document.querySelectorAll(".animal-detail").forEach(detail => {
      detail.classList.remove("active");
    });

    const selected = document.getElementById("detail-" + name);
    if (selected) {
      selected.classList.add("active");
    }

    showPage("animal");
  }

  document.querySelectorAll(".page").forEach(page => {
    page.style.display = "none";
  });
  document.getElementById("page-home").style.display = "block";
