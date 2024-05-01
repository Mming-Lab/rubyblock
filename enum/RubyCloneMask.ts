const enum RubyCloneMask {
    //% block="10:置(お)き換(か)え"
    Replace,
    //% block="20:マスクされた"
    Masked
}

function toCloneMask(cloneMask: RubyCloneMask): CloneMask {
    switch (cloneMask) {
        case RubyCloneMask.Replace: return CloneMask.Replace;
        case RubyCloneMask.Masked: return CloneMask.Masked;
    }
}