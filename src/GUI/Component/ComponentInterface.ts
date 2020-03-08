/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { StyleValue } from "../Style/StyleValue";
import { EntityInterface } from "../EntityInterface";

export interface ComponentInterface<Keys = keyof CSSStyleDeclaration> extends EntityInterface {

    setStyle(key: Keys | string, value: StyleValue): this;

    getStyle(key: Keys | string): StyleValue;

    hasStyle(key: Keys | string): boolean

    deleteStyle(key: Keys | string): this;

    getElement(): HTMLElement;

}
