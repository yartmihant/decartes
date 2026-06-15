import type Vector from './lib/Vector'
import type Color from './lib/Color'
import Camera from './lib/Camera'

export type pair = [number, number]
export type triple = [number, number, number]
export type Point = pair | Vector

export type PolylineConfig = {
    points: Point[];
}

export type PolygonConfig = {
    points: Point[];
}

export type RectangleConfig = {
    position: Point;
    size: Point;
}

export type CircleConfig = {
    center: Point;
    radius: number;
}

export interface Material{
    draw(ctx: CanvasRenderingContext2D):void
}

export interface FillableMaterial extends Material{
    fillColor: Color | null
    fillEnabled: boolean
}

export interface Geometry{
    points: { [s: string]: Vector | Vector[]; }
    view_points: { [s: string]: Vector | Vector[]; }
    set_view_points(camera: Camera): void
    draw (ctx: CanvasRenderingContext2D, material?: Material): void
}


export type LineMaterialConfig = {
    lineColor?: Color | string;
    lineWidth?: number;
}

export type ShapeMaterialConfig = {
    strokeColor?: Color | string;
    strokeWidth?: number;
    fillColor?: Color | string | null;
}
