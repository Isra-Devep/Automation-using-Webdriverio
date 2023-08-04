import * as locators from "./orderPlacedPage.locators";
import * as commonAssertions from "../../utils/browserAssertions.utils"
import * as customerDropPurchaseConfig from "../../Test-Data/config/customerConfigs/customerDropPurchaseConfig.json"
import * as checkOutPageActions from "../../ui/checkOutPage/checkOutPage.Actions"
import {round} from 'lodash';
let subtotalExtracted,
    taxesExtracted,
    totalExtracted,
    ShippingFeeExtracted,
    subtotalCalculated,
    taxesCalculated,
    preShippingTotalCalculated


 export async function confirmCartEntryValues()
 {  
    subtotalExtracted=await checkOutPageActions.extractValue(locators.getFinalSubtotal);
    taxesExtracted= await checkOutPageActions.extractValue(locators.getFinalTaxes);
    totalExtracted=await checkOutPageActions.extractValue(locators.getFinalTotal);
    subtotalCalculated=await (customerDropPurchaseConfig.dropWithNoVariantItems.instancePurchasedInPickUpMode*customerDropPurchaseConfig.dropWithNoVariantItems.pricePerItem);
    taxesCalculated=await round((subtotalCalculated*customerDropPurchaseConfig.dropWithNoVariantItems.taxGeneral),2);
    preShippingTotalCalculated=await taxesCalculated+subtotalCalculated
    await commonAssertions.hardAssertElementMatchValue(subtotalExtracted,subtotalCalculated);
    await commonAssertions.hardAssertElementMatchValue(taxesExtracted,taxesCalculated);
    await commonAssertions.hardAssertElementMatchValue (totalExtracted,preShippingTotalCalculated);
 }
