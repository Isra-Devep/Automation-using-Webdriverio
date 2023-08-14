



export async function setUpBrowser(environment)
{
    if(environment=='staging')
    {
        await browser.url("https://staging.via.market/staff/login");
    }
    else if (environment=='release')
    {
        await browser.url("https://release.via.market/staff/login"); 
    }
}