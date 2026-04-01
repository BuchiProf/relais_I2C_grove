/**
 * Blocs pour le contrôle du module 4-Relais Seeed Studio.
 */
//%color="#03AA14" icon="\uf013" block="Relais Seeed"
namespace seeedRelay {

    export enum ActionRelais {
        //% block="allumé"
        Active = 1,
        //% block="éteint"
        Desactive = 0
    }

    // NOUVEAU : Menu déroulant pour le choix du relais
    export enum RelayNumber {
        // % block="1"
        Relay1 = 1,
        // % block="2"
        Relay2 = 2,
        // % block="3"
        Relay3 = 3,
        // % block="4"
        Relay4 = 4
    }

    /**
     * Change l'état d'un relais spécifique via menu déroulant
     */
    // % block="mettre le relais %num à %state"
    // % num.defl=RelayNumber.Relay1
    export function controlRelay(num: RelayNumber, state: ActionRelais): void {
        let buf = pins.createBuffer(2);
        buf[0] = num;   // Utilise la valeur de l'enum (1, 2, 3 ou 4)
        buf[1] = state; // Utilise 1 ou 0
        pins.i2cWriteBuffer(0x11, buf);
    }
}
