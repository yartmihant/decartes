import Vector from "./Vector";
import type Camera from './Camera';
import type { Geometry, Point, Material, PolylineConfig, PolygonConfig, RectangleConfig, CircleConfig } from '../interfaces';
export declare class LineSegmentGeometry implements Geometry {
    points: {
        a: Vector;
        b: Vector;
    };
    view_points: {
        a: Vector;
        b: Vector;
    };
    constructor(points: {
        a: Point;
        b: Point;
    });
    draw(ctx: CanvasRenderingContext2D): void;
    set_view_points(camera: Camera): void;
}
export declare class PolylineGeometry implements Geometry {
    points: {
        points: Vector[];
    };
    view_points: {
        points: Vector[];
    };
    constructor({ points }: PolylineConfig);
    draw(ctx: CanvasRenderingContext2D): void;
    set_view_points(camera: Camera): void;
}
export declare class PolygonGeometry implements Geometry {
    points: {
        points: Vector[];
    };
    view_points: {
        points: Vector[];
    };
    constructor({ points }: PolygonConfig);
    draw(ctx: CanvasRenderingContext2D, material?: Material): void;
    set_view_points(camera: Camera): void;
}
export declare class RectangleGeometry implements Geometry {
    points: {
        position: Vector;
        size: Vector;
    };
    view_points: {
        position: Vector;
        size: Vector;
    };
    constructor({ position, size }: RectangleConfig);
    draw(ctx: CanvasRenderingContext2D, material?: Material): void;
    set_view_points(camera: Camera): void;
}
export declare class CircleGeometry implements Geometry {
    points: {
        center: Vector;
    };
    view_points: {
        center: Vector;
    };
    radius: number;
    view_radius: number;
    constructor({ center, radius }: CircleConfig);
    draw(ctx: CanvasRenderingContext2D, material?: Material): void;
    set_view_points(camera: Camera): void;
}
