namespace mobs {

    //% help=mobs/spawn
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftSummon 
    //% block="10:%entity=minecraftAnimal を|%destination=minecraftCreatePosition |に 出現(しゅつげん)させる"
    //% entity.shadow=minecraftAnimal
    //% topblock topblockWeight=80
    //% mob.defl=CHICKEN
    //% shim=mobs::spawnAsync promise
    export function _spawn(mob: number, destination: Position): void {
        mobs.spawn(mob, destination);
    }

    //% help=mobs/on-mob-killed
    //% weight=340
    //% blockId=rubyMinecraftMobKilled
    //% block="20:%mob=minecraftAnimal|が行動(こうどう)不能(ふのう)にされた時(とき)"
    //% mob.shadow=minecraftAnimal
    //% mob.defl=CHICKEN
    //% shim=mobs::onMobKilledAsync promise
    export function _onMobKilled(mob: number, handler: () => void): void {
        mobs.onMobKilled(mob, handler);
    }

    //% help=mobs/kill
    //% promise
    //% weight=330
    //% blockId=rubyMinecraftKill
    //% block="30:次(つぎ)の対象(たいしょう)を行動(こうどう)不能(ふのう)にする %target=rubyMinecraftTarget"
    //% blockExternalInputs=1
    //% shim=mobs::killAsync promise
    export function _kill(target: TargetSelector): void {
        mobs.kill(target);
    }


    //% blockId=rubyMinecraftEffectField 
    //% shim=TD_ID 
    //% weight=321
    //% block="特殊(とくしゅ)効果(こうか) %effect"
    //% blockHidden=true 
    export function _effect2(effect: RubyEffect): number {
        return mobs.__effect(toEffect(effect));
    }

    //% weight=320
    //% shim=TD_ID blockId=rubyMinecraftAnimal
    //% block="生(い)き物(もの) %name"
    //% blockHidden=true 
    export function _animal(name: RubyAnimalMob): number {
        return mobs.animal(toAnimalMob(name));
    }

    //% help=mobs/monster
    //% blockId=rubyMinecraftMonster
    //% block="モンスター %name"
    //% weight=310
    //% shim=mobs::monster
    //% blockHidden=true 
    export function _monster(name: RubyMonsterMob): number {
        return mobs.monster(toMonsterMob(name));
    }


    //% help=mobs/projectile
    //% shim=TD_ID blockId=rubyMinecraftProjectile
    //% block="40:飛(と)び道具(どうぐ) %name"
    //% weight=305
    export function _projectile(name: RubyProjectileMob): number {
        return mobs.projectile(toProjectileMob(name));
    }
    
    //% weight=270 help=mobs/apply-effect
    //% blockId=rubyMinecraftApplyEffect
    //% block="50:%target=rubyMinecraftTarget| に継続(けいぞく)時間(じかん) %duration| 効果(こうか)レベル %amplifier| の %effect=minecraftEffectField|を与(あた)える"
    //% duration.min=0 duration.max=600 duration.defl=10
    //% amplifier.min=0 amplifier.max=255 amplifier.defl=1
    //% inlineInputMode="inline"
    //% shim=mobs::applyEffectAsync promise
    export function _applyEffect(effect: number, target: TargetSelector, duration?: number, amplifier?: number): void {
        mobs.applyEffect(effect, target, duration, amplifier);
    }

    //% promise
    //% weight=260 help=mobs/clear-effect
    //% blockId=rubyMinecraftClearEffect
    //% block="60:%target=rubyMinecraftTarget|から全(すべ)てのステータス効果(こうか)を消去(しょうきょ)する"
    //% shim=mobs::clearEffectAsync promise
    export function _clearEffect(target: TargetSelector): void {
        mobs.clearEffect(target);
    }

    //% help=mobs/give
    //% promise
    //% weight=240
    //% blockId=rubyMinecraftGive
    //% block="70:次(つぎ)の対象(たいしょう) %target=rubyMinecraftTarget| に %block=minecraftBlock| を %amount| つ 渡(わた)す"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% shim=mobs::giveAsync promise
    //% amount.defl=1
    export function _give(target: TargetSelector, block: number, amount: number): void {
        mobs.give(target, block, amount);
    }

    //% help=mobs/teleport-to-position
    //% promise
    //% weight=230
    //% blockId=rubyMinecraftTeleport
    //% block="80:%target=rubyMinecraftTarget| を %destination=minecraftCreatePosition| に テレポートさせる"
    //% blockExternalInputs=1
    //% shim=mobs::teleportToPositionAsync promise
    export function _teleportToPosition(target: TargetSelector, destination: Position): void {
        mobs.teleportToPosition(target, destination);
    }

    //% help=mobs/teleport-to-player
    //% promise
    //% weight=220
    //% blockId=rubyMinecraftTeleportToPlayer
    //% block="90:%target=rubyMinecraftTarget| を %destination=rubyMinecraftTarget|の元(もと)へテレポートさせる"
    //% blockExternalInputs=1
    //% shim=mobs::teleportToPlayerAsync promise
    export function _teleportToPlayer(target: TargetSelector, destination: TargetSelector): void {
        mobs.teleportToPlayer(target, destination);
    }


    //% help=mobs/enchant
    //% promise
    //% weight=210
    //% blockId=rubyMinecraftEnchant
    //% block="100:手(て)に持(も)っているアイテムにエンチャントを付与(ふよ)する| 対象(たいしょう) %target=rubyMinecraftTarget| に エンチャント %spell| を %level| で かける"
    //% inlineInputMode="external"
    //% shim=mobs::enchantAsync promise
    //% spell.defl="infinity"
    //% level.defl=1
    export function _enchant(target: TargetSelector, spell: string, level: number): void {
        mobs.enchant(target, spell, level);
    }


    //% help=mobs/execute-detect
    //% weight=120
    //% blockId=rubyMinecraftExecuteDetect
    //% block="110:ブロック %block=minecraftBlock| が 位置(いち) %detectPosition=minecraftCreatePosition| に 見(み)つかったら コマンド %command| を実行(じっこう)する"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% shim=mobs::executeDetectAsync promise
    //% command.defl="say Hi!"
    export function _executeDetect(detectBlock: number, detectPosition: Position, command: string): void {
        mobs.executeDetect(detectBlock, detectPosition, command);
    }



    //% help=mobs/execute
    //% weight=110
    //% blockId=rubyMinecraftExecuteAsOther
    //% block="120:%target=rubyMinecraftTarget| として 位置(いち) %position=minecraftCreatePosition| で コマンド %command| を実行(じっこう)する"
    //% blockExternalInputs=1
    //% shim=mobs::executeAsync promise
    //% command.defl="say Hi!"
    export function _execute(target: TargetSelector, position: Position, command: string): void {
        mobs.execute(target, position, command);
    }


    //% help=mobs/selectors/target
    //% blockId=rubyMinecraftTarget
    //% block=" %kind " weight=99 group="Selectors"
    //% shim=mobs::target
    export function _target(kind: RubyTargetSelectorKind): TargetSelector {
        return mobs.target(toTargetSelectorKind(kind));
    }


    //% help=mobs/selectors/near
    //% blockId=rubyMinecraftTargetNear
    //% block="140:ある位置(いち)から一定(いってい)の範囲内(はんいない)にいる %target=rubyMinecraftTarget| 位置(いち) %pos=minecraftCreateWorldPosition|半径(はんけい) %radios|" weight=39
    //% blockExternalInputs=1 group="Selectors"
    //% shim=mobs::near
    export function _near(target: TargetSelector, pos: Position, radius: number): TargetSelector {
        return mobs.near(target, pos, radius);
    }

    //% help=mobs/selectors/entities-by-type
    //% blockId=rubyMinecraftTargetSelectByType
    //% block="150:すべての %type=minecraftAnimal" weight=38 group="Selectors"
    //% type.shadow=minecraftAnimal
    //% type.defl=CHICKEN
    //% shim=mobs::entitiesByType
    export function _entitiesByType(type: number): TargetSelector {
        return mobs.entitiesByType(type);
    }

    //% help=mobs/selectors/player-in-game-mode
    //% blockId=rubyMinecraftTargetSelectGameMode
    //% block="160:ゲームモードが %mode| のプレイヤー" weight=37 group="Selectors"
    //% shim=mobs::playersInGameMode
    export function _playersInGameMode(mode: GameMode): TargetSelector {
        return mobs.playersInGameMode(mode);
    }

    //% help=mobs/selectors/player-by-name
    //% blockId=rubyMinecraftTargetSelectName
    //% block="170:名前(なまえ)が %name| の プレイヤー" weight=36 group="Selectors"
    //% shim=mobs::playerByName
    //% name.defl="name"
    export function _playerByName(name: string): TargetSelector {
        return mobs.playerByName(name);
    }


    //% promise
    //% weight=0
    //% blockId=rubyMinecraftEffect block="%target=rubyMinecraftTargetに||持続(じぞく)時間(じかん)%duration強(つよ)さ%amplifierの%effectを与(あた)える"
    //% expandableArgumentMode=toggle
    //% duration.min=0 duration.max=600 duration.defl=10
    //% amplifier.min=0 amplifier.max=255 amplifier.defl=1
    //% inlineInputMode="inline"
    //% deprecated=true
    //% shim=mobs::effectAsync promise
    export function _effect(effect: RubyEffect, target: TargetSelector, duration?: number, amplifier?: number): void {
        mobs.effect(toEffect(effect), target, duration, amplifier);
    }

}
