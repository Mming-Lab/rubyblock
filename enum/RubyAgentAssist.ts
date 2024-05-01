const enum RubyAgentAssist {
    //% block="10:動(うご)きながら置(お)く" alias="PLACE_ON_MOVE"
    PlaceOnMove,
    //% block="20:アイテムがなくなったら次(つぎ)のアイテムを使(つか)う" alias=PLACE_FROM_ANY_SLOT
    PlaceFromAnySlot,
    //% block="30:障害物(しょうがいぶつ)を壊(こわ)す" alias=DESTROY_OBSTACLES
    DestroyObstacles,
    //% blockHidden=true
    DetroyObstacles
}

function toAgentAssist(agentAssist: RubyAgentAssist): AgentAssist {
    switch (agentAssist) {
        case RubyAgentAssist.PlaceOnMove: return AgentAssist.PlaceOnMove;
        case RubyAgentAssist.PlaceFromAnySlot: return AgentAssist.PlaceFromAnySlot;
        case RubyAgentAssist.DestroyObstacles: return AgentAssist.DestroyObstacles;
        case RubyAgentAssist.DetroyObstacles: return AgentAssist.DetroyObstacles;
    }
}