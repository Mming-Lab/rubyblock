namespace blocks {

    //% help=blocks/place
    //% promise
    //% weight=360
    //% blockId=rubyMinecraftPlace 
    //% block="10:%block=minecraftBlock| を%pos=minecraftCreatePosition| に置(お)く"
    //% block.shadow=minecraftBlock
    //% topblock topblockWeight=85
    //% shim=blocks::placeAsync promise
    export function _place(block: number, pos: Position): void {
        blocks.place(block, pos);
    }

    //% help=blocks/on-block-placed
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftOnBlockPlaced
    //% block="20:%block=minecraftBlock|が置(お)かれた時(とき)"
    //% block.shadow=minecraftBlock
    //% shim=blocks::onBlockPlacedAsync promise
    export function _onBlockPlaced(block: number, handler: () => void): void {
        blocks.onBlockPlaced(block, handler);
    }

    //% help=blocks/on-block-broken
    //% promise
    //% weight=340
    //% blockId=rubyMinecraftOnBlockBroken
    //% block="30:%block=minecraftBlock|が破壊(はかい)された時(とき)"
    //% block.shadow=minecraftBlock
    //% shim=blocks::onBlockBrokenAsync promise
    export function _onBlockBroken(block: number, handler: () => void): void {
        blocks.onBlockBroken(block, handler);
    }

    //% help=blocks/block
    //% weight=330
    //% shim=TD_ID blockId=rubyMinecraftBlock block="ブロック %block"
    //% blockHidden=true 
    export function _block(block: RubyBlock): number {
        return blocks.block(toBlock(block));
    }

    //% help=blocks/item
    //% weight=320
    //% shim=TD_ID blockId=rubyMinecraftItem block="アイテム %item"
    //% blockHidden=true 
    export function _item(item: RubyItem): number {
        return blocks.item(toItem(item));
    }


    //% help=blocks/test-for-block
    //% promise
    //% weight=310
    //% blockId=rubyMinecraftTestForBlock block="40: %block=minecraftBlock| が %pos=minecraftCreatePosition| に存在(そんざい)する"
    //% block.shadow=minecraftBlock
    //% shim=blocks::testForBlockAsync promise
    export function _testForBlock(block: number, pos: Position): boolean {
        return blocks.testForBlock(block, pos);
    }


    //% help=blocks/fill
    //% promise
    //% weight=250
    //% blockId=rubyMinecraftFill block="50:ブロックを並(なら)べる %block=minecraftBlock| 範囲(はんい)の始(はじ)まり %from=minecraftCreatePosition| 範囲(はんい)の終(お)わり %to=minecraftCreatePosition| モード %operator" blockExternalInputs=1
    //% block.shadow=minecraftBlock
    //% shim=blocks::fillAsync promise
    export function _fill(block: number, from: Position, to: Position, operator?: FillOperation): void {
        blocks.fill(block, from, to, operator);
    }


    //% help=blocks/print
    //% weight=240
    //% blockId=rubyMinecraftPrintAsync block="60:文字(もじ)を描(えが)く %text| 次(つぎ)のブロックで %block=minecraftBlock| 描(えが)き始(はじ)める場所(ばしょ) %position=minecraftCreatePosition| 描(えが)く方向(ほうこう) %direction"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% text.shadowOptions.toString=true
    //% shim=blocks::printAsync promise
    //% text.defl="HELLO"
    export function _print(text: string, block: number, position: Position, direction: RubyCompassDirection): void {
        blocks.print(text, block, position, toCompassDirection(direction));
    }

    //% help=blocks/block-with-data
    //% weight=230
    //% blockId=rubyMinecraftBlockData block="70:%block=minecraftBlock|グループの %data|番(ばん)のブロック"
    //% block.shadow=minecraftBlock
    //% shim=blocks::blockWithData
    export function _blockWithData(b: number, data: number): number {
        return blocks.blockWithData(b, data);
    }

    //% help=blocks/block-by-id
    //% weight=220
    //% blockId=rubyMinecraftBlockID block="80:ブロックのID %id"
    //% blockHidden=true 
    //% shim=blocks::blockById
    export function _blockById(id: number): number {
        return blocks.blockById(id);
    }



    //% help=blocks/block-by-name
    //% weight=210
    //% blockId=rubyMinecraftBlockName block="90:ブロックの名前(なまえ) %name"
    //% shim=blocks::blockByName
    //% name.defl="stone"
    export function _blockByName(name: string): number {
        return blocks.blockByName(name);
    }


    //% help=blocks/lever
    //% weight=160
    //% blockId=rubyMinecraftBlockLever block="100:%positionレバーの状態(じょうたい)"
    //% shim=blocks::lever
    export function _lever(position: RubyLeverPosition): number {
        return blocks.lever(toLeverPosition(position));
    }


    //% help=blocks/repeater
    //% weight=150
    //% delay.min=1 delay.max=4
    //% blockId=rubyMinecraftBlockRepeater block="110:%direction| 向(む)きで遅延(ちえん)時間(じかん) %delayのレッドストーンリピータの状態(じょうたい)"
    //% shim=blocks::repeater
    export function _repeater(direction: RubyCompassDirection, delay: number): number {
        return blocks.repeater(toCompassDirection(direction), delay);
    }


    //% help=blocks/comparator
    //% weight=140
    //% blockId=rubyMinecraftBlockComparator block="120:%direction| 向きで %mode モードのレッドストーンコンパレータ―のの状態(じょうたい)"
    //% inlineInputMode="external"
    //% shim=blocks::comparator
    export function _comparator(direction: RubyCompassDirection, mode: RubyComparatorMode): number {
        return blocks.comparator(toCompassDirection(direction), toComparatorMode(mode));
    }



    //% help=blocks/replace
    //% promise
    //% weight=130
    //% blockId=rubyMinecraftReplace block="130:次(つぎ)のブロックに置(お)き換(か)える %newblock=minecraftBlock|置(お)きかえるブロック %oldblock=minecraftBlock| 置(お)きかえの範囲(はんい)の始(はじ)まり %from=minecraftCreatePosition| 置(お)きかえの範囲(はんい)の終(お)わり %to=minecraftCreatePosition" blockExternalInputs=1
    //% newblock.shadow=minecraftBlock
    //% oldblock.shadow=minecraftBlock
    //% shim=blocks::replaceAsync promise
    export function _replace(newblock: number, oldblock: number, from: Position, to: Position): void {
        blocks.replace(newblock, oldblock, from, to);
    }

    //% help=blocks/clone
    //% promise
    //% weight=120
    //% blockId=rubyMinecraftClone block="140:コピーする | コピー元(もと)の範囲(はんい)の始(はじ)まり %begin=minecraftCreatePosition| コピー元(もと)の範囲(はんい)の終(お)わり%end=minecraftCreatePosition| コピー先(さき)の場所(ばしょ) %destination=minecraftCreatePosition| マスク %mask| モード %mode" blockExternalInputs=1
    //% shim=blocks::cloneAsync promise
    export function _clone(begin: Position, end: Position, destination: Position, mask: RubyCloneMask, mode: RubyCloneMode): void {
        blocks.clone(begin, end, destination, toCloneMask(mask), toCloneMode(mode));
    }

    //% help=blocks/clone-filtered
    //% promise
    //% weight=110
    //% blockId=rubyMinecraftCloneFiltered block="150:指定(してい)したブロックだけをコピーする| コピー元(もと)の範囲(はんい)の始(はじ)まり %begin=minecraftCreatePosition|コピー元(もと)の範囲(はんい)の終(お)わり %end=minecraftCreatePosition| コピー先(さき)の場所(ばしょ) %destination=minecraftCreatePosition|次(つぎ)のブロックだけコピーする %block=minecraftBlock|モード %mode"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% shim=blocks::cloneFilteredAsync promise
    export function _cloneFiltered(begin: Position, end: Position, destination: Position, block: number, mode: CloneMode): void {
        blocks.cloneFiltered(begin, end, destination, block, mode);
    }


    //% blockId=rubyMinecraftNameOfBlock
    //% block="%blockの名前(なまえ)"
    //% block.shadow=minecraftBlock
    //% weight=0
    //% shim=blocks::nameOfBlock
    export function _nameOfBlock(block: number): string {
        return blocks.nameOfBlock(block);
    }



    //% blockId=rubyMminecraftSaveStructure
    //% block="160:構造物(こうぞうぶつ)を保存(ほぞん)する| 名前 $name 範囲(はんい)の始(はじ)まり $from 範囲(はんい)の終(お)わり $to||エンティティを含(ふく)む $includeEntities ブロックを含(ふく)む $includeBlocks 保存先(ほぞんさき) $saveMode"
    //% name.defl="my structure"
    //% from.shadow=minecraftCreatePosition
    //% to.shadow=minecraftCreatePosition
    //% includeEntities.defl=true
    //% includeBlocks.defl=true
    //% weight=100
    //% group="Structures"
    export function _saveStructure(name: string, from: Position, to: Position, includeEntities = true, saveMode = StructureSaveMode.Memory, includeBlocks = true) {
        return blocks.saveStructure(name, from, to, includeEntities, saveMode, includeBlocks);
    }

    //% blockId=rubyMinecraftLoadStructure
    //% block="170:構造物(こうぞうぶつ)を読(よ)み込(こ)む| 名前(なまえ) $name 読(よ)み込(こ)先(さき) $to||回転(かいてん) $rotation 反転(はんてん) $mirror アニメーション種類(しゅるい) $animationMode アニメーション時間(じかん)[秒(びょう)] $animationSeconds エンティティを含(ふく)む  $includeEntities ブロックを含(ふく)む $includeBlocks 完全性(かんぜんせい) $integrity"
    //% name.defl="my structure"
    //% to.shadow=minecraftCreatePosition
    //% rotation.shadow=minecraftStructureRotation
    //% mirror.shadow=minecraftStructureMirrorAxis
    //% includeEntities.defl=true
    //% includeBlocks.defl=true
    //% integrity.defl=100
    //% weight=90
    //% group="Structures"
    export function _loadStructure(name: string, to: Position, rotation?: number, mirror?: number, animationMode?: StructureAnimationMode, animationSeconds?: number, includeEntities = true, includeBlocks = true, integrity = 100) {
        return blocks.loadStructure(name, to, rotation, mirror, animationMode, animationSeconds, includeEntities, includeBlocks, integrity);
    }

    //% blockId=rubyMinecraftDeleteStructure
    //% block="180:$name という名前(なまえ)の構造物(こうぞうぶつ)を削除(さくじょ)する"
    //% name.defl="my structure"
    //% weight=80
    //% group="Structures"
    export function _deleteStructure(name: string) {
        return blocks.deleteStructure(name);
    }
    /////////////////////////


    //% help=blocks/positionsOfBlocksInRange
    //% promise
    //% weight=5
    //% blockId=rubyMinecraftpositionsOfBlocksInRangeAsync block="positions of all $block|from $from|to $to"
    //% blockHidden=true 
    //% blockExternalInputs=1
    //% block.shadow=minecraftBlock
    //% from.shadow=minecraftCreatePosition
    //% to.shadow=minecraftCreatePosition
    //% deprecated=1
    //% shim=blocks::positionsOfBlocksInRangeAsync promise
    export function _positionsOfBlocksInRange(block: number, from: Position, to: Position): Position[] {
        return blocks.positionsOfBlocksInRange(block, from, to);
    }

    //% help=blocks/kindsOfBlocksInRange
    //% promise
    //% weight=3
    //% blockId=rubyMinecraftkindsOfBlocksInRange block="all block kinds from $from|to $to"
    //% blockHidden=true 
    //% blockExternalInputs=1
    //% from.shadow=minecraftCreatePosition
    //% to.shadow=minecraftCreatePosition
    //% deprecated=1
    //% shim=blocks::kindsOfBlocksInRangeAsync promise
    export function _kindsOfBlocksInRange(from: Position, to: Position): number[] {
        return blocks.kindsOfBlocksInRange(from, to);
    }


    //% help=blocks/color-to-block
    //% weight=1
    //% blockId=rubyMinecraftBlocksColorToBlock block="%color=minecraftBlocksColor色(いろ)の%type|"
    //% deprecated=true
    //% shim=blocks::colorToBlock
    export function _colorToBlock(type: ColoredBlock, color: number): number {
        return blocks.colorToBlock(type, color);
    }

    //% help=blocks/color
    //% weight=1
    //% blockId=rubyMinecraftBlocksColor block="%color"
    //% blockHidden=true 
    //% deprecated=true
    //% shim=blocks::color
    export function _color(color: BlockColor): number {
        return blocks.color(color);
    }

}
