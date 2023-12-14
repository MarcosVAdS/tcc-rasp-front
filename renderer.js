const cokeButton = document.getElementById('coke')
const cerealButton = document.getElementById('cereal')
const qrCodeImg = new Image();
const imgContainer = document.getElementById('img-container')

document.addEventListener('DOMContentLoaded', function() {
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('myModal');

    cerealButton.addEventListener('click', async () => {
        modal.style.display = 'block'

        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        const qrcode = await window.data.createQrCodeInfo({
            product: 'cereal',
            value: '5.00'
        })

        qrCodeImg.src = `${qrcode.imagemQrcode}`
        qrCodeImg.alt = "qrcode para pagamento pix"
        qrCodeImg.style.width = '40vw'
        qrCodeImg.style.height = '40vh'
    
        imgContainer.appendChild(qrCodeImg)
        
        //window.data.waterPumpStatus()

        //setTimeout(window.data.waterPumpStatus(), 5000)
    })
});

