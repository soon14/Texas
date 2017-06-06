var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onCreated, _this);
        _this.skinName = "resource/eui_skins/custom/PlayerSkin.exml";
        return _this;
    }
    Player.prototype.setPlayerData = function (playerData) {
        this["lab_name"].text = playerData.name;
        this["lab_balance"].text = playerData.balance;
    };
    Player.prototype.onCreated = function (evt) {
        console.log("on created complete");
    };
    return Player;
}(eui.Component));
__reflect(Player.prototype, "Player");