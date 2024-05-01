namespace Math {

    //% blockId="rubyDevice_random"
    //% block="10:ランダムな数字(すうじ)を選択(せんたく): %min| から %limit| まで"
    //% help=math/randint
    //% shim=Math_::randomRange
    //% min.defl=0 max.defl=10
    export function _Math_randint(min: number, max: number): number {
        return randint(min, max);
    }

    //% blockId="rubyDevice_random_deprecated"
    //% block="20:ランダムな数字(すうじ)を選択(せんたく): %min| から %limit| まで"
    //% help=math/random-range deprecated
    //% shim=Math_::randomRange
    //% min.defl=1 max.defl=10
    export function _randomRange(min: number, max: number): number {
        return Math.randomRange(min, max);
    }
}