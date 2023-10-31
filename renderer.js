const setButton = document.getElementById('coffee')
const qrCodeImg = new Image();
const imgContainer = document.getElementById('img-container')

setButton.addEventListener('click', async () => {
    const qrcode = await window.data.createQrCodeInfo()

    qrCodeImg.src = `${qrcode.imagemQrcode}`
    qrCodeImg.alt = "qrcode para pagamento pix"

    imgContainer.appendChild(qrCodeImg)
})