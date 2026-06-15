import Vector from "./Vector";
import type Camera from './Camera'
import type {
    Geometry,
    Point,
    Material,
    FillableMaterial,
    PolylineConfig,
    PolygonConfig,
    RectangleConfig,
    CircleConfig
} from '../interfaces'


function hasFill(material?: Material): material is FillableMaterial {
    return Boolean(material && 'fillEnabled' in material && (material as FillableMaterial).fillEnabled)
}

function fillAndStroke(ctx: CanvasRenderingContext2D, material?: Material) {
    if(hasFill(material)){
        ctx.fill()
    }
    ctx.stroke()
}


export class LineSegmentGeometry implements Geometry {

    points: { a: Vector , b: Vector}

    view_points: { a: Vector , b: Vector}
    
    constructor(points: {a: Point, b: Point}) {

        this.points = {
            a: new Vector(points.a),
            b: new Vector(points.b)
        }

        this.view_points = {
            a: new Vector(),
            b: new Vector()
        }
    }

    draw(ctx: CanvasRenderingContext2D){
        const {a,b} = this.view_points
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
    }

    set_view_points(camera: Camera){

        this.view_points.a = camera.pointer(this.points.a)
        this.view_points.b = camera.pointer(this.points.b)

    }
}

export class PolylineGeometry implements Geometry {

    points: { points: Vector[] }

    view_points: { points: Vector[] }

    constructor({points}: PolylineConfig) {

        this.points = {
            points: points.map(point => new Vector(point))
        }

        this.view_points = {
            points: []
        }
    }

    draw(ctx: CanvasRenderingContext2D){
        const points = this.view_points.points
        if(points.length === 0){
            return
        }

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.slice(1).forEach(point => ctx.lineTo(point.x, point.y));
        ctx.stroke();
    }

    set_view_points(camera: Camera){
        this.view_points.points = this.points.points.map(point => camera.pointer(point))
    }
}

export class PolygonGeometry implements Geometry {

    points: { points: Vector[] }

    view_points: { points: Vector[] }

    constructor({points}: PolygonConfig) {

        this.points = {
            points: points.map(point => new Vector(point))
        }

        this.view_points = {
            points: []
        }
    }

    draw(ctx: CanvasRenderingContext2D, material?: Material){
        const points = this.view_points.points
        if(points.length === 0){
            return
        }

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.slice(1).forEach(point => ctx.lineTo(point.x, point.y));
        ctx.closePath();
        fillAndStroke(ctx, material);
    }

    set_view_points(camera: Camera){
        this.view_points.points = this.points.points.map(point => camera.pointer(point))
    }
}

export class RectangleGeometry implements Geometry {

    points: { position: Vector, size: Vector}

    view_points: { position: Vector, size: Vector}

    constructor({position, size}: RectangleConfig) {

        this.points = {
            position: new Vector(position),
            size: new Vector(size)
        }

        this.view_points = {
            position: new Vector(),
            size: new Vector()
        }
    }

    draw(ctx: CanvasRenderingContext2D, material?: Material){
        const {position, size} = this.view_points
        ctx.beginPath();
        ctx.rect(position.x, position.y, size.x, size.y);
        fillAndStroke(ctx, material);
    }

    set_view_points(camera: Camera){

        this.view_points.position = camera.pointer(this.points.position)
        this.view_points.size = camera.pointer(this.points.position.plus(this.points.size)).sub(this.view_points.position)

    }
}

export class CircleGeometry implements Geometry {

    points: { center: Vector }

    view_points: { center: Vector }

    radius: number

    view_radius: number

    constructor({center, radius}: CircleConfig) {

        this.points = {
            center: new Vector(center)
        }

        this.view_points = {
            center: new Vector()
        }

        this.radius = radius
        this.view_radius = 0
    }

    draw(ctx: CanvasRenderingContext2D, material?: Material){
        const {center} = this.view_points
        ctx.beginPath();
        ctx.arc(center.x, center.y, Math.abs(this.view_radius), 0, Math.PI*2);
        fillAndStroke(ctx, material);
    }

    set_view_points(camera: Camera){

        this.view_points.center = camera.pointer(this.points.center)
        this.view_radius = this.radius*camera.drawScale

    }
}
