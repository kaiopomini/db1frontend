import axios from 'axios';
import Stock from './stock.entity'

export default class StockService {

    public static getAll(): Promise<Stock[]> {
        return axios
        .get('/stocks')
        .then(response => 
            response.data
            .map((stock: any) => new Stock(stock)));
    }
    public static postPost(stock: Stock): Promise<Stock> {
        return axios
        .post('/stocks', {
            name: stock.name,
            date: stock.date,
            value: {
                start: stock.value.start,
                end: stock.value.end
            }
           
        }) 
        .then(response => 
            response.data);
    }
}