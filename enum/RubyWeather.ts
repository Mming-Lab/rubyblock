const enum RubyWeather {
    //% block="10:晴(は)れ" alias=CLEAR
    Clear,
    //% block="20:雨(あめ)" alias=RAIN
    Rain,
    //% block="30:雷(かみなり)" alias=THUNDER
    Thunder
}

function toWeather(weather: RubyWeather): Weather {
    switch (weather) {
        case RubyWeather.Clear: return Weather.Clear;
        case RubyWeather.Rain: return Weather.Rain;
        case RubyWeather.Thunder: return Weather.Thunder;
    }
}