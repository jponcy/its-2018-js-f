function showDataTable() {
    document.getElementById('loader').className = 'hide'
    document.querySelector('article').className = ''
}

function showLoader() {
    document.getElementById('loader').className = ''
    document.querySelector('article').className = 'hide'
}

function refreshUsers() {
    showLoader()

    getUsers()
      .then(response => {
        console.log('The response', response)
        return response.json()
      })
      .then(json => {
        console.log('Data', json.results)

        var content = json.results.reduce((acc, user, i) => {
            console.log(i, acc, user)
          return acc + `
            <tr>
              <td>${user.name.first} ${user.name.last}</td>
              <td>${user.email}</td>
              <td>${user.gender}</td>
            </tr>
          `
        }, '');

        document.querySelector('article').querySelector('tbody').innerHTML = content

        showDataTable()
      })
      .catch(err => console.error('error', err))
}
