const enum RubyLeverPosition {
    //% block="10:ブロックの下側(したがわ)に東西(とうざい)を指(さ)して" alias=BLOCK_BOTTOM_EAST_WHEN_OFF
    BlockBottomEastWhenOff,
    //% block="20:ブロックの東側(ひがしがわ)" alias=BLOCK_SIDE_FACING_EAST
    BlockSideFacingEast,
    //% block="30:ブロックの西側(にしがわ)" alias=BLOCK_SIDE_FACING_WEST
    BlockSideFacingWest,
    //% block="40:ブロックの南側(みなみがわ)" alias=BLOCK_SIDE_FACING_SOUTH
    BlockSideFacingSouth,
    //% block="50:ブロックの北側(きたがわ)" alias=BLOCK_SIDE_FACING_NORTH
    BlockSideFacingNorth,
    //% block="60:ブロックの上側(うわがわ)に南北(なんぼく)を指(さ)して" alias=BLOCK_TOP_POINTS_SOUTH_WHEN_OFF
    BlockTopPointsSouthWhenOff,
    //% block="70:ブロックの上側(うわがわ)に東西(とうざい)を指(さ)して" alias=BLOCK_TOP_POINTS_EAST_WHEN_OFF
    BlockTopPointsEastWhenOff,
    //% block="80:ブロックの下側(したがわ)に南北(なんぼく)を指(さ)して" alias=BLOCK_BOTTOM_POINTS_SOUTH_WHEN_OFF
    BlockBottomPointsSouthWhenOff,
}

function toLeverPosition(leverPosition: RubyLeverPosition): LeverPosition {
    switch (leverPosition) {
        case RubyLeverPosition.BlockBottomEastWhenOff: return LeverPosition.BlockBottomEastWhenOff;
        case RubyLeverPosition.BlockSideFacingEast: return LeverPosition.BlockSideFacingEast;
        case RubyLeverPosition.BlockSideFacingWest: return LeverPosition.BlockSideFacingWest;
        case RubyLeverPosition.BlockSideFacingSouth: return LeverPosition.BlockSideFacingSouth;
        case RubyLeverPosition.BlockSideFacingNorth: return LeverPosition.BlockSideFacingNorth;
        case RubyLeverPosition.BlockTopPointsSouthWhenOff: return LeverPosition.BlockTopPointsSouthWhenOff;
        case RubyLeverPosition.BlockTopPointsEastWhenOff: return LeverPosition.BlockTopPointsEastWhenOff;
        case RubyLeverPosition.BlockBottomPointsSouthWhenOff: return LeverPosition.BlockBottomPointsSouthWhenOff;
    }
}