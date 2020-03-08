/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { PositionInterface } from "./PositionInterface";

export class Position implements PositionInterface {

    protected x: number = 0;

    protected y: number = 0;

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public setX(x: number): this {
        this.x = x;

        return this;
    }

    public setY(y: number): this {
        this.y = y;

        return this;
    }

}
