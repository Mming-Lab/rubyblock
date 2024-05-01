namespace shapes {
    //% blockId=rubyMinecraftLine block="10:このブロックで線(せん)を作成(さくせい): %block=minecraftBlock|開始(かいし) %p0=minecraftCreatePosition|終了(しゅうりょう) %p1=minecraftCreatePosition"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1 weight=100
    //% help=shapes/line
    export function _line(block: number, p0: Position, p1: Position, extrusion?: Position) {
        shapes.line(block, p0, p1, extrusion);
    }

    //% blockId=rubyMinecraftCircle block="20:このブロックで円(えん)を作成(さくせい): %block=minecraftBlock|中心(ちゅうしん) %center=minecraftCreatePosition|半径(はんけい) %radius|巻(ま)く方向(ほうこう) %orientation|%operator"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1 weight=95
    //% help=shapes/circle
    //% radius.defl=5
    export function _circle(block: number,
        center: Position,
        radius: number,
        orientation: RubyAxis,
        operator: RubyShapeOperation) {
        shapes.circle(block,
            center,
            radius,
            toAxis(orientation),
            toShapeOperation(operator));

    }

    //% blockId=rubyMinecraftSphere block="30:このブロックで球体(きゅうたい)を作成(さくせい): %block=minecraftBlock|中心(ちゅうしん) %center=minecraftCreatePosition|半径(はんけい) %radius|%operator"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% help=shapes/sphere
    //% radius.defl=5
    export function _sphere(block: number, center: Position, radius: number, operator: RubyShapeOperation) {
        shapes.sphere(block, center, radius, toShapeOperation(operator));
    }
}

