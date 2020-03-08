/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {StyleValue} from "./StyleValue";

export interface StyleInterface<Keys = keyof CSSStyleDeclaration> {

    set(key: Keys | string, value: StyleValue): this;

    get(key: Keys | string): StyleValue;

    has(key: Keys | string): boolean

    delete(key: Keys | string): this;

}
