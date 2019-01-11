function hello() { console.log('hello world') }

function helloBody(name) { console.log(name === undefined ? 'Bonjour tout le monde' : 'Bonjour ' + name) }

var validEvenNb = nb => {
    nb = '' + nb

    if (!nb || nb.match(/\D/) || (nb = parseInt(nb)) < 2) throw 'Invalid number'

    return nb
}

function evenWhile(nb) {
    nb = validEvenNb(nb)
    var counter = 1
    var i = 2

    while ((i += 2) <= nb) {
        ++ counter
    }

    // OR Math.floor(nb/2) :D

    console.log(counter)
}

function evenDoWhile(nb) {
    nb = validEvenNb(nb)
    var counter = 0
    var i = 2

    do {
        ++ counter
    } while ((i += 2) <= nb);

    console.log(counter)
}

function evenFor(nb) {
    nb = validEvenNb(nb)

    // for (var i = 2; i <= nb; i += 2) {
    //     ++ counter
    // }
    for (var i = 2, counter = 0; i <= nb; i += 2, ++ counter);

    console.log(counter)
}

/**
 *
 * @param {number} a The (facultative) minus number (included).
 * @param {number} b The max number (excluded).
 * @returns {number[]}
 */
function range(a, b) {
    var min, max
    var result = []

    if (a === undefined) throw 'You should provide 1 or 2 int values'
    if (b === undefined) {
        min = 0
        max = a
    } else {
        if (a >= b) throw 'The first number should be lower than the second'
        min = a
        max = b
    }

    for (var i = min; i < max; ++ i) {
        result.push(i);
    }

    return result
}

function evenReduce(nb) {
    nb = validEvenNb(nb)

    console.log(range(Math.floor(nb / 2)).reduce((acc) => acc + 1, 0))
}

function addContent(content) {
    var p = document.createElement('p')

    p.innerHTML = content

    document.getElementById('dash').append(p)
}

function initAddContentBtn() {
    var container = document.getElementById('dash')

    document
      .getElementById('add-content')
      .addEventListener('click', _ => addContent('Paraph n°' + (container.childElementCount + 1)))
}
