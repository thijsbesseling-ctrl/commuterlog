// Taalwissel NL/EN: toont alle [data-lang]-elementen van de gekozen taal.
// Keuze onthouden in localStorage; standaard Nederlands.
function setLang(lang) {
    document.querySelectorAll("[data-lang]").forEach(function (el) {
        el.hidden = el.getAttribute("data-lang") !== lang;
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
        btn.classList.toggle("active", btn.id === "btn-" + lang);
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem("commuterlog-lang", lang); } catch (e) {}
}
setLang((function () {
    try { return localStorage.getItem("commuterlog-lang") || "nl"; } catch (e) { return "nl"; }
})());
