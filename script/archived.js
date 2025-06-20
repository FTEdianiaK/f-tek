function archived(url) {
    if (confirm("This link has been archived, meaning that the page (and associated profile) may not contain all the newest items and may hold outdated information. Tread with care.") == true) {
        window.location.href = url;
    }
};
