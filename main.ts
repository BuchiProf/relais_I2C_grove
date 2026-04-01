/**
 * Blocs pour le contrôle du module 4-Relais Seeed Studio.
 */
// % color="#03AA14" icon="\uf013" block="Relais Seeed"
namespace seeedRelay {

    export enum ActionRelais {
        // % block="allumé"
        Active = 1,
        // % block="éteint"
        Desactive = 0
    }

    /**
     * Change l'état d'un relais spécifique (1 à 4)
     */
    // % block="mettre le relais %num à %state"
    // % num.min=1 num.max=4 num.defl=1
    export function controlRelais(num: number, state: ActionRelais): void {
        let buf = pins.createBuffer(2);
        buf[0] = num;
        buf[1] = state;
        pins.i2cWriteBuffer(0x11, buf);
    }
}
