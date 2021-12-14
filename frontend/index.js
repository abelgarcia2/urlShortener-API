const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    const url = document.getElementById('url').value
    btn.disabled = true
    if (/(^https?:\/\/.)|(^www\..)|(^[A-Za-z]+\..)/.test(url)) {
        fetch('http://localhost:5000/shorten', { method: 'POST', body: JSON.stringify({ url: url }), headers: { 'Content-Type': 'application/json' } })
            .then(data => data.json()).then(data => {
                btn.disabled = false
                const shortUrl = document.getElementById('shortURL')
                //TODO: quitar console
                console.log(data)
                document.getElementById('result').style.display = 'block'
                shortUrl.href = data.url
                shortUrl.innerHTML = data.url.replace('https://', '')
                document.getElementById('copyClipboard').addEventListener('click', () => navigator.clipboard.writeText(data.url))
            })
    } else {
        console.log('NO')
    }

})