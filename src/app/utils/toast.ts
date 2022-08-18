export const enableToast = (function(){
    const toastTriggers = document.querySelectorAll('button.liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTriggers) {
      toastTriggers.forEach(element => {
        element.addEventListener('click', () => {
          //@ts-ignore
          const toast = new bootstrap.Toast(toastLiveExample)
          toast.show()
        })
      });
    }
});