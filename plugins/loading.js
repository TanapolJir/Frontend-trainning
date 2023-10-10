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
  }

}

export default ({ app }, inject) => {
  inject('Notiflix', Notiflix)
}
