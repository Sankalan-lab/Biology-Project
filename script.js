/* =========================================================
   GENETIC DISORDERS BIOLOGY PROJECT
   JavaScript
   ========================================================= */


/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("genetics-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "genetics-theme",
            "dark"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "genetics-theme",
            "light"
        );

    }

});


/* =========================================================
   ANIMATED STATISTICS
   ========================================================= */

const statNumbers =
    document.querySelectorAll(".stat-number");


let statsStarted = false;


function animateStatistics() {

    if (statsStarted) return;

    statsStarted = true;


    statNumbers.forEach((counter) => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const duration = 1500;

        const increment =
            target / (duration / 30);


        const updateCounter = () => {

            current += increment;


            if (current < target) {

                counter.textContent =
                    Math.floor(current);

                setTimeout(
                    updateCounter,
                    30
                );

            } else {

                counter.textContent =
                    target;

            }

        };


        updateCounter();

    });

}


/* Start animation when statistics become visible */

const statisticsSection =
    document.querySelector(".statistics");


const statsObserver =
    new IntersectionObserver(
        (entries) => {

            if (entries[0].isIntersecting) {

                animateStatistics();

                statsObserver.disconnect();

            }

        },
        {
            threshold: 0.3
        }
    );


statsObserver.observe(statisticsSection);


/* =========================================================
   CHROMOSOME INTERACTION
   ========================================================= */

const chromosomeButtons =
    document.querySelectorAll(".chromosome");


const chromosomeInfo =
    document.getElementById("chromosomeInfo");


const chromosomeData = {

    "1": {
        title: "Chromosome 1",
        text: "Chromosome 1 is the largest human chromosome. Changes involving genes on chromosome 1 can contribute to several genetic conditions."
    },

    "2": {
        title: "Chromosome 2",
        text: "Chromosome 2 contains many genes important for human development and biological functions."
    },

    "3": {
        title: "Chromosome 3",
        text: "Chromosome 3 contains genes involved in many cellular processes. Variants in some of these genes can contribute to inherited conditions."
    },

    "4": {
        title: "Chromosome 4",
        text: "Huntington's disease is associated with a mutation in the HTT gene located on chromosome 4."
    },

    "5": {
        title: "Chromosome 5",
        text: "Changes affecting chromosome 5 can be associated with several genetic conditions, including some chromosomal deletion syndromes."
    },

    "6": {
        title: "Chromosome 6",
        text: "Chromosome 6 contains many genes involved in immunity and other biological processes."
    },

    "7": {
        title: "Chromosome 7",
        text: "Chromosome 7 contains genes involved in growth, development and cellular functions."
    },

    "8": {
        title: "Chromosome 8",
        text: "Chromosome 8 contains genes involved in a variety of biological processes and human traits."
    },

    "9": {
        title: "Chromosome 9",
        text: "Chromosome 9 contains many genes and regions important for normal human development."
    },

    "10": {
        title: "Chromosome 10",
        text: "Chromosome 10 contains genes involved in cellular development and physiological processes."
    },

    "11": {
        title: "Chromosome 11",
        text: "Chromosome 11 contains genes including the HBB gene. Variants in HBB can cause sickle cell disease and beta thalassemia."
    },

    "12": {
        title: "Chromosome 12",
        text: "Chromosome 12 contains many genes involved in metabolism, development and other cellular functions."
    },

    "13": {
        title: "Chromosome 13",
        text: "Chromosome 13 contains numerous genes. Some chromosomal abnormalities involving chromosome 13 can cause genetic conditions."
    },

    "14": {
        title: "Chromosome 14",
        text: "Chromosome 14 contains genes involved in many cellular processes and human development."
    },

    "15": {
        title: "Chromosome 15",
        text: "Changes involving chromosome 15 can be associated with several genetic conditions."
    },

    "16": {
        title: "Chromosome 16",
        text: "Chromosome 16 contains many genes important for normal cellular and developmental processes."
    },

    "17": {
        title: "Chromosome 17",
        text: "Chromosome 17 contains several important genes involved in cell growth, repair and other biological functions."
    },

    "18": {
        title: "Chromosome 18",
        text: "An extra copy of chromosome 18 causes trisomy 18, also known as Edwards syndrome."
    },

    "19": {
        title: "Chromosome 19",
        text: "Chromosome 19 is relatively gene-rich and contains many genes involved in metabolism and other cellular processes."
    },

    "20": {
        title: "Chromosome 20",
        text: "Chromosome 20 contains genes involved in development and cellular functions."
    },

    "21": {
        title: "Chromosome 21",
        text: "An extra copy of chromosome 21 causes trisomy 21, the chromosomal basis of Down syndrome."
    },

    "22": {
        title: "Chromosome 22",
        text: "Chromosome 22 contains many genes. Structural changes involving this chromosome can contribute to genetic conditions."
    }

};


chromosomeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        chromosomeButtons.forEach((item) => {
            item.classList.remove("active");
        });


        button.classList.add("active");


        const chromosome =
            button.dataset.chromosome;


        if (!chromosomeData[chromosome]) {

            chromosomeInfo.innerHTML = `

                <div class="chromosome-number">
                    ${chromosome}
                </div>

                <h3>
                    Sex Chromosome ${chromosome}
                </h3>

                <p>
                    X and Y are the human sex chromosomes.
                    Their combinations contribute to typical patterns
                    of sex development.
                </p>

                <div class="chromosome-fact">
                    <strong>
                        23rd chromosome pair
                    </strong>

                    <span>
                        Humans normally have one pair of sex chromosomes.
                    </span>
                </div>

            `;

            return;

        }


        const data =
            chromosomeData[chromosome];


        chromosomeInfo.innerHTML = `

            <div class="chromosome-number">
                ${chromosome}
            </div>

            <h3>
                ${data.title}
            </h3>

            <p>
                ${data.text}
            </p>

            <div class="chromosome-fact">

                <strong>
                    Chromosome ${chromosome}
                </strong>

                <span>
                    Click another chromosome to explore more.
                </span>

            </div>

        `;


        chromosomeInfo.style.animation =
            "none";

        chromosomeInfo.offsetHeight;

        chromosomeInfo.style.animation =
            "modalIn 0.35s ease";

    });

});


/* =========================================================
   DISORDER MODAL
   ========================================================= */

const learnButtons =
    document.querySelectorAll(".learn-more");


const modal =
    document.getElementById("infoModal");


const modalTitle =
    document.getElementById("modalTitle");


const modalText =
    document.getElementById("modalText");


const closeModal =
    document.getElementById("closeModal");


learnButtons.forEach((button) => {

    button.addEventListener("click", () => {

        modalTitle.textContent =
            button.dataset.title;

        modalText.textContent =
            button.dataset.info;

        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    });

});


function closeInformationModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


closeModal.addEventListener(
    "click",
    closeInformationModal
);


modal.addEventListener(
    "click",
    (event) => {

        if (event.target === modal) {

            closeInformationModal();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeInformationModal();

        }

    }
);


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

document
    .querySelectorAll(".navbar nav a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".info-card, " +
        ".disorder-card, " +
        ".pattern-card, " +
        ".dna-point, " +
        ".timeline-item"
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 120;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.style.color =
                    "var(--primary)";

            }

        });

    }
);