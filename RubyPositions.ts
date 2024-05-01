
namespace positions {
    //% help=positions/pos-camera 
    //% weight=325 color=#69B090
    //% x.shadow=camerapositionpicker
    //% y.shadow=camerapositionpicker
    //% z.shadow=camerapositionpicker
    //% blockId=rubyMinecraftCreatePositionCamera 
    //% block="10:右(みぎ)|$x|上(うえ)|$y|前(まえ)|$z"
    export function _posCamera(x: number, y: number, z: number): Position {
        return positions.createCamera(x, y, z);
    }

    //% help=positions/pos 
    //% weight=320 color=#69B090
    //% blockId=rubyMinecraftCreatePosition block="20:~%x|~%y|~%z"
    export function _pos(x: number, y: number, z: number): Position {
        return positions.create(x, y, z);
    }

    //% help=positions/create
    //% weight=320
    //% blockId=rubyMinecraftCreatePositionInternal block="~%x|~%y|~%z"
    //% blockHidden=true 
    //% alias=pos
    //% shim=positions::create
    export function _create(x: number, y: number, z: number): Position {
        return positions.create(x, y, z);
    }

    //% help=positions/create-local
    //% weight=315
    //% blockId=minecraftCreatePositionLocalInternal
    //% block="30:^$x|^$y|^$z"
    //% alias=posLocal
    //% shim=positions::createLocal
    export function _createLocal(x: number, y: number, z: number): Position {
        return positions.createLocal(x, y, z);
    }

    //% help=positions/create-world
    //% weight=310
    //% blockId=rubyMinecraftCreateWorldInternal
    //% block="40:ワールド %x|%y|%z"
    //% alias=world
    //% blockHidden=true 
    //% shim=positions::createWorld
    export function _createWorld(x: number, y: number, z: number): Position {
        return positions.createWorld(x, y, z);
    }


    //% help=positions/world
    //% weight=310 color=#69B090
    //% blockId=rubyMinecraftCreateWorldPosition
    //% block="40:ワールド %x|%y|%z"
    export function _world(x: number, y: number, z: number): Position {
        return positions.createWorld(x, y, z);
    }

    //% help=positions/pos-local 
    //% weight=305 color=#69B090
    //% blockId=rubyMinecraftCreatePositionLocal
    //% block="^$x|^$y|^$z"
    //% blockHidden=true 
    export function _posLocal(x: number, y: number, z: number): Position {
        return positions.createLocal(x, y, z);
    }


    //% help=positions/add
    //% weight=220
    //% blockId=rubyMinecraftAddPosition
    //% block="50:%p1=minecraftCreatePosition|+ %p2=minecraftCreatePosition"
    //% blockExternalInputs=1
    //% shim=positions::add
    export function _add(p1: Position, p2: Position): Position {
        return positions.add(p1, p2);
    }

    //% help=positions/equals
    //% weight=215
    //% promise
    //% blockId=rubyMinecraftEqualsPosition block="60:$p1=minecraftCreateWorldPosition と $p2=minecraftCreateWorldPosition が同(おな)じ"
    //% blockExternalInputs=1
    //% shim=positions::equalsAsync promise
    export function _equals(p1: Position, p2: Position): boolean{
        return positions.equals(p1, p2);
    }

    //% help=positions/randpos 
    //% weight=210 color=#69B090
    //% blockId=rubyMinecraftPosRandom
    //% block="70:%p1=minecraftCreatePosition| から %p2=minecraftCreatePosition の間(あいだ)のランダムな座標(ざひょう)"
    //% blockExternalInputs=1
    export function _randpos(p1: Position, p2: Position): Position {
        return positions.random(p1, p2);
    }



    //% help=positions/random
    //% weight=210
    //% blockId=rubyMinecraftPosRandomInternal
    //% block="次(つぎ)の 座標(ざひょう)A と 座標(ざひょう)B の 範囲(はんい)の中(なか)から、ランダムに座標(ざひょう)を選(えら)ぶ | 座標(ざひょう)A %p1=minecraftCreatePosition| 座標(ざひょう)B %p2=minecraftCreatePosition"
    //% blockExternalInputs=1
    //% blockHidden=true 
    //% alias=randpos
    //% shim=positions::random
    export function _random(p1: Position, p2: Position): Position {
        return positions.random(p1, p2);
    }

    //% help=positions/ground-position
    //% promise
    //% weight=50
    //% blockId=rubyMinecraftNextSolid block="80:$pos=minecraftCreatePositionの地面(じめん)"
    //% shim=positions::groundPositionAsync promise
    export function _groundPosition(pos: Position): Position {
        return positions.groundPosition(pos);
    }

    //% weight=40
    //% blockId=rubyMinecraftToCompassDirection
    //% shim=positions::toCompassDirection
    //% block="90:$degの4方位"
    export function _toCompassDirection(deg: number): CompassDirection {
        return positions.toCompassDirection(deg);

    }
}
