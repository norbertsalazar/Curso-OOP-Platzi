function Car(license, driver) {
    this.id;
    this.license;
    this.driver;
    this.passenger;

}

Car.prototype.printDataCar = function() {
    console.log(this.driver)
    console.log(this.driver.name)
    console.log(this.driver.document)
    
}