const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    const url = document.getElementById('url').value
    const alert = document.getElementById('alert')
    const result = document.getElementById('result')
    const loader = document.getElementById('loader')

    console.log(url);
    btn.disabled = true
    result.style.display = 'none'
    loader.style.display = 'block'
    if (/(^https?:\/\/.)|(^www\..)|(^[A-Za-z]+\..)/.test(url)) {
        fetch('https://url-shortener-abel.herokuapp.com/shorten', { method: 'POST', body: JSON.stringify({ url: url }), headers: { 'Content-Type': 'application/json' } })
            .then(data => data.json()).then(data => {
                btn.disabled = false
                const shortUrl = document.getElementById('shortURL')
                //TODO: quitar console
                console.log(data)
                result.style.display = 'block'
                loader.style.display = 'none'
                shortUrl.href = data.url
                shortUrl.innerHTML = data.url.replace('https://', '')
                document.getElementById('copyClipboard').addEventListener('click', () => navigator.clipboard.writeText(data.url))
            })
    } else {
        result.style.display = 'none'
        loader.style.display = 'none'
        alert.style.display = 'block'
        btn.disabled = false
        setTimeout(() => {
            alert.style.display = 'none'
        }, 2000)
        console.log('NO')
    }

})