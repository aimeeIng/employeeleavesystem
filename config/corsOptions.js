const whitelist = [
    'https://www.anysite.com',
    'https://127.0.0.1:3500',
    'https://localhost:3500'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('This site note allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;