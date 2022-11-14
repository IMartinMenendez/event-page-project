class Event {

    constructor(date, name, description, image, price, attend ){
        this._date = date;
        this._name = name;
        this._description = description;
        this._image = image;
        this._price = price;
        this._attend = attend;
    }

    set date(date){
        this._date = date;
    }

    get date(){
        return this._date;
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set description(description){
        this._description = description;
    }

    get description(){
        return this._description;
    }

    set image(image){
        this._image = image;
    }

    get image(){
        return this._image;
    }

    set price(price){
        this._price = price;
    }

    get price(){
        return this._price;
    }

    set attend(attend){
        this._attend = attend;
    }

    get attend(){
        return this._attend;
    }

}
