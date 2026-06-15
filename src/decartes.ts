import Vector from './lib/Vector';
import Color from './lib/Color';
import Camera from './lib/Camera';
import Scene from './lib/Scene';
import {
    LineSegmentGeometry,
    PolylineGeometry,
    PolygonGeometry,
    RectangleGeometry,
    CircleGeometry
} from './lib/Geometries';
import {LineMaterial, ShapeMaterial} from './lib/Materials';
import {
    LineSegment,
    DrawObject,
    Polyline,
    Polygon,
    Rectangle,
    Circle
} from './lib/DrawObjects';
import type {
    pair,
    triple,
    Point,
    Material,
    FillableMaterial,
    Geometry,
    LineMaterialConfig,
    ShapeMaterialConfig,
    PolylineConfig,
    PolygonConfig,
    RectangleConfig,
    CircleConfig
} from './interfaces';

export {pair, triple, Point, Material, FillableMaterial, Geometry, LineMaterialConfig, ShapeMaterialConfig,
    PolylineConfig, PolygonConfig, RectangleConfig, CircleConfig,
    Vector,
    Color,
    Camera,
    Scene,
    LineSegmentGeometry,
    PolylineGeometry,
    PolygonGeometry,
    RectangleGeometry,
    CircleGeometry,
    LineMaterial,
    ShapeMaterial,
    DrawObject, LineSegment, Polyline, Polygon, Rectangle, Circle
}
export default {
    Vector,
    Color,
    Camera,
    Scene,
    LineSegmentGeometry,
    PolylineGeometry,
    PolygonGeometry,
    RectangleGeometry,
    CircleGeometry,
    LineMaterial,
    ShapeMaterial,
    DrawObject, LineSegment, Polyline, Polygon, Rectangle, Circle
};
