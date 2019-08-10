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
}