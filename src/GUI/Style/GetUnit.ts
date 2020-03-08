/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { StyleUnit } from "./StyleUnit";

const unitValues = Object.values(StyleUnit);
const unitKeys = Object.keys(StyleUnit);

export function GetUnit(unit: string | StyleUnit): StyleUnit {
    const index = unitValues.indexOf(unit as StyleUnit);

    if (-1 === index) {
        throw new Error("Invalid unit");
    }

    return StyleUnit[unitKeys[index]];
}
