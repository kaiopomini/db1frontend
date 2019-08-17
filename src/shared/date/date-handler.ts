export default class DateHandler {
    static toDate(value: string) : Date {
        let values = value.split('-',4);
        let year = parseInt(values[0]);
        let month = parseInt(values[1]) -1;
        let day = parseInt(values[2]);
        return new Date(Date.UTC(year, month, day, 3, 0, 0, 0));
    }
    
    static toDateFormated(date: Date): string{
        
        let day = this.addZeroIfNecessary(date.getDate());
        let month = this.addZeroIfNecessary(date.getMonth() + 1);
        let year = date.getFullYear();
        return `${day}/${month}/${year}`
    }   
    
    private static addZeroIfNecessary(value: number): string{
        
        return value < 10 ? `0${value}` : value.toString();
    }

    static toDateEn(date: string){
        if (date && date.length == 10){
            const dateSplited = date.split('/');
            return `${dateSplited[2]}-${dateSplited[1]}-${dateSplited[0]}`;
        }
        return '';
    }


}