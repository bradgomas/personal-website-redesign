document.addEventListener("DOMContentLoaded", () => {
    // 1. SMOOTH SCROLLING FOR ANCHOR LINKS
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // 2. ACTIVE NAV LINK HIGHLIGHTING ON SCROLL
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. INTERACTIVE SKILLS FILTER
    const aboutSection = document.querySelector("#about");
    const skillsTable = document.querySelector("#about table");

    if (aboutSection && skillsTable) {
        const filterContainer = document.createElement("div");
        filterContainer.className = "skills-filter";
        filterContainer.innerHTML = `
            <span>Filter by proficiency: </span>
            <button type="button" class="filter-btn active" data-filter="all">All</button>
            <button type="button" class="filter-btn" data-filter="intermediate">Intermediate</button>
            <button type="button" class="filter-btn" data-filter="advanced">Advanced</button>
        `;

        // Insert the filter buttons right before the table
        aboutSection.insertBefore(filterContainer, skillsTable);

        const filterButtons = filterContainer.querySelectorAll(".filter-btn");
        const tableRows = skillsTable.querySelectorAll("tbody tr");

        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                // Update active button state
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-filter");

                tableRows.forEach(row => {
                    const proficiency = row.cells[1].textContent.trim().toLowerCase();
                    if (filterValue === "all" || proficiency === filterValue) {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                });
            });
        });
    }

    // 4. CLICK-TO-COPY EMAIL ADDRESS
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.textContent = "Copy";
        copyBtn.className = "copy-btn";
        copyBtn.setAttribute("aria-label", "Copy email address");

        emailLink.parentElement.appendChild(copyBtn);

        copyBtn.addEventListener("click", () => {
            const emailAddress = emailLink.textContent.trim();
            navigator.clipboard.writeText(emailAddress).then(() => {
                copyBtn.textContent = "Copied!";
                setTimeout(() => {
                    copyBtn.textContent = "Copy";
                }, 2000);
            });
        });
    }
});