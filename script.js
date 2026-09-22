/* =========================================
   CONFIGURATION
========================================= */

const AI_WORKER_URL =
    "https://biology-ai.sankalanmukhopadhyaydms600.workers.dev/";


/* =========================================
   THEME
========================================= */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("biology-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "biology-theme",
        isLight ? "light" : "dark"
    );

    themeToggle.textContent =
        isLight ? "☾" : "☀";
});


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mainNav =
    document.getElementById("mainNav");

mobileMenu.addEventListener("click", () => {

    mainNav.classList.toggle("open");

});


document.querySelectorAll("#mainNav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

        });

    });


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ANIMATED STATISTICS
========================================= */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.target
                    );

                let current = 0;

                const duration = 1000;

                const startTime =
                    performance.now();

                function updateCounter(
                    currentTime
                ) {

                    const progress =
                        Math.min(
                            (currentTime -
                                startTime) /
                            duration,
                            1
                        );

                    current =
                        Math.floor(
                            progress * target
                        );

                    counter.textContent =
                        current;

                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }

                requestAnimationFrame(
                    updateCounter
                );

                counterObserver.unobserve(
                    counter
                );

            });

        },
        {
            threshold: 0.7
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================
   CHROMOSOME DATA
========================================= */

const chromosomeData = {

    "1": {
        title: "Chromosome 1",
        text: "Chromosome 1 is the largest human chromosome and contains many genes involved in a wide range of biological functions."
    },

    "2": {
        title: "Chromosome 2",
        text: "Chromosome 2 contains many genes involved in development, cellular processes and metabolism."
    },

    "3": {
        title: "Chromosome 3",
        text: "Chromosome 3 contains genes involved in many biological processes, including development and cell function."
    },

    "4": {
        title: "Chromosome 4",
        text: "Chromosome 4 contains numerous genes and has been associated with several inherited conditions."
    },

    "5": {
        title: "Chromosome 5",
        text: "Chromosome 5 contains genes involved in development, growth and several cellular functions."
    },

    "6": {
        title: "Chromosome 6",
        text: "Chromosome 6 contains the major histocompatibility complex, an important group of genes involved in the immune system."
    },

    "7": {
        title: "Chromosome 7",
        text: "Chromosome 7 contains many genes involved in growth, development and cellular communication."
    },

    "8": {
        title: "Chromosome 8",
        text: "Chromosome 8 contains genes involved in cell growth, development and other biological functions."
    },

    "9": {
        title: "Chromosome 9",
        text: "Chromosome 9 contains genes associated with blood groups and many other biological processes."
    },

    "10": {
        title: "Chromosome 10",
        text: "Chromosome 10 contains numerous genes involved in cellular signalling and development."
    },

    "11": {
        title: "Chromosome 11",
        text: "Chromosome 11 contains genes including those involved in haemoglobin production and many other processes."
    },

    "12": {
        title: "Chromosome 12",
        text: "Chromosome 12 contains genes involved in growth, metabolism and cellular functions."
    },

    "13": {
        title: "Chromosome 13",
        text: "Chromosome 13 contains many genes. Changes involving chromosome 13 can contribute to certain genetic conditions."
    },

    "14": {
        title: "Chromosome 14",
        text: "Chromosome 14 contains genes involved in immune function, development and cellular processes."
    },

    "15": {
        title: "Chromosome 15",
        text: "Chromosome 15 contains many genes and regions involved in development and nervous-system function."
    },

    "16": {
        title: "Chromosome 16",
        text: "Chromosome 16 contains genes involved in metabolism, development and other cellular processes."
    },

    "17": {
        title: "Chromosome 17",
        text: "Chromosome 17 contains important genes involved in cell growth, DNA repair and other functions."
    },

    "18": {
        title: "Chromosome 18",
        text: "Chromosome 18 contains many genes and has been studied in relation to several genetic conditions."
    },

    "19": {
        title: "Chromosome 19",
        text: "Chromosome 19 is relatively gene-rich and contains genes involved in many biological processes."
    },

    "20": {
        title: "Chromosome 20",
        text: "Chromosome 20 contains genes involved in metabolism, development and cellular communication."
    },

    "21": {
        title: "Chromosome 21",
        text: "Chromosome 21 is one of the smallest human chromosomes. An extra copy of chromosome 21 is associated with Down syndrome."
    },

    "22": {
        title: "Chromosome 22",
        text: "Chromosome 22 is one of the smaller autosomes and contains many genes involved in development and cellular function."
    },

    "X": {
        title: "X Chromosome",
        text: "The X chromosome is one of the two human sex chromosomes and contains many genes important for normal development and biological functions."
    },

    "Y": {
        title: "Y Chromosome",
        text: "The Y chromosome is one of the two human sex chromosomes and contains genes involved in sex determination and reproductive development."
    }

};


/* =========================================
   CREATE CHROMOSOME GRID
========================================= */

const chromosomeGrid =
    document.getElementById(
        "chromosomeGrid"
    );

const chromosomeInfo =
    document.getElementById(
        "chromosomeInfo"
    );

Object.keys(chromosomeData)
    .forEach(chromosome => {

        const button =
            document.createElement("button");

        button.className =
            "chromosome";

        button.textContent =
            chromosome;

        button.setAttribute(
            "aria-label",
            `Chromosome ${chromosome}`
        );

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".chromosome"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });

                button.classList.add(
                    "active"
                );

                const data =
                    chromosomeData[
                        chromosome
                    ];

                chromosomeInfo.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.text}</p>
                `;

            }
        );

        chromosomeGrid.appendChild(
            button
        );

    });


/* =========================================
   DISORDER MODAL
========================================= */

const disorderData = {

    down: {
        tag: "Chromosomal",
        title: "Down Syndrome",
        text:
            "Down syndrome is a genetic condition usually caused by an extra copy of chromosome 21. It can affect physical development, learning and health in different ways."
    },

    sickle: {
        tag: "Single-gene",
        title: "Sickle Cell Disease",
        text:
            "Sickle cell disease is a group of inherited blood disorders involving changes in the HBB gene. These changes affect haemoglobin and red blood cells."
    },

    haemophilia: {
        tag: "X-linked",
        title: "Haemophilia",
        text:
            "Haemophilia is a group of inherited bleeding disorders in which the blood does not clot normally because of a deficiency or absence of certain clotting factors."
    },

    thalassemia: {
        tag: "Inherited blood disorder",
        title: "Thalassemia",
        text:
            "Thalassemia is an inherited blood disorder in which the body produces reduced or abnormal amounts of haemoglobin."
    },

    huntington: {
        tag: "Autosomal dominant",
        title: "Huntington's Disease",
        text:
            "Huntington's disease is an inherited disorder caused by changes in the HTT gene. It affects the nervous system."
    },

    turner: {
        tag: "Chromosomal",
        title: "Turner Syndrome",
        text:
            "Turner syndrome is a chromosomal condition in which a female has complete or partial absence of one X chromosome."
    }

};


const modal =
    document.getElementById(
        "disorderModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalTag =
    document.getElementById(
        "modalTag"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalText =
    document.getElementById(
        "modalText"
    );


document.querySelectorAll(".learn-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const key =
                    button.dataset.disorder;

                const data =
                    disorderData[key];

                if (!data)
                    return;

                modalTag.textContent =
                    data.tag;

                modalTitle.textContent =
                    data.title;

                modalText.textContent =
                    data.text;

                modal.classList.add(
                    "show"
                );

            }
        );

    });


modalClose.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "show"
        );

    }
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            modal.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   AI CHAT
========================================= */

const aiForm =
    document.getElementById(
        "aiForm"
    );

const aiInput =
    document.getElementById(
        "aiInput"
    );

const chatBox =
    document.getElementById(
        "chatBox"
    );

const sendButton =
    document.getElementById(
        "sendButton"
    );


/* Add message */

function addMessage(
    text,
    type = "ai"
) {

    const message =
        document.createElement("div");

    message.className =
        `message ${
            type === "user"
                ? "user-message"
                : "ai-message"
        }`;

    if (type === "user") {

        message.innerHTML = `
            <div class="message-avatar">
                YOU
            </div>

            <div class="message-content">
                <p></p>
            </div>
        `;

    } else {

        message.innerHTML = `
            <div class="message-avatar">
                AI
            </div>

            <div class="message-content">
                <p></p>
            </div>
        `;

    }

    message
        .querySelector("p")
        .textContent = text;

    chatBox.appendChild(message);

    chatBox.scrollTop =
        chatBox.scrollHeight;

    return message;
}


/* Loading message */

function addLoadingMessage() {

    const message =
        document.createElement("div");

    message.className =
        "message ai-message";

    message.innerHTML = `
        <div class="message-avatar">
            AI
        </div>

        <div class="message-content">
            <p class="typing">
                Thinking...
            </p>
        </div>
    `;

    chatBox.appendChild(message);

    chatBox.scrollTop =
        chatBox.scrollHeight;

    return message;
}


/* Ask AI */

async function askAI(question) {

    const trimmed =
        question.trim();

    if (!trimmed)
        return;


    addMessage(
        trimmed,
        "user"
    );


    aiInput.value = "";

    sendButton.disabled =
        true;

    const loadingMessage =
        addLoadingMessage();


    try {

        const response =
            await fetch(
                AI_WORKER_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        message: trimmed
                    })
                }
            );


        let data = {};

        try {

            data =
                await response.json();

        } catch {

            data = {};

        }


        loadingMessage.remove();


        if (!response.ok) {

            let errorText =
                data?.error ||
                "The AI service returned an error.";

            if (response.status === 404) {

                errorText =
                    "The Gemini model was not found. Check the Cloudflare Worker model ID.";

            } else if (
                response.status === 401 ||
                response.status === 403
            ) {

                errorText =
                    "Gemini rejected the API request. Check the API key and its project permissions.";

            } else if (
                response.status === 429
            ) {

                errorText =
                    "The Gemini free-tier rate limit has been reached. Please try again later.";

            }

            addMessage(
                errorText,
                "ai"
            );

            return;
        }


        if (!data.answer) {

            addMessage(
                "Gemini returned an empty answer.",
                "ai"
            );

            return;
        }


        addMessage(
            data.answer,
            "ai"
        );


    } catch (error) {

        console.error(
            "AI request failed:",
            error
        );

        loadingMessage.remove();

        addMessage(
            "I couldn't connect to the AI service. Please check your internet connection and Cloudflare Worker.",
            "ai"
        );

    } finally {

        sendButton.disabled =
            false;

        aiInput.focus();

    }

}


/* =========================================
   FORM SUBMISSION
========================================= */

aiForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        askAI(
            aiInput.value
        );

    }
);


/* =========================================
   QUICK QUESTIONS
========================================= */

document
    .querySelectorAll(
        ".quick-question"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.dataset.question;

                askAI(question);

            }
        );

    });


/* =========================================
   ENTER KEY
========================================= */

aiInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            aiForm.requestSubmit();

        }

    }
);


/* =========================================
   ESCAPE MODAL
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            modal.classList.remove(
                "show"
            );

        }

    }
);