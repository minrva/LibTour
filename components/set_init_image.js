if (current === img_c04 || current === img_e16) {
    document.getElementById('carmera').setAttribute("rotation", "0 90 0");
}
if (current === img_c04 || current === img_0006) {
    document.getElementById('goRightLink').setAttribute("visible", false);
}
if (current === img_c04 || current === img_0006 || current === img_e16) {
    document.getElementById('goForwardLink').setAttribute("visible", true);
    document.getElementById('goBackwardLink').setAttribute("visible", true);
}