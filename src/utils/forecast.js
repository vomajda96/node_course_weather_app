const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/602f519ddfb6660ee7dd953406fb2d8e/${latitude}, ${longitude}?units=si&lang=cs`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} Venku je právě ${body.currently.temperature} °C. Je zde ${body.currently.precipProbability}% pravděpodobnost srážek.`)
        }
    })
}


module.exports = forecast