const{Builder,By,Key,util}=require("selenium-webdriver");
async function Health() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/Homepage");
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
  }
  
  Health();