import * as locators from "./checkOutPage.locators";
import * as commonAssertions from "../../utils/browserAssertions.utils"
import * as checkOutPageActions from "./checkOutPage.Actions";
import * as customerDropPurchaseConfig from "../../testData/config/customerConfigs/customerDropPurchaseConfig.json"
import {round} from 'lodash';
let subtotalExtracted,
    taxesExtracted,
    totalExtracted,
    shippingFeeExtracted,
    subtotalCalculated,
    taxesCalculated,
    preShippingTotalCalculated


 export async function confirmCartEntryValues()
 {  
    subtotalExtracted=await checkOutPageActions.extractValue(locators.getSubtotal);
    taxesExtracted= await checkOutPageActions.extractValue(locators.getTaxes);
    totalExtracted=await checkOutPageActions.extractValue(locators.getTotal);
    subtotalCalculated=await (customerDropPurchaseConfig.dropWithNoVariantItems.instancePurchasedInPickUpMode*customerDropPurchaseConfig.dropWithNoVariantItems.pricePerItem);
    taxesCalculated=await round((subtotalCalculated*customerDropPurchaseConfig.dropWithNoVariantItems.taxGeneral),2);
    preShippingTotalCalculated=await taxesCalculated+subtotalCalculated
    await commonAssertions.hardAssertElementMatchValue(subtotalExtracted,subtotalCalculated);
    await commonAssertions.hardAssertElementMatchValue(taxesExtracted,taxesCalculated);
    await commonAssertions.hardAssertElementMatchValue (totalExtracted,preShippingTotalCalculated);
 }

 export async function confirmCartEntryNewValues(shippingFeeKnown)
 {  await browser.pause(10000);
    subtotalExtracted=await checkOutPageActions.extractValue(locators.getSubtotal);
    taxesExtracted= await checkOutPageActions.extractValue(locators.getTaxes);
    totalExtracted=await checkOutPageActions.extractValue(locators.getTotal);
    shippingFeeExtracted=await checkOutPageActions.extractValue(locators.getShippingFee);
    subtotalCalculated=await (customerDropPurchaseConfig.dropWithNoVariantItems.instancePurchasedInPickUpMode*customerDropPurchaseConfig.dropWithNoVariantItems.pricePerItem);
    taxesCalculated=await round((subtotalCalculated*customerDropPurchaseConfig.dropWithNoVariantItems.taxForZipCode90021),2);
    preShippingTotalCalculated=await (taxesCalculated+subtotalCalculated);
    await commonAssertions.hardAssertElementMatchValue(subtotalExtracted,subtotalCalculated);
    await commonAssertions.hardAssertElementMatchValue(taxesExtracted,taxesCalculated);
    await commonAssertions.hardAssertElementMatchValue (shippingFeeExtracted,shippingFeeKnown);
    await commonAssertions.hardAssertElementMatchValue (totalExtracted,(preShippingTotalCalculated+shippingFeeExtracted));
 }