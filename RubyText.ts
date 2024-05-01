namespace text {

    //% shim=String_::toNumber
    //% help=text/parse-float
    //% blockId="rubyString_parsefloat"
    //% block="10:文字列(もじれつ) %text|を数値(すうち)に変換(へんかん)する"
    //% text.defl="123"
    export function _text_parseFloat(text: string): number {
        return parseFloat(text);
    }

    //% help=math/from-char-code
    //% shim=String_::fromCharCode weight=1
    //% blockId="rubyStringFromCharCode"
    //% block="20:文字(もじ)コード %code|の文字(もじ)"
    export function _fromCharCode(code: number): string {
        return String.fromCharCode(code);
    }


    //% help=text/parse-int
    //% blockId="rubyString_parseint"
    //% block="30:文字列(もじれつ) %text|を整数(せいすう)に変換(へんかん)する"
    //% text.defl="123"
    //% blockHidden=1
    export function _text_parseInt(text: string, radix?: number): number {
        return parseInt(text, radix);
    }

}