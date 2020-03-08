import {StyleWithUnit} from "./StyleWithUnit";

export function isStyleWithUnit(style: unknown): style is StyleWithUnit {
    if (typeof style === "object") {
        return typeof (style as StyleWithUnit).value === "number" && typeof (style as StyleWithUnit).unit === "string";
    }

    return false;
}
