import StockValue from './stock-value.entity'
import DateHandler from '@/shared/date/date-handler';
export default class Stock {

    id: string;
    name: String;
    date: Date;
    value: StockValue;

    constructor(obj: any) {
        this.id = obj.id;
        this.name = obj.name || '';
        this.date = obj.date ? DateHandler.toDate(obj.date) : new Date();
        this.value = new StockValue(obj.value || {})
    }

    get dateFormated(){
       
        return this.date ? DateHandler.toDateFormated(this.date) : '';
    }
}