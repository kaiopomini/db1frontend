import NumberFormater from '@/shared/money/number-formater';
export default class StockValue {
    start: number;
    end: number;

    constructor(obj: any) {
        this.start = obj.start || 0;
        this.end = obj.end || 0;
    }
    get startFormated(){
        return this.start ? NumberFormater.toMoney(this.start) : '';
    }
    get endFormated(){
        return this.end ? NumberFormater.toMoney(this.end) : '';
    }
}