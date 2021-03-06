var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Player's Card holder
 */
var Cards = (function (_super) {
    __extends(Cards, _super);
    function Cards() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onCreated, _this);
        _this.skinName = "resource/eui_skins/custom/CardsSkin.exml";
        return _this;
    }
    Cards.prototype.onCreated = function (evt) {
        console.log("Cards created complete");
    };
    return Cards;
}(eui.Component));
__reflect(Cards.prototype, "Cards");
