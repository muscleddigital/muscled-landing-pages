import { Controller, Get, Query, Render, Req } from "@nestjs/common";

@Controller()
export class AppController {
  @Render("home")
  @Get()
  public index(@Query("name") name?: string) {
    return { name };
  }

  @Render("about")
  @Get("/about")
  public about() {
    return {};
  }

  @Render("contact")
  @Get("/contact")
  public contact() {
    return {};
  }

  @Render("seo-marketing-services")
  @Get("/seo-marketing-services")
  public seoMarketingServices() {
    return {};
  }

  @Render("seo-audit-services")
  @Get("/seo-audit-services")
  public seoAuditServices() {
    return {};
  }

  @Render("speed-optimization-services")
  @Get("/speed-optimization-services")
  public speedOptimizationServices() {
    return {};
  }

  @Render("services-for-paid-social-media-ad")
  @Get("/services-for-paid-social-media-ad")
  public servicesForPaidSocialMediaAd() {
    return {};
  }

  @Render("enterprise-social-media-advertising-services")
  @Get("/enterprise-social-media-advertising-services")
  public enterpriseSocialMediaAdvertisingServices() {
    return {};
  }

  @Render("social-media-services")
  @Get("/social-media-services")
  public socialMediaServices() {
    return {};
  }

  @Render("social-media-design")
  @Get("/social-media-design")
  public socialMediaDesign() {
    return {};
  }

  @Render("ecommerce-seo-services")
  @Get("/ecommerce-seo-services")
  public ecommerceSeoServices() {
    return {};
  }

  @Render("ecommerce-ppc-management")
  @Get("/ecommerce-ppc-management")
  public ecommercePpcManagement() {
    return {};
  }

  @Render("muscled-d2c-social-advertising-services")
  @Get("/muscled-d2c-social-advertising-services")
  public muscledD2cSocialAdvertisingServices() {
    return {};
  }

  @Render("social-media-marketing-cost")
  @Get("/social-media-marketing-cost")
  public socialMediaMarketingCost() {
    return {};
  }

  @Render("ux-analysis-services")
  @Get("/ux-analysis-services")
  public uxAnalysisServices() {
    return {};
  }

  @Render('landing-page-design-services')
  @Get('/landing-page-design-services')
  public landingPageDesignServices() {
    return {}
  }

  @Render('website-price')
  @Get('/website-price')
  public websitePrice() {
  
}

@Render('social-advertising-services')
  @Get('/social-advertising-services')
  public socialAdvertisingServices() {
    return {}
  }

@Render('digital-marketing')
 @Get('/digital-marketing')
  public digitalMarketingServices() {
    return {}
  }

 @Get('web-development-services')
  @Render('web-development-services')
  public webDevelopmentServices(@Req() req:Request):{url:string} {
    return {
      url:req?.url
  }
}

@Render('shopify-dev-services')
@Get('/shopify-dev-services')
public shopifyDevServices() {
  return {}
}

  
  @Render('cro-services')
  @Get('/cro-services')
  public croServices() {
    return {}
  }

  @Render('cms-development-services')
  @Get('/cms-development-services')
  public cmsDevelopmentServices() {
    return {}
  }
}
  
