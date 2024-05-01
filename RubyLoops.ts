
namespace loops {
    //% help=loops/forever weight=55 blockAllowMultiple=true
    //% blockId=rubyDevice_forever
    //% block="10:ずっと" icon="\uf01e"
    //% shim=loops::forever
    export function _forever(body: () => void): void {
        loops.forever(body);
    }

    //% help=loops/pause weight=54
    //% async block="20:一時(いちじ)停止(ていし) [ミリ秒(びょう)] %pause"
    //% blockId=rubyDevice_pause icon="\uf110"
    //% shim=loops::pause
    export function _pause(ms: number): void {
        loops.pause(ms);
    }

    //% blockId=rubyFork icon="\uf110"
    //% block="30:バックグラウンドで実行(じっこう)する"
    //% help=loops/run-in-background weight=0
    //% shim=loops::runInBackground
    export function _runInBackground(handler: () => void): void {
        loops.runInBackground(handler);
    }

}