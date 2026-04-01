namespace seeedRelay {

    // Cette partie crée un menu déroulant pour ON et OFF
    export enum RelayState {
        // % block="allumé"
        On = 1,
        // % block="éteint"
        Off = 0
    }

    /**
     * Change l'état d'un relais spécifique (1 à 4)
     */
    // % block="mettre le relais %num à %state"
    // % num.min=1 num.max=4 num.defl=1
    export function controlRelay(num: number, state: RelayState): void {
        let buf = pins.createBuffer(2);
        buf[0] = num;
        buf[1] = state;
        pins.i2cWriteBuffer(0x11, buf);
    }

    /**
     * Éteint tous les relais
     */
    // % block="éteindre tous les relais"
    export function allOff(): void {
        for (let i = 1; i <= 4; i++) {
            controlRelay(i, RelayState.Off);
        }
    }
}
