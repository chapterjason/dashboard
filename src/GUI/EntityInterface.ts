import { PositionAwareInterface } from "./Position/PositionAwareInterface";
import { PlaneInterface } from "./Plane/PlaneInterface";
import { PositionInterface } from "./Position/PositionInterface";

export interface EntityInterface extends PositionAwareInterface, PlaneInterface {

    getOrigin(): PositionInterface;

    setOrigin(origin: PositionInterface): this;

    intersect(entity: EntityInterface): boolean;

}
