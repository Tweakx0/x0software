// Mod data structure
const mods = [
    {
        id: 1,
        title: "B06 WARZONE ESP + AIMBOT",
        author: "Tweakx0",
        version: "v2.4.1",
        description: "Best in class, FUD. ESP, Aimbot, Raygun, custom weapon fov slider, and more.",
        rating: 4.9,
        downloads: 10000,
        date: "2024-03-18",
        image: "https://i.postimg.cc/SxJT5rdn/WARZONETHUMB.jpg",
        downloadUrl: "https://gofile.io/d/VeUTqK"
    },
    {
        id: 2,
        title: "X0 HWID SPOOFER",
        author: "Tweakx0",
        version: "v2.6.9",
        description: "Undetectable HWID, MAC Spoofing. Almost all games supported.",
        rating: 4.8,
        downloads: 30000,
        date: "2024-03-15",
        image: "https://i.postimg.cc/zXd20MCm/HWID-THUMBNAIL.jpg",
        downloadUrl: "https://gofile.io/d/VeUTqK"
    },
    {
        id: 3,
        title: "FORNITE ESP + AIMBOT",
        author: "Tweakx0",
        version: "v2.1.0",
        description: "Fortnite ESP + AIM. Full customizable, FUD and super easy to use.",
        rating: 4.6,
        downloads: 15000,
        date: "2024-03-10",
        image: "https://i.postimg.cc/6561VwGL/FORTNITETHUMB.jpg",
        downloadUrl: "https://gofile.io/d/VeUTqK"
    }
];

// Function to create a mod card
function createModCard(mod) {
    return `
        <div class="card-hover bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700">
            <img src="${mod.image}" alt="${mod.title}" class="w-full h-50 object-cover"/>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h3 class="text-lg font-semibold">${mod.title}</h3>
                        <p class="text-xs text-gray-400">By ${mod.author}</p>
                    </div>
                    <span class="bg-blue-600 px-2 py-0.5 rounded-full text-xs">${mod.version}</span>
                </div>
                <p class="text-sm text-gray-300 mb-3">${mod.description}</p>
                <div class="flex justify-between items-center text-sm">
                    <div class="flex items-center space-x-2">
                        <span class="text-yellow-400">★</span>
                        <span class="text-gray-400">${mod.rating}</span>
                        <span class="text-gray-600">•</span>
                        <span class="text-gray-400">${(mod.downloads / 100).toFixed(0)}+</span>
                    </div>
                    <a href="mod-details.html?id=${mod.id}" class="bg-blue-600 hover:bg-blue-700 px-1 py-1 rounded text-sm">Download</a>
                </div>
            </div>
        </div>
    `;
}

// Function to sort mods
function sortMods(sortBy) {
    switch (sortBy) {
        case 'popular':
            return [...mods].sort((a, b) => b.downloads - a.downloads);
        case 'latest':
            return [...mods].sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'rating':
            return [...mods].sort((a, b) => b.rating - a.rating);
        default:
            return mods;
    }
}

// Function to render mods
function renderMods(sortBy = 'popular') {
    const container = document.getElementById('modsContainer');
    const sortedMods = sortMods(sortBy);
    container.innerHTML = sortedMods.map(mod => createModCard(mod)).join('');
}

// Add event listener for sort select
document.getElementById('sortSelect').addEventListener('change', (e) => {
    renderMods(e.target.value);
});

// Initial render
renderMods();

// Update Discord buttons dynamically
function updateDiscordLinks() {
    const discordLink = "https://discord.gg/2MRTPhAJxA";

    // Update footer Discord link
    const footerDiscordLink = document.querySelector('footer a[href="#"]');
    if (footerDiscordLink) {
        footerDiscordLink.href = discordLink;
        footerDiscordLink.target = "_blank";
        footerDiscordLink.rel = "noopener noreferrer";
    }
}

// Execute the update function
updateDiscordLinks();
