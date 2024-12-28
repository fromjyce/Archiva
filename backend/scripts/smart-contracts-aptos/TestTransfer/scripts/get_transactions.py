from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Set up the Selenium WebDriver (Chrome)
driver = webdriver.Chrome(ChromeDriverManager().install())

# Define the URL to load
url = "https://explorer.aptoslabs.com/account/0x430968a8bda6b01272650faa4058f983e5c5f351895b06783e42bedec502b462/modules/code/TestTransfer?network=devnet"

# Open the page in the browser
driver.get(url)

# Wait until the page is fully loaded (you can adjust the time or use dynamic waiting)
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "root"))
)

# Wait a few more seconds to ensure that all the JavaScript is rendered
time.sleep(5)

try:
    # Extract transaction details
    transactions = driver.find_elements(By.XPATH, "//div[@class='transaction-class']")  # Adjust based on actual HTML
    transaction_details = [tx.text for tx in transactions]

    # Extract module code (if available, adjust the selector accordingly)
    module_code_element = driver.find_element(By.XPATH, "//pre[@class='module-code-class']")  # Adjust this selector
    module_code = module_code_element.text

    # Print the extracted data
    print("Transactions: ", transaction_details)
    print("Module Code: ", module_code)

except Exception as e:
    print(f"Error while extracting details: {e}")
finally:
    # Close the driver
    driver.quit()
