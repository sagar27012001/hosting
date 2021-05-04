export class Point{
	constructor(private _x?: number, private _y?: number) {
		this._x = _x;
		this._y = _y;
	}
	draw() {
		console.log("X : " + this._x + "Y : " + this._y);
	}
}
export default Point;