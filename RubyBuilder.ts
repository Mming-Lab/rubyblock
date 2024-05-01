
namespace builder {

    //% help=builder/move
    //% weight=360
    //% blockId=rubyMinecraftBuilderMove block="10:ビルダー: %direction|へ%blocks| ブロック移動(いどう)させる"
    //% blocks.defl=1
    export function _move(direction: RubySixDirection, blocks: number): void {
        return builder.move(toSixDirection(direction), blocks);
    }

    //% help=builder/turn
    //% weight=350
    //% blockId=rubyMinecraftBuilderTurn block="20:ビルダー: 方向転換(ほうこうてんかん)|%direction"
    export function _turn(direction: RubyTurnDirection) {
        builder.turn(toTurnDirection(direction));
    }

    //% help=builder/mark
    //% weight=340
    //% blockId=rubyMinecraftBuilderMark block="30:ビルダー: 印(しるし)を付(つ)ける"
    export function _mark(): void {
        builder.mark();
    }

    //% help=builder/teleport-to
    //% weight=330
    //% blockId=rubyMinecraftBuilderGoTo block="40:ビルダー: 位置(いち) %position=minecraftCreatePosition| へテレポート"
    export function _teleportTo(position: Position): void {
        return builder.teleportTo(position);
    }


    //% help=builder/place
    //% weight=320
    //% blockId=rubyMinecraftBuilderPlace block="50:ビルダー: ブロック %block=minecraftBlock| を置(お)く"
    //% block.shadow=minecraftBlock
    export function _place(block: number): void {
        builder.place(block);
    }

    //% help=builder/trace-path
    //% weight=310
    //% blockId=rubyMinecraftBuilderTrace block="60:ビルダー: ブロック %block=minecraftBlock| を使(つか)って印(しるし)を付(つ)けた場所(ばしょ)から軌跡(きせき)をなぞる"
    //% block.shadow=minecraftBlock
    export function _tracePath(block: number) {
        builder.tracePath(block);
    }


    //% help=builder/shift
    //% weight=270
    //% blockId=rubyMinecraftBuilderShift block="70:ビルダー: 前方(ぜんぽう) %forward| 上(うえ) %up| 左(ひだり) %left| に移動(いどう)させる"
    //% forward.defl=1 up.defl=1 left.defl=1
    export function _shift(forward: number, up: number, left: number) {
        builder.shift(forward, up, left);
    }



    //% help=builder/fill
    //% weight=260
    //% blockId=rubyMinecraftBuilderFill block="80:ビルダー: 印(しるし)を付(つ)けた場所(ばしょ)からブロック %block=minecraftBlock| で埋(う)める"
    //% block.shadow=minecraftBlock
    export function _fill(block: number, operator?: FillOperation): void {
        builder.fill(block, operator);
    }


    //% help=builder/line
    //% weight=250
    //% blockId=rubyMinecraftBuilderLine block="90:ビルダー: 印(しるし)を付(つ)けた場所(ばしょ)からブロック %block=minecraftBlock| で線(せん)を引(ひ)く"
    //% block.shadow=minecraftBlock
    export function _line(block: number): void {
        builder.line(block);
    }


    //% help=builder/face
    //% weight=240
    //% blockId=rubyMinecraftBuilderFace block="100:ビルダー: %direction| に向(む)ける"
    export function _face(direction: RubyCompassDirection) {
        builder.face(toCompassDirection(direction));
    }



    //% help=builder/set-origin
    //% weight=230
    //% blockId=rubyMinecraftBuilderSetOrigin block="110:ビルダー: 原点(げんてん)を設定(せってい)"
    export function _setOrigin(): void {
        builder.setOrigin();
    }

    //% help=builder/teleport-to-origin
    //% weight=220
    //% blockId=rubyMinecraftBuilderTeleportOrigin block="120:ビルダー: 原点(げんてん)へテレポート"
    export function _teleportToOrigin(): void {
        builder.teleportToOrigin();
    }


    //% help=builder/position
    //% weight=210
    //% blockId=rubyMinecraftBuilderPosition block="130:ビルダー: 位置(いち)"
    export function _position(): Position {
        return builder.position();
    }

    //% help=builder/raise-wall
    //% weight=150
    //% blockId=rubyMinecraftBuildereWall block="140:ビルダー: ブロック %block=minecraftBlock| を使(つか)って印(しるし)を付(つ)けた位置(いち)から高(たか)さ %height| の壁(かべ)を立(た)てる"
    //% block.shadow=minecraftBlock
    //% height.defl=5
    export function _raiseWall(block: number, height: number) {
        builder.raiseWall(block, height);
    }

    //% help=builder/copy
    //% weight=140
    //% blockId=rubyMinecraftBuilderCopy block="150:ビルダー: 印(しるし)を付(つ)けた位置(いち)からコピー"
    export function _copy() {
        builder.copy();
    }

    //% help=builder/paste
    //% weight=130
    //% blockId=rubyMinecraftBuilderPaste block="160:ビルダー: コピーした領域(りょういき)を貼(は)り付(つ)け"
    export function _paste() {
        builder.paste();
    }

    //% help=builder/push-state
    //% weight=120
    //% blockId=rubyMinecraftBuilderPushState block="170:ビルダー: 座標(ざひょう)と移動(いどう)の状態(じょうたい)をプッシュ"
    export function _pushState() {
        builder.pushState();
    }

    //% help=builder/pop-state
    //% weight=110
    //% blockId=rubyMinecraftBuilderPopState block="180:ビルダー: 座標(ざひょう)と移動(いどう)の状態(じょうたい)をポップ"
    export function _popState() {
        builder.popState();
    }
    /**
     * Starts a structure. Placing, filling, or drawing lines with blocks will cause
     * locations to be added to the structure. Use "save structure" to save the structure
     * to memory and "load structure" to instantly rebuild it.
     */
    //% help=builder/start-structure
    //% weight=90
    //% blockId=rubyMinecraftBuilderStartStructure
    //% block="190:ビルダー: 構造物(こうぞうぶつ)の建築(けんちく)を開始(かいし)"
    export function _startStructure() {
        builder._startStructure();
    }
    /**
     * Saves the current structure. Only does anything if called after "start structure"
     */
    //% help=builder/save-structure
    //% weight=80
    //% blockId=rubyMinecraftBuilderSaveStructure
    //% block="200:ビルダー: $nameという名前(なまえ)の構造物(こうぞうぶつ)として保存(ほぞん)する|| エンティティを含(ふく)む:$includeEntities| 空気(くうき)をないものとして扱(あつか)う:$replaceAirWithVoid"
    //% name.defl="my structure"
    export function _saveStructure(name: string, includeEntities?: boolean, replaceAirWithVoid?: boolean) {
        builder._saveStructure(name, includeEntities, replaceAirWithVoid);
    }

    /**
     * Loads a structure with the given name at the builder's current position.
     */
    //% help=builder/load-structure
    //% weight=70
    //% blockId=rubyMinecraftBuilderLoadStructure
    //% block="210:ビルダー: $nameという名前(なまえ)の構造物(こうぞうぶつ)を読(よみ)み込(こ)む||回転(かいてん): $rotation 反転(はんてん): $mirror"
    //% rotation.shadow=minecraftStructureRotation
    //% mirror.shadow=minecraftStructureMirrorAxis
    //% name.defl="my structure"
    export function _loadStructure(name: string, rotation?: number, mirror?: number) {
        builder._loadStructure(name, rotation, mirror);
    }
}

