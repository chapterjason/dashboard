import {StyleInterface} from "./StyleInterface";
import {StyleValue} from "./StyleValue";
import {StyleUnit} from "./StyleUnit";
import {isStyleWithUnit} from "./IsStyleWithUnit";

export class Stylable<Styles extends object = {}, Keys = keyof Styles> implements StyleInterface<Styles, Keys> {

    protected styles: Map<string | Keys, StyleValue> = new Map<string, StyleValue>();

    public getStyle(key: string | Keys): StyleValue {
        if (!this.styles.has(key)) {
            throw new Error("Missing style ...");
        }

        return this.styles.get(key) as StyleValue;
    }

    public hasStyle(key: string | Keys): boolean {
        return this.styles.has(key);
    }

    public setStyle(key: string | Keys, value: StyleValue): this {
        if (typeof value === "number") {
            this.styles.set(key, {
                value,
                unit: StyleUnit.PIXEL,
            });
        } else if (typeof value === "string") {
            const valueUnitExpression = /^(?:([+-])?(\d*)\.?(\d+))(px|em|rem|pt)$/gm;
            const match = valueUnitExpression.exec(value);
            if (match) {
                console.log(match);
            } else {
                this.styles.set(key, value);
            }
        } else if (isStyleWithUnit(value)) {
            this.styles.set(key, value);
        } else {
            throw new Error('Unsupported value.');
        }


        return this;
    }

}
