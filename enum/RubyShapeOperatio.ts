const enum RubyShapeOperation {
    /**
     * Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities.
     */
    //% block="10:置(お)き換(か)え"
    Replace,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are changed to air, dropping their contents as entities but not themselves.
     * If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block="20:中空(なかぞら)"
    Hollow,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are not affected. If the fill region has no inner blocks
     * (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block="30:アウトライン"
    Outline
}

function toShapeOperation(shapeOperation: RubyShapeOperation): ShapeOperation {
    switch (shapeOperation) {
        case RubyShapeOperation.Replace: return ShapeOperation.Replace;
        case RubyShapeOperation.Hollow: return ShapeOperation.Hollow;
        case RubyShapeOperation.Outline: return ShapeOperation.Outline;
    }
}