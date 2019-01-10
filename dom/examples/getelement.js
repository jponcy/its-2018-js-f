function init() {
    document.getElementById('toremove').remove();

    var root = document.getElementById('toupgrade');

    'mon petit text qui est petit mais grand aussi'.split(' ').forEach((v, i) => {
        var e = document.createElement('p');
        e.innerText = v;
        e.style.height = '5vh';
        e.style.width = '100px';

        if (i % 2) e.style.background = 'gray';

        e.className = 'txt';

        root.appendChild(e);
    });

    var toup = document.getElementById('toupgrade').getElementsByTagName('p');
    for (var i in toup)
        if (i % 2 === 0) toup[i].style.background = 'silver'

}

function looplt() {
    var rootChild = document.children;
    var body = rootChild[0].children[1];

    while (body.childElementCount > 100 ? test = false : true) {
        var el = document.createElement('div');
        el.innerHTML = 'Test';
        body.appendChild(el);
    }
}

function loopltUp() {
    // var body = document.getElementsByTagName('body')[0];
    var body = document.body;

    while (body.childElementCount <= 100) {
        var el = document.createElement('div');
        el.innerHTML = 'Test';
        body.appendChild(el);
    }
}

function looplt2() {
    var rootChild = document.children;
    var body = rootChild[0].children[1];
    var el = document.createElement('div');
    el.innerHTML = 'Test';

    while (body.childElementCount > 100 ? test = false : true) {
        body.appendChild(el);
    }
}


init();
