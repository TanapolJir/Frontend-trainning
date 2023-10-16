import { Loading } from 'notiflix'

const Notiflix = {

  loading () {
    Loading.standard()
  },
  remove () {
    Loading.remove()
  },
  loadingWord () {
    Loading.circle('โหลดอยู่ รอแปป...', {
      backgroundColor: 'rgba(230,5,8,9.8)',
      messageFontSize: '30px',
      messageColor: 'rgba(30,199,95,9)',
      clickToClose: true
    })
  },
  loadingStack () {
    let progress = 1
    Loading.standard(`Loading ${progress}`)
    const intervalId = setInterval(() => {
      Loading.change(`Loading ${progress}`)
      progress += 1

      if (progress > 20) {
        clearInterval(intervalId)

        setTimeout(() => {
          Loading.remove()
        }, 100)
      }
    }, 100)
  }

}

export default ({ app }, inject) => {
  inject('Notiflix', Notiflix)
}
