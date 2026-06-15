import Color from "./Color";
import type { FillableMaterial, Material, LineMaterialConfig, ShapeMaterialConfig } from '../interfaces';
export declare class LineMaterial implements Material {
    default: {
        lineColor: string;
        lineWidth: number;
    };
    lineColor: Color;
    lineWidth: number;
    constructor({ lineColor, lineWidth }: LineMaterialConfig);
    draw(ctx: CanvasRenderingContext2D): void;
}
export declare class ShapeMaterial implements FillableMaterial {
    default: {
        strokeColor: string;
        strokeWidth: number;
        fillColor: string;
    };
    strokeColor: Color;
    strokeWidth: number;
    fillColor: Color | null;
    constructor({ strokeColor, strokeWidth, fillColor }?: ShapeMaterialConfig);
    get fillEnabled(): boolean;
    draw(ctx: CanvasRenderingContext2D): void;
}
