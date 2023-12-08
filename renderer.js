const cokeButton = document.getElementById('coke')
const cerealButton = document.getElementById('cereal')
const qrCodeImg = new Image();
const imgContainer = document.getElementById('img-container')

cokeButton.addEventListener('click', async () => {
    const qrcode = await window.data.createQrCodeInfo({
        product: 'coke',
        value: '5.00'
    })

    qrCodeImg.src = `${qrcode.imagemQrcode}`
    qrCodeImg.alt = "qrcode para pagamento pix"

    imgContainer.appendChild(qrCodeImg)
})

cerealButton.addEventListener('click', async () => {
    const qrcode = await window.data.createQrCodeInfo({
        product: 'cereal',
        value: '5.00'
    })

    qrCodeImg.src = `${qrcode.imagemQrcode}`
    qrCodeImg.alt = "qrcode para pagamento pix"

    imgContainer.appendChild(qrCodeImg)
})