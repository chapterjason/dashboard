/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export interface PositionInterface {

    getX(): number;

    setX(x: number): this;

    getY(): number;

    setY(y: number): this;

}
