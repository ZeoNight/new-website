document.body.innerHTML = `<iframe id="video" src="https://www.youtube.com/embed/j40p3_YduIM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="2140" height="1000" frameborder="0"></iframe>`
let elem = document.getElementById("video");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
openFullScreen();
