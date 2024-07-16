function randomDDoE() {
    nMax = Object.keys(ddoe).length;
    n = 1 + Math.floor(Math.random() * nMax);
    showDDoE(n);
}

function showDDoE(n) {
    console.log(n);
    let textbox = document.getElementById('home-ddoe-textbox');
    let imgContainer = document.getElementById('home-ddoe-img');
    let text = ddoe[n]['desc'];
    let image = ddoe[n]['fileName'];
    let title = text.split('<br/>')[0];
    let body = text.split('<br/>').slice(1).join('<br/>');
    textbox.innerHTML = title + '<br /><br /><div id="home-ddoe-textdiv">' + body + '</div>';
    imgContainer.src = '/src/ddoe3/' + image;
}

function showNewestDDoE() {
    showDDoE(Object.keys(ddoe).length);
}