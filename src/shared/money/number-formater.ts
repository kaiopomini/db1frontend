export default class NumberFormater {
    static toMoney(value: number) : string {
        let formated = `R$ ${value.toFixed(2)}`;

        return formated.replace(".", ",");
    }
    

}