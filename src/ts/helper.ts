const showModal = <HTMLElement>document.querySelector('.modal')

export const showHideModal = (): void => {
    showModal.classList.toggle('active')
}