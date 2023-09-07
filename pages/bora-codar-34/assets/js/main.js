lucide.createIcons()

let select = document.querySelector('.select'),
selectedValue = document.getElementById('selected-value'),
optionsViewButton = document.getElementById('options-view-button'),
inputsOptions = document.querySelectorAll('.option input')

// forEach = para cada um
inputsOptions.forEach(input => {
  input.addEventListener('click', event => {
    selectedValue.textContent = input.dataset.label

    const isMouseTouch = 
    event.pointerType == "mouse" ||
    event.pointerType == "touch"

    isMouseTouch && optionsViewButton.click()
  })
})

// quando clicar numa tecla tem fazer uma acao
window.addEventListener('keydown', e => {
  if (!select.classList.contains('open')) return

  if(e.key == "Escape" || e.key == " ") {
    optionsViewButton.click()
  }
})

optionsViewButton.addEventListener('input', () => {
  select.classList.toggle('open')

  if(!select.classList.contains('open')) return

  const input = 
  document.querySelector('.option input:checked') ||
  document.querySelector('.option input')

  input.focus()
})