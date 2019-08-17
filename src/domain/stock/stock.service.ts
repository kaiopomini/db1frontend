import axios from 'axios';
import Stock from './stock.entity'

var http = axios.create({
    baseURL: process.env.APP_VUE_BASE_URL,
});


export default class StockService {

    public static getAll(): Promise<Stock[]> {
        return http
        .get('/stocks')
        .then(response => 
            response.data
            .map((stock: any) => new Stock(stock)));
    }
    public static save(stock: Stock): Promise<any> {
        return http
        .post('/stocks', {
            name: stock.name,
            date: stock.date,
            value: {
                start: stock.value.start,
                end: stock.value.end
            }
           
        }) 
    }
    public static getOne(id: string): Promise<Stock>{
        return http
        .get(`/stocks/${id}`)
        .then(response => new Stock(response.data))
    }
    public static update(id: string, stock: Stock): Promise<any> {
        return http
                .put(`/stocks/${id}`, stock);
    }
}