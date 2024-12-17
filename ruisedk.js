$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://cdn.jsdelivr.net/gh/rltzhdls/lh@main/lh.mp4";
        document.getElementById('vd').load();
    }
	}
});

