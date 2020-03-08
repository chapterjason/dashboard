/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { PositionInterface } from "./PositionInterface";

export interface PositionAwareInterface extends PositionInterface {

    setPosition(position: PositionInterface): this;

    setPosition(x: number, y: number): this;

    getPosition(): PositionInterface;

}
