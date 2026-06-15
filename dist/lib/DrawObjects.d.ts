import type Scene from './Scene';
import type { Point, Material, LineMaterialConfig, ShapeMaterialConfig, Geometry, PolylineConfig, PolygonConfig, RectangleConfig, CircleConfig } from '../interfaces';
export declare class DrawObject {
    geometry: Geometry;
    material: Material;
    type: string;
    constructor(type: string, geometry: Geometry, material: Material);
    draw(scene: Scene): void;
}
export declare class LineSegment extends DrawObject {
    constructor({ a, b }: {
        a: Point;
        b: Point;
    }, materialConfig: LineMaterialConfig);
}
export declare class Polyline extends DrawObject {
    constructor({ points }: PolylineConfig, materialConfig?: ShapeMaterialConfig);
}
export declare class Polygon extends DrawObject {
    constructor({ points }: PolygonConfig, materialConfig?: ShapeMaterialConfig);
}
export declare class Rectangle extends DrawObject {
    constructor({ position, size }: RectangleConfig, materialConfig?: ShapeMaterialConfig);
}
export declare class Circle extends DrawObject {
    constructor({ center, radius }: CircleConfig, materialConfig?: ShapeMaterialConfig);
}
