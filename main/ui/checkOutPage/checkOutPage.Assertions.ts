import * as locators from "./checkOutPage.locators";
import * as commonAssertions from "../../utils/browserAssertions.utils"
import * as checkOutPageActions from "./checkOutPage.Actions";
import * as customerDropPurchaseConfig from "../../Test-Data/config/customerConfigs/customerDropPurchaseConfig.json"
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
    subtotalExtracted=await checkOutPageActions.extractValue(locators.getSubtotal);
    taxesExtracted= await checkOutPageActions.extractValue(locators.getTaxes);
    totalExtracted=await checkOutPageActions.extractValue(locators.getTotal);
    subtotalCalculated=await (customerDropPurchaseConfig.dropWithNoVariantItems.instancePurchased*customerDropPurchaseConfig.dropWithNoVariantItems.pricePerItem);
    taxesCalculated=await round((subtotalCalculated*customerDropPurchaseConfig.dropWithNoVariantItems.taxGeneral),2);
    preShippingTotalCalculated=await taxesCalculated+subtotalCalculated
    await commonAssertions.hardAssertElementMatchValue(subtotalExtracted,subtotalCalculated);
    await commonAssertions.hardAssertElementMatchValue(taxesExtracted,taxesCalculated);
    await commonAssertions.hardAssertElementMatchValue (totalExtracted,preShippingTotalCalculated);
 }
