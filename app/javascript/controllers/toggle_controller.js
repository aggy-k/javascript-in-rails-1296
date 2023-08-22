import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ['toggleableElement']
  connect() {
    console.log('connected to toggler controller')
    // console.log(this.toggleableElementTarget)
  }

  fire(event) {
    // console.log('fire', event)
    // this.hasToggleableElementTarget => true/false
    this.toggleableElementTarget.classList.toggle('d-none')
  }

  hover(event) {
    console.log('hovering')
  }
}
