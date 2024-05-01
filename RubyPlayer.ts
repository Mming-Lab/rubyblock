namespace player {

    //% help=player/on-chat-command
    //% promise
    //% weight=360
    //% blockId=rubyMinecraftOnChat block="10:チャットコマンド %command|を入力(にゅうりょく)した時(とき)"
    //% optionalVariableArgs
    //% topblock topblockWeight=95
    //% command.defl="jump"
    export function _onChat(command: string, handler: (num1: number, num2: number, num3: number) => void) {
        player.onChat(command, handler);
    }


    //% help=player/on-item-used
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftOnItemInteracted block="20:次(つぎ)の$item|が使(つか)われた時(とき)"
    //% item.shadow=minecraftItem
    //% shim=player::onItemInteractedAsync promise
    export function _onItemInteracted(item: number, handler: () => void): void {
        player.onItemInteracted(item, handler);
    }

    //% help=player/on-chat-command
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftOnChatCommand block="チャットコマンド %command|を入力(にゅうりょく)した時(とき)"
    //% mutate=objectdestructuring
    //% mutatePropertyEnum=ChatArgument
    //% mutateText="Command arguments"
    //% mutatePrefix="with"
    //% deprecated=true
    export function _onChatCommand(command: string, argTypes: ChatArgument[], handler: (args: player.ChatCommandArguments) => void): void {
        player.onChatCommand(command, argTypes, handler);
    }

    //% help=player/say
    //% weight=340
    //% blockId=rubyMinecraftSay block="30:メッセージ%messageを 送信(そうしん)"
    //% message.shadow=text
    //% message.defl='":)"'
    export function _say(message: any) {
        player.say(message);
    }


    //% help=player/teleport
    //% promise
    //% weight=330
    //% blockId=rubyMinecraftPlayerTeleport block="40:%to=minecraftCreatePosition| に テレポートする"
    //% shim=player::teleportAsync promise
    export function _teleport(to: Position): void {
        return player.teleport(to);
    }


    //% help=player/on-travelled
    //% promise
    //% weight=320
    //% blockId=rubyMinecraftPlayerTravelled block="50:プレイヤーが %method| 時(とき)"
    //% topblock topblockWeight=90
    //% shim=player::onTravelledAsync promise
    //% method.defl=RubyTravelMethod.Walk
    export function _onTravelled(method: RubyTravelMethod, handler: () => void): void {
        player.onTravelled(toTravelMethod(method), handler);
    }

    //% help=player/on-died
    //% promise
    //% weight=310
    //% blockId=rubyMinecraftPlayerDied block="60:プレイヤーが死(し)んだ時(とき)"
    //% shim=player::onDiedAsync promise
    export function _onDied(handler: () => void): void {
        player.onDied(handler);
    }

    //% help=player/position
    //% promise
    //% weight=250
    //% blockId=rubyMinecraftMyPosition block="70:プレイヤーの位置(いち)"
    //% shim=player::positionAsync promise
    export function _position(): Position {
        return player.position();
    }

    //% promise
    //% weight=245
    //% blockId=rubyMinecraftPlayerGetOrientation block="80:プレイヤーの向(む)いている方角(ほうがく)"
    //% shim=player::getOrientationAsync promise
    export function _getOrientation(): number {
        return player.getOrientation();
    }

    //% help=player/name
    //% weight=240
    //% blockId=rubyMinecraftMyName block="80:プレイヤーの名前(なまえ)"
    //% shim=player::name
    export function _name(): string {
        return player.name();
    }


    //% help=player/execute
    //% promise
    //% weight=230
    //% blockId=rubyMinecraftExecute block="90:コマンド %command| を 実行(じっこう)する"
    //% blockExternalInputs=1
    //% shim=player::executeAsync promise
    //% command.defl="say Hi!"
    export function _execute(command: string): void {
        player.execute(command);
    }

    //% help=player/tell
    //% weight=220
    //% blockId=rubyMinecraftTell block="100:%target=rubyMinecraftTarget| だけに %message| と ささやく"
    //% inlineInputMode="inline"
    //% message.shadow=text
    //% message.defl="Hi!"
    export function _tell(target: TargetSelector, message: any) {
        player.tell(target, message);
    }

    //% help=player/on-arrow-shot
    //% promise
    //% weight=210
    //% blockId=rubyMinecraftOnArrowShot block="110:プレイヤーが矢(や)を放(はな)った時(とき)"
    //% shim=player::onArrowShotAsync promise
    export function _onArrowShot(handler: () => void): void {
        player.onArrowShot(handler);
    }

    //% help=player/run-chat-command
    //% weight=140
    //% blockId=rubyMinecraftRunChatCommand block="120:チャットコマンド %command| を 実行(じっこう)する"
    //% shim=player::runChatCommand
    //% command.defl="jump"
    export function _runChatCommand(command: string): void {
        player.runChatCommand(command);
    }

    //% help=player/run-chat-command-with-args
    //% weight=130
    //% blockId=rubyMinecraftRunChatCommandArgs block="130:チャットコマンド %command| を 引数(ひきすう) %arg| で 実行(じっこう)"
    //% arg.shadowOptions.toString=true
    //% shim=player::runChatCommandWithArguments
    //% command.defl="jump"
    export function _runChatCommandWithArguments(command: string, arg: string): void {
        player.runChatCommandWithArguments(command, arg);
    }

    //% help=player/on-tell-command
    //% promise
    //% weight=120
    //% blockId=rubyMinecraftOnTellCommand block="140:%command| と ささやかれた時(とき)"
    //% shim=player::onTellCommandAsync promise
    //% command.defl="jump"
    export function _onTellCommand(command: string, handler: () => void): void {
        player.onTellCommand(command, handler);
    }

    //% help=player/on-teleported
    //% promise
    //% weight=110
    //% blockId=rubyMinecraftPlayerOnTeleported block="150:プレイヤーがテレポートした時(とき)"
    //% shim=player::onTeleportedAsync promise
    export function _onTeleported(handler: () => void): void {
        player.onTeleported(handler);
    }

    //% help=player/on-bounced
    //% promise
    //% weight=1
    //% blockId=rubyMinecraftPlayerBounced block="160:プレイヤーがバウンドした時(とき)"
    //% deprecated=true
    //% shim=player::onBouncedAsync promise
    export function _onBounced(handler: () => void): void {
        player.onBounced(handler);
    }

    //% help=player/on-camera-used
    //% promise
    //% weight=1
    //% blockId=rubyMinecraftOnCameraUsed block="170:カメラが使(つか)われた時(とき)"
    //% deprecated=true
    //% shim=player::onCameraUsedAsync promise
    export function _onCameraUsed(handler: () => void): void {
        player.onCameraUsed(handler);
    }



}