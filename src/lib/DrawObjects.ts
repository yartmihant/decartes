
import {
    LineSegmentGeometry,
    PolylineGeometry,
    PolygonGeometry,
    RectangleGeometry,
    CircleGeometry
} from './Geometries'
import {LineMaterial, ShapeMaterial} from './Materials'
import type Scene from './Scene'
import type {
    Point,
    Material,
    LineMaterialConfig,
    ShapeMaterialConfig,
    Geometry,
    PolylineConfig,
    PolygonConfig,
    RectangleConfig,
    CircleConfig
} from '../interfaces'
import Vector from "./Vector"


export class DrawObject {

    geometry: Geometry
    material: Material

    type: string

    constructor(type: string, geometry: Geometry, material: Material) {
        this.type = type
        this.geometry = geometry
        this.material = material
    }

    draw(scene: Scene){
        if(scene.ctx){
            const camera = scene.camera
            this.material.draw(scene.ctx)
            this.geometry.set_view_points(camera)
            this.geometry.draw(scene.ctx, this.material)
        }
    }
}

export class LineSegment extends DrawObject{
    constructor({a,b}: { a: Point; b: Point; }, materialConfig: LineMaterialConfig) {

        super(
            'line',
            new LineSegmentGeometry({
                a: new Vector(a),
                b: new Vector(b)
            }), 
            new LineMaterial(materialConfig)
        );
    }

}

export class Polyline extends DrawObject{
    constructor({points}: PolylineConfig, materialConfig: ShapeMaterialConfig = {}) {

        super(
            'polyline',
            new PolylineGeometry({points}),
            new ShapeMaterial(materialConfig)
        );
    }
}

export class Polygon extends DrawObject{
    constructor({points}: PolygonConfig, materialConfig: ShapeMaterialConfig = {}) {

        super(
            'polygon',
            new PolygonGeometry({points}),
            new ShapeMaterial(materialConfig)
        );
    }
}

export class Rectangle extends DrawObject{
    constructor({position, size}: RectangleConfig, materialConfig: ShapeMaterialConfig = {}) {

        super(
            'rectangle',
            new RectangleGeometry({position, size}),
            new ShapeMaterial(materialConfig)
        );
    }
}

export class Circle extends DrawObject{
    constructor({center, radius}: CircleConfig, materialConfig: ShapeMaterialConfig = {}) {

        super(
            'circle',
            new CircleGeometry({center, radius}),
            new ShapeMaterial(materialConfig)
        );
    }
}
