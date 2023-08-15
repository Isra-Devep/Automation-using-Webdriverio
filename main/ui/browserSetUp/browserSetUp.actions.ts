import * as envVariables from "../../testData/config/commonConfig/commonConfigs.json";



export async function setUpBrowser(environment)
{
    if(environment=='staging')
    {
        await browser.url(envVariables.stagingData.urlStaff);
    }
    else if (environment=='release')
    {
        await browser.url(envVariables.releaseData.urlStaff); 
    }
}