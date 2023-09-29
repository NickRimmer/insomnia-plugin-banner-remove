const getElementAsync = (selector: string, maxTries: number): Promise<Element> => {
  return new Promise((resolve, reject) => {
    let counter = 0

    const checkForElement = () => {
      const element = document.querySelector(selector)
      if (element) {
        resolve(element)
      } else if (counter < maxTries) {
        counter++
        setTimeout(checkForElement, 100)
      } else {
        reject(`Could not find element with selector ${selector}`)
      }
    }

    checkForElement()
  })
}

const run = async () => {
  try {
    const grid = await getElementAsync('.grid-template-app-layout-with-banner', 10 * 5)
    if (!grid) return

    const banner = await getElementAsync('.\\[grid-area\\:Banner\\]', 10 * 5)
    if (!banner) return

    banner.remove()
    grid.classList.add('grid-template-app-layout')
    grid.classList.remove('grid-template-app-layout-with-banner')
  } catch (e) {
    console.log(e)
  }
}

run()
