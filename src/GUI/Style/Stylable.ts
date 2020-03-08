import { StyleInterface } from "./StyleInterface";
import { StyleValue } from "./StyleValue";
import { StyleUnit } from "./StyleUnit";
import { isStyleWithUnit } from "./IsStyleWithUnit";
import { GetUnit } from "./GetUnit";

export class Stylable<Keys = keyof CSSStyleDeclaration> implements StyleInterface<Keys> {

    protected styles: Map<string | Keys, StyleValue> = new Map<string, StyleValue>();

    public get(key: string | Keys): StyleValue {
        if (!this.styles.has(key)) {
            throw new Error("Missing style ...");
        }

        return this.styles.get(key) as StyleValue;
    }

    public has(key: string | Keys): boolean {
        return this.styles.has(key);
    }

    public set(key: string | Keys, value: StyleValue): this {
        if (typeof value === "number") {
            this.styles.set(key, {
                value,
                unit: StyleUnit.PIXEL,
            });
        } else if (typeof value === "string") {
            const valueUnitExpression = /^(?:([+-])?(\d*\.)?(\d+))(px|em|rem|pt|%)?$/gm;
            const match = valueUnitExpression.exec(value);
            if (match) {
                const [prefix = "+", first, second, unit = "px"] = match.slice(1);
                const value = first ? parseFloat(prefix + first + second) : parseInt(prefix + second, 10);
                this.styles.set(key, { value, unit: GetUnit(unit) });
            } else {
                this.styles.set(key, value);
            }
        } else if (isStyleWithUnit(value)) {
            this.styles.set(key, value);
        } else {
            throw new Error("Unsupported value.");
        }

        return this;
    }

    public delete(key: string | Keys): this {
        this.styles.delete(key);

        return this;
    }

}
