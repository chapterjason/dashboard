/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { EntityInterface } from "./EntityInterface";
import { PositionInterface } from "./Position/PositionInterface";
import { Position } from "./Position/Position";
import { Plane } from "./Plane/Plane";

export class Entity extends Plane implements EntityInterface {
    protected position: PositionInterface = new Position();

    protected origin: PositionInterface = new Position();

    public intersect(entity: EntityInterface): boolean {
        const leftX: number = Math.max(this.getX(), entity.getX());
        const rightX: number = Math.min(this.getX() + this.getWidth(), entity.getX() + entity.getWidth());
        const topY: number = Math.max(this.getY(), entity.getY());
        const bottomY: number = Math.min(this.getY() + this.getHeight(), entity.getY() + entity.getHeight());

        return leftX < rightX && topY < bottomY;
    }

    public getPosition(): PositionInterface {
        const position = new Position();
        position.setX(this.getX());
        position.setY(this.getY());
        return position;
    }

    public getX(): number {
        return this.position.getX() - (this.width * this.origin.getX());
    }

    public getY(): number {
        return this.position.getY() - (this.height * this.origin.getY());
    }

    public setPosition(position: PositionInterface): this;
    public setPosition(x: number, y: number): this;
    public setPosition(position: PositionInterface | number, y?: number): this {
        if (typeof position === "object") {
            this.setX(position.getX());
            this.setY(position.getY());
        } else {
            this.setX(position);
            this.setY(y);
        }
        return this;
    }

    public setX(x: number): this {
        this.position.setX(x);
        return this;
    }

    public setY(y: number): this {
        this.position.setY(y);
        return this;
    }

    public getOrigin(): PositionInterface {
        return this.origin;
    }

    public setOrigin(origin: PositionInterface): this {
        const x = origin.getX();
        const y = origin.getY();

        if (!(x >= 0 && x <= 1)) {
            throw new Error("Origin x out of range");
        }

        if (!(y >= 0 && y <= 1)) {
            throw new Error("Origin y out of range");
        }

        this.origin.setX(x);
        this.origin.setY(y);

        return undefined;
    }

}
