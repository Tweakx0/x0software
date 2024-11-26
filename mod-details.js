// Mod data structure
const mods = [
    {
        id: 1,
        title: "B06 WARZONE ESP + AIMBOT",
        author: "Tweakx0",
        version: "v2.4.1",
        lastUpdated: "11-21-24",
        description: [
            "Undetectable ESP with high accuracy",
            "Advanced aimbot with customizable settings",
            "Works with latest game updates",
            "Smooth and responsive performance"
        ],
        systemRequirements: [
            "Windows 10/11 64-bit",
            "Intel Core i5 or AMD equivalent",
            "Active internet connection"
        ],
        images: [
            "https://i.postimg.cc/SxJT5rdn/WARZONETHUMB.jpg",
            "https://i.postimg.cc/7Yn1tMzn/bo6esp2.webp",
            "https://i.postimg.cc/g2cVCXqF/bo6esp3.webp",
            "https://i.postimg.cc/bw6xpy3G/bo6esp4.webp"
        ],
        downloadUrl: "https://download1507.mediafire.com/nzro5ynt8irgpAHISf3LyNOwbMX46W94R1l-2PliAhORX5K29260M-3LWpkd3abjaga2SDEzwXEs4LPaeg4PUelS9M0G6MOuDZUQXm3sfHjB14BrZGGMa3luu91bkOIPqYx6UDdh0r7yTF76qmwgLDe8Clkw4pOy8tfOPJTu-g/dgjvd0h0t9my8nn/X0WZ.zip"
    },
    {
        id: 2,
        title: "X0 HWID SPOOFER",
        author: "Tweakx0",
        version: "v2.6.9",
        lastUpdated: "2-13-24",
        description: [
            "Undetectable HWID spoofing",
            "MAC address randomization",
            "Any Easy Anti-Cheat Games",
            "Any BattleEye Games",
            "Any RIOT Vanguard Games",
            "All Call of Duty Games",
            "Quick and easy to use",
            "Compatible with Windows 10 and Windows 11"
        ],
        systemRequirements: [
            "Windows 10/11 64-bit",
            "Intel Core i5 or AMD equivalent",
            "Active internet connection"
        ],
        images: [
            "https://i.postimg.cc/zXd20MCm/HWID-THUMBNAIL.jpg",
            "https://i.postimg.cc/DwP43c4d/HWID1.png",
            "https://i.postimg.cc/mgpR9cvW/HWID2.png",
            "https://i.postimg.cc/zfLNFzNb/HWID5.png",
            "https://i.postimg.cc/4dVTjWmX/HWID6.png"
        ],
        downloadUrl: "https://download856.mediafire.com/hw1dmdkofrrgVz8F47_B31ungBpIEmbG6gbayC6AK11hN7WNzWKRP6zX31c6fSDo80Q-5FgIHbdSelbnG-AU7iVNoW-aN6mtBbr5B9KtOsXYV5sLqmI8gcTbudEVmcC9HgjvczVcc2uiC8gkhO6zySyeiz9RwfRbpd1aojRmfQ/1x4idywkcjywrbr/X0POOF.zip"
    },
    {
        id: 3,
        title: "FORNITE ESP + AIMBOT",
        author: "Tweakx0",
        version: "v2.1.0",
        lastUpdated: "11-6-24",
        description: [
            "100% Configurable Menu",
            "Save / Load Configs",
            "Multiple Configs",
            "Streamproof",
            "Player ESP",
            "Item ESP",
            "Spectator List",
            "Fully Undetectable",
            "Seamless injection"
        ],
        systemRequirements: [
            "Windows 10/11 64-bit",
            "Intel Core i5 or AMD equivalent",
            "Active internet connection"
        ],
        images: [
            "https://i.postimg.cc/6561VwGL/FORTNITETHUMB.jpg",
            "https://i.postimg.cc/7Yr8nD1T/fortnite-legit-2-1.webp",
            "https://i.postimg.cc/CLCyvtJr/fortnite-legit-3-1.webp"

        ],
        downloadUrl: "https://download944.mediafire.com/xujfk82xjdjgBYTLfHSXGOvJjmMo4NlINxfhjYZGxzM5vwMoPY932NhHzEpSsizlIIYyJEhSjr2vO8KY1WJCCU0jzntky48hxjtJP0S45EtXcNCLNchWlK4lXQQGa5DTqze9gzw920ZFte5YRuU9a2zQGkij12QCg-miLKNpKQ/ul8i9fuhqimlk69/X0FN.zip"
    }
];

function getModIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"), 10);
}

function findModById(id) {
    return mods.find(mod => mod.id === id);
}

function renderModDetails(mod) {
    const container = document.getElementById('modDetailsContainer');
    
    container.className = 'max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg border border-green-500/20 backdrop-blur-md hover:border-green-400/30 transition-all duration-300';

    if (!mod) {
        container.innerHTML = `
            <h1 class="text-xl font-bold text-center">Mod Not Found</h1>
            <p class="text-center mt-4 text-sm">The mod you are looking for does not exist. Please return to the <a href="index.html" class="text-green-400 hover:underline">main page</a>.</p>
        `;
        return;
    }

    const slideshow = `
    <div class="slideshow-container relative w-full pb-[56.25%] overflow-hidden rounded-lg">
        ${mod.images
            .map(
                (image, index) =>
                    `<img src="${image}" class="slide absolute top-0 left-0 w-1920 h-1080 object-cover ${index === 0 ? '' : 'hidden'}" alt="Slide ${index + 1}">`
            )
            .join("")}
        ${mod.images.length > 1 ? `
        <div class="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-2">
            <button class="slideshow-button bg-gray-700 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full text-white text-sm" onclick="previousSlide()">&#10094;</button>
            <button class="slideshow-button bg-gray-700 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full text-white text-sm" onclick="nextSlide()">&#10095;</button>
        </div>
        ` : ''}
    </div>
    <div class="status-bar bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 mt-4 border border-gray-700/50">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="flex items-center">
                    <div class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span class="text-green-400 text-sm font-medium">Service Online</span>
                </div>
                <div class="h-4 w-px bg-gray-700"></div>
                <div class="flex items-center">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-gray-300 text-sm">Last Updated: ${mod.lastUpdated || 'March 24, 2024'}</span>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <div>
                </div>
            </div>
        </div>
    </div>
`;

const systemRequirements = mod.systemRequirements.map(point => `
    <li class="flex items-start mb-2">
        <span class="text-green-400 mr-2 text-base">•</span>
        <span class="text-gray-300 text-sm">${point}</span>
    </li>
`).join('');

    const descriptionBullets = mod.description.map(point => `
        <li class="flex items-start mb-2">
            <span class="text-green-400 mr-2 text-base">•</span>
            <span class="text-gray-300 text-sm">${point}</span>
        </li>
    `).join('');

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 max-w-4xl mx-auto">
            <div class="w-full">
                ${slideshow}
            </div>
            <div class="flex flex-col justify-between space-y-4">
                <div>
                    <h1 class="text-2xl font-bold mb-1 text-green-400">${mod.title}</h1>
                    <p class="text-sm text-green-200/60 mb-3">By ${mod.author}</p>
                    <div class="mb-4">
                        <h3 class="text-lg font-semibold mb-2 text-green-300">Features:</h3>
                        <ul class="list-none pl-0 space-y-1">
                            ${descriptionBullets}
                        </ul>
                    </div>
                    <ul class="mb-4 space-y-2">
                                        <div class="mb-4">
                        <h3 class="text-lg font-semibold mb-2 text-green-300">System Requrements:</h3>
                        <ul class="list-none pl-0 space-y-1">
                            ${systemRequirements}
                        </ul>
                    </div>
                    <ul class="mb-4 space-y-2">
                        <li class="text-green-200/60 text-sm"><strong class="text-green-300">Version:</strong> ${mod.version}</li>
                    </ul>
                </div>
                <a href="${mod.downloadUrl}" download class="bg-gray-500 hover:bg-green-600 px-4 py-2 rounded text-white text-sm font-medium inline-block transition-colors duration-200 self-start text-center">
                    Download
                </a>
            </div>
        </div>
    `;
}

let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 1) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("hidden", i !== index);
        });
    }
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 1) {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }
}

function previousSlide() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 1) {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }
}

const modId = getModIdFromUrl();
const mod = findModById(modId);
renderModDetails(mod);