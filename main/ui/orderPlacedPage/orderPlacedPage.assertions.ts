import * as locators from "./orderPlacedPage.locators";
import * as commonAssertions from "wdioUtils/browserAssertions.utils";
import * as customerDropPurchaseConfig from "wdioTestData/config/customerConfigs/customerDropPurchaseConfig.json";
import * as checkOutPageActions from "wdioUi/checkOutPage/checkOutPage.actions";
import * as dropPurchasingCredentials from "wdioTestData/config/customerConfigs/customerDropPurchaseConfig.json";
import {round} from 'lodash';
let subtotalExtracted,
    taxesExtracted,
    totalExtracted,
    shippingFeeExtracted,
    subtotalCalculated,
    taxesCalculated,
    preShippingTotalCalculated


 export async function confirmCartEntryValuesForPickupOrder()
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

 export async function confirmCartEntryValuesForShippingOrder()
 {  let shippingFee=dropPurchasingCredentials.dropWithNoVariantItems.shippingFee;
    subtotalExtracted=await checkOutPageActions.extractValue(locators.getFinalSubtotal);
    taxesExtracted= await checkOutPageActions.extractValue(locators.getFinalTaxes);
    shippingFeeExtracted= await checkOutPageActions.extractValue(locators.getFinalShippingFee); 
    totalExtracted=await checkOutPageActions.extractValue(locators.getFinalTotal);
    subtotalCalculated=await (customerDropPurchaseConfig.dropWithNoVariantItems.instancePurchasedInShippingModeWithShippingFee*customerDropPurchaseConfig.dropWithNoVariantItems.pricePerItem);
    taxesCalculated=await round((subtotalCalculated*customerDropPurchaseConfig.dropWithNoVariantItems.taxForZipCode90021),2);
    preShippingTotalCalculated=await taxesCalculated+subtotalCalculated
    await commonAssertions.hardAssertElementMatchValue(subtotalExtracted,subtotalCalculated);
    await commonAssertions.hardAssertElementMatchValue(taxesExtracted,taxesCalculated);
    await commonAssertions.hardAssertElementMatchValue(shippingFeeExtracted,shippingFee);
    await commonAssertions.hardAssertElementMatchValue (totalExtracted,(preShippingTotalCalculated+shippingFeeExtracted));

 }