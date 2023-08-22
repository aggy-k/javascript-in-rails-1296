import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]
  connect() {
    console.log(this.itemsTarget)
    console.log(this.formTarget)
  }

  send(e) {
    console.log('form submit')
    e.preventDefault()

    // fetch(url, options={})
    // this.formTarget.action => '/monuments'

    fetch(this.formTarget.action, {
      method: this.formTarget.method, // Could be dynamic with Stimulus values
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
      // { monument: { name: ...., address: ...., opening_date: ....}}
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        if (data.inserted_item) {
          this.itemsTarget.insertAdjacentHTML('beforeend', data.inserted_item)
        }
        this.formTarget.outerHTML = data.form
      })
  }
}
