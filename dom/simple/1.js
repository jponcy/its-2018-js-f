function single() {
    document.getElementById('instruction-title').innerText = 'Instructions'
}

function prefixTagName() {
    var tags = document.getElementsByTagName('p');

    for (var i in tags) {
        tags[i].innerHTML = 'Je suis passé par là : ' + tags[i].innerHTML;
    }
}

function prefixQuerySelector() {
    document.querySelectorAll('p').forEach(tag => tag.innerHTML = 'Je suis passé par là : ' + tag.innerHTML)
}

function purge() {
    var tags = document.querySelectorAll('p')

    for (var i = 1; i < tags.length; ++ i) {
        tags[i].remove();
    }
}

function separate() {
    var tags = document.querySelectorAll('h1')

    for (var i = 1; i < tags.length; ++ i) {
        tags[i].before(document.createElement('hr'));
    }
}

function styleTitle() {
    document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(tag => tag.style.color = 'blue')
}

function classEven() {
    document.querySelectorAll('p').forEach((tag, i) => tag.className = (i % 2 ? 'odd' : 'even'))
}

function classEvenOther() {
    var tags = document.getElementsByTagName('p')

    for (var i in tags) {
        var tag = tags[i]

        if (i % 2 === 0) {
            tag.className = 'even'
        } else {
            tag.className = 'odd'
        }
    }
}
