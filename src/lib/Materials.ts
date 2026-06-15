import Color from "./Color"
import type {FillableMaterial, Material, LineMaterialConfig, ShapeMaterialConfig} from '../interfaces'

export class LineMaterial implements Material{

    default = {
        lineColor: '#000',
        lineWidth: 1
    }

    lineColor: Color
    lineWidth: number

    constructor({lineColor, lineWidth}: LineMaterialConfig){
        this.lineColor = new Color(lineColor ? lineColor : this.default.lineColor) 
        this.lineWidth = lineWidth ? lineWidth : this.default.lineWidth
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.lineColor.hex
    }
}

export class ShapeMaterial implements FillableMaterial{

    default = {
        strokeColor: '#000',
        strokeWidth: 1,
        fillColor: '#000'
    }

    strokeColor: Color
    strokeWidth: number
    fillColor: Color | null

    constructor({strokeColor, strokeWidth, fillColor}: ShapeMaterialConfig = {}){
        this.strokeColor = new Color(strokeColor ? strokeColor : this.default.strokeColor)
        this.strokeWidth = strokeWidth === undefined ? this.default.strokeWidth : strokeWidth
        this.fillColor = fillColor === null ? null : new Color(fillColor ? fillColor : this.default.fillColor)
    }

    get fillEnabled(){
        return this.fillColor !== null
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.strokeColor.hex
        if(this.fillColor){
            ctx.fillStyle = this.fillColor.hex
        }
    }
}
