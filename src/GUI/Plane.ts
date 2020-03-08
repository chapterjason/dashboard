/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { PlaneInterface } from "./PlaneInterface";

export class Plane implements PlaneInterface {

    protected width: number = 0;

    protected height: number = 0;

    public getHeight(): number {
        return this.height;
    }

    public getWidth(): number {
        return this.width;
    }

    public setHeight(height: number): this {
        this.height = height;

        return this;
    }

    public setWidth(width: number): this {
        this.width = width;

        return this;
    }

}
