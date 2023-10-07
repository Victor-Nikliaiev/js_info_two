const panes = document.querySelectorAll(".pane");

panes.forEach(pane => {
    pane.firstElementChild.onclick = function () {
        pane.remove();
    };
});
