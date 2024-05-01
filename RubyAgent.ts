namespace agent {

    //% help=agent/teleport-to-player
    //% promise
    //% weight=380
    //% blockId=rubyMinecraftAgentTeleport block="10:エージェントを自分(じぶん)の位置(いち)にもどす"
    //% topblock topblockWeight=65
    //% shim=agent::teleportToPlayerAsync promise
    export function _teleportToPlayer(): void {
        agent.teleportToPlayer();
    }

    //% help=agent/move
    //% promise
    //% weight=370
    //% blockId=rubyMinecraftAgentMove block="20:エージェントを %direction|に %blocks| ブロック移動(いどう)させる"
    //% topblock topblockWeight=63
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::moveAsync promise
    //% blocks.defl=1
    export function _move(direction: number, blocks: number): void {
        agent.move(direction, blocks);
    }

    //% help=agent/turn
    //% promise
    //% weight=360
    //% blockId=rubyMinecraftAgentTurn block="30:エージェントの向(む)きを %direction| に変(か)える"
    //% topblock topblockWeight=60
    //% direction.shadow=rubyMinecraftAgentTurnDirection
    //% shim=agent::turnAsync promise
    export function _turn(direction: number): void {
        agent.turn(direction);
    }

    //% help=agent/get-position
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftAgentGetPosition block="40:エージェントの座標(ざひょう)"
    //% shim=agent::getPositionAsync promise
    export function _getPosition(): Position {
        return agent.getPosition();
    }

    //% help=agent/get-orientation
    //% promise
    //% weight=340
    //% blockId=rubyMinecraftAgentGetOrientation block="50:エージェントの向(む)いている方角(ほうがく)"
    //% shim=agent::getOrientationAsync promise
    export function _getOrientation(): number {
        return agent.getOrientation();
    }

    //% help=agent/teleport
    //% promise
    //% weight=330
    //% blockId=rubyMinecraftAgentTeleportPos block="60:エージェントを $pos=minecraftCreatePosition| へ $dir|向(む)きにテレポートさせる"
    //% dir.shadow=rubyMinecraftAgentCompassDirection
    //% shim=agent::teleportAsync promise
    export function _teleport(pos: Position, dir: number): void {
        agent.teleport(pos, dir);
    }

    //% help=agent/set-assist
    //% weight=310
    //% blockId=rubyMinecraftAgentChangeAssist block="70:エージェントの設定(せってい)を追加(ついか) %assist| %on|"
    //% on.shadow=toggleOnOff
    //% shim=agent::setAssist
    export function _setAssist(assist: RubyAgentAssist, on: boolean): void {
        agent.setAssist(toAgentAssist(assist), on);
    }

    //% weight=300
    //% shim=TD_ID
    //% blockId=rubyMinecraftAgentCompassDirection
    //% block="$direction"
    export function __compassDirection(direction: RubyCompassDirection): number {
        return agent._compassDirection(toCompassDirection(direction));
    }

    //% weight=290
    //% shim=TD_ID
    //% blockId=rubyMinecraftAgentTurnDirection
    //% block="$direction"
    export function __turnDirection(direction: RubyTurnDirection): number {
        return agent._turnDirection(toTurnDirection(direction));
    }

    //% weight=280
    //% shim=TD_ID
    //% blockId=rubyMinecraftAgentSixDirection
    //% block="$direction"
    export function __sixDirection(direction: RubySixDirection): number {
        return agent._sixDirection(toSixDirection(direction));
    }


    //% help=agent/place
    //% promise
    //% group="Actions" weight=270
    //% blockId=rubyMinecraftAgentPlace block="80:エージェントに %direction| へ 置(お)かせる"
    //% topblock topblockWeight=55
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::placeAsync promise
    export function _place(direction: number): void {
        agent.place(direction);
    }

    //% help=agent/interact
    //% promise
    //% group="Actions" weight=265
    //% blockId=rubyMinecraftAgentInteract block="90:エージェントを$directionに向(む)けてインタラクトさせる"
    //% topblockWeight=54
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::interactAsync promise
    export function _interact(direction: number): void {
        agent.interact(direction);
    }

    //% help=agent/destroy
    //% promise
    //% group="Actions" weight=260
    //% blockId=rubyMinecraftAgentCommandDestroy block="100:エージェントに %direction| を 破壊(はかい)させる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::destroyAsync promise
    export function _destroy(direction: number): void {
        agent.destroy(direction);
    }

    //% help=agent/till
    //% promise
    //% group="Actions" weight=250
    //% blockId=rubyMinecraftAgentCommandTill block="110:エージェントに %direction| を 耕(たがや)させる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::tillAsync promise
    export function _till(direction: number): void {
        agent.till(direction);
    }

    //% help=agent/attack
    //% promise
    //% group="Actions" weight=240
    //% blockId=rubyMinecraftAgentCommandAttack block="120:エージェントに %direction| を 攻撃(こうげき)させる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::attackAsync promise
    export function _attack(direction: number): void {
        agent.attack(direction);
    }

    //% help=agent/collect-all
    //% promise
    //% group="Actions" weight=230
    //% blockId=rubyMinecraftAgentCollectAll block="130:エージェントに 全(すべ)て拾(ひろ)わせる"
    //% shim=agent::collectAllAsync promise
    export function _collectAll(): void {
        agent.collectAll();
    }

    //% help=agent/collect
    //% promise
    //% group="Actions" weight=220
    //% blockId=rubyMinecraftAgentCollect block="140:エージェントに %block=minecraftItem| を拾(ひろ)わせる"
    //% block.shadow=minecraftItem
    //% shim=agent::collectAsync promise
    export function _collect(block: number): void {
        agent.collect(block);
    }

    //% help=agent/inspect
    //% promise
    //% group="Actions" weight=210
    //% blockId=rubyMinecraftAgentInspect block="150:エージェントの%direction|の%kind|"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::inspectAsync promise
    export function _inspect(kind: AgentInspection, direction: RubySixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% help=agent/detect
    //% promise
    //% weight=205
    //% blockId=rubyMinecraftAgentDetect block="160:エージェントの%direction| に%kind| がある"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% group="Actions"
    //% shim=agent::detectAsync promise
    export function _detect(kind: AgentDetection, direction: RubySixDirection): boolean {
        return agent.detect(kind, direction);
    }

    //% help=agent/set-slot
    //% group="Inventory" weight=170
    //% blockId=rubyMinecraftAgentSetSlot block="170:エージェントのスロット番号(ばんごう) %slot| を 有効(ゆうこう)にする"
    //% slot.min=1 slot.max=27 slot.defl=1
    //% shim=agent::setSlot
    export function _setSlot(slot: number): void {
        agent.setSlot(slot);
    }

    //% help=agent/set-item
    //% promise
    //% group="Inventory" weight=165
    //% blockId=rubyMinecraftAgentSetItem block="180:エージェントに $blockOrItem| を $count|個(こ) 、自分(じぶん)のスロット $slot|番(ばん)に設定(せってい)させる"
    //% blockOrItem.shadow=minecraftBlock
    //% slot.min=1 slot.max=27 slot.defl=1
    //% count.min=1 count.max=64 count.defl=1
    //% shim=agent::setItemAsync promise
    export function _setItem(blockOrItem: number, count: number, slot: number): void {
        agent.setItem(blockOrItem, count, slot);
    }


    //% help=agent/drop-all
    //% promise
    //% group="Inventory" weight=160
    //% blockId=rubyMinecraftAgentCommandDropAll block="190:エージェントに %direction| へ 全(すべ)てのアイテムを落(お)とさせる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::dropAllAsync promise
    export function _dropAll(direction: number): void {
        agent.dropAll(direction);
    }


    //% help=agent/drop
    //% promise
    //% group="Inventory" weight=150
    //% blockId=rubyMinecraftAgentDrop block="200:エージェントに %direction|へスロット番号(ばんごう) %slot|から 数量(すうりょう) %amount|を落(お)とさせる"
    //% inlineInputMode="inline"
    //% quantity.min=1 quantity.max=64 quantity.defl=1
    //% slot.min=1 slot.max=27 slot.defl=1
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::dropAsync promise
    export function _drop(direction: number, slot: number, quantity: number): void {
        agent.drop(direction, slot, quantity);
    }

    //% help=agent/transfer
    //% promise
    //% group="Inventory" weight=140
    //% blockId=rubyMinecraftAgentTransfer block="210:エージェントの持(も)ち物(もの)のアイテムを移動(いどう)させる|数量(すうりょう) %quantity|転送(てんそう)元(もと)のスロット番号(ばんごう) %srcSlot|転送(てんそう)先(さき)のスロット番号(ばんごう) %destinationSlot"
    //% inlineInputMode="inline"
    //% quantity.min=1 quantity.max=64 quantity.defl=1
    //% sourceSlot.min=1 sourceSlot.max=27 sourceSlot.defl=1
    //% destinationSlot.min=1 destinationSlot.max=27 destinationSlot.defl=2
    //% shim=agent::transferAsync promise
    export function _transfer(quantity: number, sourceSlot: number, destinationSlot: number): void {
        agent.transfer(quantity, sourceSlot, destinationSlot);
    }

    //% help=agent/get-item-count
    //% promise
    //% group="Inventory" weight=130
    //% blockId=rubyMinecraftAgentGetItemCount block="220:エージェントのスロット番号(ばんごう) %slot|のアイテムの数(かず)"
    //% slot.min=1 slot.max=27 slot.defl=1
    //% shim=agent::getItemCountAsync promise
    export function _getItemCount(slot: number): number {
        return agent.getItemCount(slot);
    }


    //% help=agent/get-item-detail
    //% promise
    //% group="Inventory" weight=120
    //% blockId=rubyMinecraftAgentGetItemDetail block="230:エージェントのスロット番号(ばんごう) %slot|のアイテム"
    //% slot.min=1 slot.max=27 slot.defl=1
    //% shim=agent::getItemDetailAsync promise
    export function _getItemDetail(slot: number): number {
        return agent.getItemDetail(slot);
    }

    //% help=agent/get-item-space
    //% promise
    //% group="Inventory" weight=110
    //% blockId=rubyMinecraftAgentGetItemSpace block="240:エージェントのスロット番号(ばんごう) %slot| のまだ持(も)てるアイテムの数(かず)"
    //% slot.min=1 slot.max=27
    //% shim=agent::getItemSpaceAsync promise
    export function _getItemSpace(slot: number): number {
        return agent.getItemSpace(slot);
    }

    //% help=agent/turn
    //% blockId=rubyAgentturnleft block="Agent を左(ひだり)に回転(かいてん)させる"
    //% blockHidden=1
    export function _turnLeft() {
        agent.turnLeft();
    }

    //% help=agent/turn
    //% blockId=rubyAgentturnright block="Agent を右(みぎ)に回転(かいてん)させる"
    //% blockHidden=1
    export function _turnRight() {
        agent.turnRight();
    }

}
