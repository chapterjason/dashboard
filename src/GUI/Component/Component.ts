/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { ComponentInterface } from "./ComponentInterface";
import { Stylable } from "../Style/Stylable";
import { StyleValue } from "../Style/StyleValue";
import { StyleUnit } from "../Style/StyleUnit";
import { Entity } from "../Entity";
import { isStyleWithUnit } from "../Style/IsStyleWithUnit";
import { PositionInterface } from "../Position/PositionInterface";

export abstract class Component<Type extends HTMLElement = HTMLDivElement, Keys = keyof CSSStyleDeclaration> extends Entity implements ComponentInterface<Keys> {

    protected style: Stylable<Keys> = new Stylable<Keys>();

    protected element: Type;

    public deleteStyle(key: string | Keys): this {
        this.style.delete(key);
        this.element.style.removeProperty(key as string);
        return this;
    }

    public getStyle(key: string | Keys): StyleValue {
        return this.style.get(key);
    }

    public hasStyle(key: string | Keys): boolean {
        return this.style.has(key);
    }

    public setHeight(height: number): this {
        super.setHeight(height);
        this.setStyle("height", { value: height, unit: StyleUnit.PIXEL });
        return this;
    }

    public setStyle(key: string | Keys, value: StyleValue): this {
        this.style.set(key, value);
        if (isStyleWithUnit(value)) {
            (this.element.style as any)[key] = value.value.toString() + value.unit;
        } else {
            (this.element.style as any)[key] = value.toString();
        }
        return this;
    }

    public getElement(): Type {
        return this.element;
    }

    public setWidth(width: number): this {
        super.setWidth(width);
        this.setStyle("width", { value: width, unit: StyleUnit.PIXEL });
        return this;
    }

    public setX(x: number): this {
        super.setX(x);
        this.setStyle("left", { value: this.getX(), unit: StyleUnit.PIXEL });
        return this;
    }

    public setY(y: number): this {
        super.setY(y);
        this.setStyle("top", { value: this.getY(), unit: StyleUnit.PIXEL });
        return this;
    }

    public setOrigin(origin: PositionInterface): this {
        super.setOrigin(origin);
        this.setStyle("left", { value: this.getX(), unit: StyleUnit.PIXEL });
        this.setStyle("top", { value: this.getY(), unit: StyleUnit.PIXEL });
        return this;
    }
}
