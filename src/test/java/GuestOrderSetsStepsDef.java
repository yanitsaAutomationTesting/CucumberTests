import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Random;


public class GuestOrderSetsStepsDef {

        private WebDriver driver;
        @Before
        public void setup() {
            System.setProperty("webdriver.chrome.driver", "E:\\drivers\\chromedriver.exe");
            this.driver = new ChromeDriver();
            driver.manage().window().maximize();
        }
        @After
        public void tearDown() {

            this.driver.quit();
    }


        @Given("^the user has navigate to iphone product page$")
           public void navigateToiphonePage ()  {
            driver.get("http://shop.pragmatic.bg/index.php?route=product/product&product_id=40");
        };

        @And("^the user adds the product to the cart$")
           public void addToCart()  {
            WebElement addToCartButton = driver.findElement(By.id("button-cart"));
            addToCartButton.click();
        }
        @And("^the user navigates to Checkout$")
        public void goToCheckout()  {
            WebDriverWait wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("ul.pull-right div a:nth-of-type(2)")));

            WebElement miniCartCheckoutLink = driver.findElement(By.cssSelector("ul.pull-right div a:nth-of-type(2)"));
            miniCartCheckoutLink.click();

        }
        @And("^the user clicks on the Guest Checkout radiobutton$")
            public void clickOnGuestRadioButton()  {
            WebDriverWait wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div.radio:nth-of-type(2) input")));
            WebElement guestRadioButton = driver.findElement(By.cssSelector("div.radio:nth-of-type(2) input"));
            guestRadioButton.click();
        }
        @And("^the user clicks on Continue button$")
    public void clickOnContinueButton()  {
            WebElement continueButton = driver.findElement(By.id("button-account"));
            continueButton.click();
        }
        @And("^the user enters first name \"([^\"]*)\" last name \"([^\"]*)\" telephone \"([^\"]*)\" address \"([^\"]*)\" city \"([^\"]*)\" postcode \"([^\"]*)\" country \"([^\"]*)\" region \"([^\"]*)\"$")
        public void enterStep2details(String firstName, String lastName, String telephone, String address, String city, String postcode, String country, String region)  {
            WebDriverWait wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("button-guest")));
            //enter first name
            driver.findElement(By.id("input-payment-firstname")).sendKeys(firstName);
            //enter last name
            driver.findElement(By.id("input-payment-lastname")).sendKeys(lastName);
            //enter telephone
            driver.findElement(By.id("input-payment-telephone")).sendKeys(telephone);
            //enter address
            driver.findElement(By.id("input-payment-address-1")).sendKeys(address);
            //enter city
            driver.findElement(By.id("input-payment-city")).sendKeys(city);
            //postcode
            driver.findElement(By.id("input-payment-postcode")).sendKeys(postcode);
            //country
            Select countryDropDown = new Select(driver.findElement(By.id("input-payment-country")));
            countryDropDown.selectByVisibleText(country);
            //region
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("input-payment-zone"), region));

            Select regionDropDown = new Select(driver.findElement(By.id("input-payment-zone")));
            regionDropDown.selectByVisibleText(region);


        }
        @And("^the user enters random email$")
        public void enterRandomEmail()  {
            String randomEmail = RandomStringUtils.randomAlphanumeric(7) + "@blabla.com";
            driver.findElement(By.id("input-payment-email")).sendKeys(randomEmail);


        }
    }

