module.exports = {
    apps: [
        name: 'urlShortener',
        script: 'npm run start',
        instances: 3,
        watch: true,
        increment_var: 'PORT',
        env: {
            'PORT': 5000,
        }
    ]
}