
export function hideAllSections() {
    const sections = ["homeContainer", "restaurantMenu", "contactContainer"];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.hidden = true;
        }
    });
}
