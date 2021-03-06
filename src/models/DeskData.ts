class DeskData extends egret.EventDispatcher{
	public id;
	public max;
	public players;
	public status;
	public curTurn;
	public curNum;
	public constructor() {
		super();
	}

	public fromData(data){
		this.id = data.id;
		this.max = data.max;
		this.curTurn = data.turn;
		this.curNum = data.num;
	}

	public join(player:PlayerData){

	}

	public leave(player:PlayerData){

	}

	public reset(){

	}

	public static pool:DeskData[] = [];
	public static recycle(data:DeskData){
		if( DeskData.pool.indexOf(data) == -1){
			DeskData.pool.push(data);
		}
	}

	public static gain():DeskData{
		if( DeskData.pool.length != 0){
			return DeskData.pool.pop();
		}
		return new DeskData();
	}
}