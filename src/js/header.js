const { height: pageHederHeight} = document
.querySelector(".section-header")
.getBoundingClientRect ();
document.body.style.paddingTop = `${pageHederHeight}px`;