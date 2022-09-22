import * as locators from "../storePage/storePage.locators"
import * as commonActions from "utils/browserActions.utils"

export async function openStoreMenu()
{
    await commonActions.click(locators.orderPickup)
}
