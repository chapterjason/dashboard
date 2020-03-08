/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {StyleValue} from "./StyleValue";

export interface StyleInterface<Styles extends object = {}, Keys = keyof Styles> {

    setStyle(key: Keys | string, value: StyleValue): this;

    getStyle(key: Keys | string): StyleValue;

    hasStyle(key: Keys | string): boolean

}
