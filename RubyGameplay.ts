
namespace gameplay {

    //% help=gameplay/set-weather
    //% promise
    //% weight=340
    //% blockId=rubyMinecraftWeather block="10:現在(げんざい)の天気(てんき)を %weather| にする"
    //% weather.defl=CLEAR
    //% shim=gameplay::setWeatherAsync promise
    export function _setWeather(weather: RubyWeather): void {
        gameplay.setWeather(toWeather(weather));
    }

    //% help=gameplay/toggle-downfall
    //% promise
    //% weight=330
    //% blockId=rubyMinecraftToggleDownfall block="20:現在(げんざい)の天気(てんき)が「晴(は)れ」なら「雨(あめ)」に、「雨(あめ)」なら「晴(は)れ」に変更(へんこう)する"
    //% shim=gameplay::toggleDownfallAsync promise
    export function _toggleDownfall(): void {
        gameplay.toggleDownfall();
    }

    //% help=gameplay/time-set
    //% promise
    //% weight=320
    //% blockId=rubyMinecraftTimeSet block="30:ゲーム内(ない)の時刻(じこく)を %time=rubyMinecraftTime| に変更(へんこう)する"
    //% shim=gameplay::timeSetAsync promise
    export function _timeSet(time: number): void {
        gameplay.timeSet(time);
    }

    //% help=gameplay/time-add
    //% promise
    //% weight=310
    //% blockId=rubyMinecraftTimeAdd block="40:ゲーム内(ない)の時刻(じこく)に %amount| を追加(ついか)する"
    //% shim=gameplay::timeAddAsync promise
    //% amount.defl=100
    export function _timeAdd(amount: number): void {
        gameplay.timeAdd(amount);
    }


    //% help=gameplay/set-difficulty
    //% promise
    //% weight=220
    //% blockId=rubySetDifficulty block="50:ゲームの難易(なんい)度(ど)を %difficulty |に変更(へんこう)する"
    //% shim=gameplay::setDifficultyAsync promise
    export function _setDifficulty(difficulty: GameDifficulty): void {
        gameplay.setDifficulty(difficulty);
    }

    //% help=gameplay/set-game-mode
    //% promise
    //% weight=210
    //% blockId=rubyMinecraftGamemode block="60:ゲームモード %mode| を %player=rubyMinecraftTarget| に適用(てきよう)する"
    //% blockExternalInputs=1
    //% mode.defl=SURVIVAL
    //% shim=gameplay::setGameModeAsync promise
    export function _setGameMode(mode: GameMode, player: TargetSelector): void {
        gameplay.setGameMode(mode, player);
    }

    //% help=gameplay/title
    //% promise
    //% weight=200
    //% blockId=rubyMinecraftTitle block="70:ターゲット %target=rubyMinecraftTarget| にタイトル %title| サブタイトル %subTitle| を表示(ひょうじ)"
    //% shim=gameplay::titleAsync promise
    export function _title(target: TargetSelector, title: string, subTitle: string): void {
        gameplay.title(target, title, subTitle);
    }


    //% help=gameplay/time-query
    //% promise
    //% weight=130
    //% blockId=rubyMinecraftTimeQuery block="80:次(つぎ)の時間(じかん)を確認(かくにん)する %query"
    //% shim=gameplay::timeQueryAsync promise
    export function _timeQuery(query: RubyTimeQuery): number {
        return gameplay.timeQuery(toTimeQuery(query));
    }

    //% help=gameplay/daylight-time-query
    //% promise
    //% weight=125
    //% blockId=rubyMinecraftDaylightTimeQuery block="90:時間(じかん)$query"
    //% shim=gameplay::isDaylightTimeAsync promise
    export function _isDaylightTime(query: RubyDayTime): boolean {
        return gameplay.isDaylightTime(toDayTime(query));
    }



    //% help=gameplay/xp
    //% promise
    //% weight=120
    //% blockId=rubyMinecraftXp block="100:経験(けいけん)値(ち) %amount| を %target=rubyMinecraftTarget | に 渡(わた)す"
    //% shim=gameplay::xpAsync promise
    //% amount.defl=10
    export function _xp(amount: number, target: TargetSelector): void {
        gameplay.xp(amount, target);
    }

    //% help=gameplay/set-game-rule
    //% promise
    //% weight=110
    //% blockId=rubyMinecraftGameRule block="110:ゲームルール %rule | を %enabled| にする"
    //% rule.defl=DAYLIGHT_CYCLE
    //% shim=gameplay::setGameRuleAsync promise
    export function _setGameRule(rule: RubyGameRule, enabled: boolean): void {
        gameplay.setGameRule(toGameRule(rule), enabled);
    }

    //% blockId=rubyMinecraftTime block="%time" blockHidden=1
    //% blockHidden=true 
    //% weight=2
    //% shim=gameplay::time
    export function _time(time: RubyDayTime): number {
        return gameplay.time(toDayTime(time));
    }

    //% help=gameplay/immutable-world
    //% promise
    //% blockId=rubyMinecraftImmutableWorld block="変更(へんこう)可能(かのう)な世界(せかい)%enabled"
    //% deprecated=true
    //% weight=1
    //% shim=gameplay::immutableWorldAsync promise
    export function _immutableWorld(enabled: boolean): void {
        gameplay.immutableWorld(enabled);
    }

}
// ここにコードを追加します
