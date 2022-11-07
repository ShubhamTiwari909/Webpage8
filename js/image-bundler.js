import {
    logoSrc, agency_image_1Src, agency_image_2Src, agency_image_3Src, agent_image_1Src, agent_image_2Src, agent_image_3Src,
    agent_profileSrc, area_iconSrc, area_icon_greySrc, article_1Src, article_2Src, article_3Src, bedroomSrc, bedroom_greySrc,
    bathroomSrc, bathroom_greySrc, flagSrc, footer_logoSrc, garageSrc, garage_greySrc, hero_bgSrc, hot_dealSrc, invalid_iconSrc,
    property_1Src, property_2Src, property_3Src, property_4Src, property_5Src, property_6Src, los_angelesSrc, san_diegoSrc,
    san_franciscoSrc, seattleSrc, testimonial_bgSrc, verified_iconSrc
} from "./dom-loader";


// Images import
import logo from '../Images/logo.png';
import agency_image_1 from '../Images/agency-image.png';
import agency_image_2 from '../Images/agency-image-2.png';
import agency_image_3 from '../Images/agency-image-3.png';
import agent_image_1 from '../Images/agent-image1.png';
import agent_image_2 from '../Images/agent-image2.png';
import agent_image_3 from '../Images/agent-image3.png';
import agent_profile from '../Images/agent-profile.png';
import area_icon from '../Images/area-icon.png';
import area_icon_grey from '../Images/area-icon-grey.png';
import article_1 from '../Images/article-1.png';
import article_2 from '../Images/article-2.png';
import article_3 from '../Images/article-3.png';
import bedroom_icon from '../Images/bedroom-icon.png';
import bedroom_icon_grey from '../Images/bedroom-icon-grey.png';
import bathroom_icon from '../Images/bathroom-icon.png';
import bathroom_icon_grey from '../Images/bathroom-icon-grey.png';
import flag from '../Images/flag.png';
import footer_logo from '../Images/footer-logo.png';
import garage_icon from '../Images/garage-icon.png';
import garage_icon_grey from '../Images/garage-icon-grey.png';
import hero_bg_image from '../Images/hero-bg-image.png';
import hot_deal from '../Images/hotDeal.png';
import invalid_name from '../Images/invalid-name.png';
import property_image_1 from '../Images/property-image1.png';
import property_image_2 from '../Images/property-image2.png';
import property_image_3 from '../Images/property-image3.png';
import property_image_4 from '../Images/property-image4.png';
import property_image_5 from '../Images/property-image5.png';
import property_image_6 from '../Images/property-image6.png';
import los_angeles from '../Images/los-angeles.png';
import san_diego from '../Images/san-diego.png';
import san_francisco from '../Images/san-francisco.png';
import seattle from '../Images/seattle.png';
import testimonial_bg from '../Images/testimonials-bg-1.png';
import verified_icon from '../Images/verified-icon.png';



// Setting the src of the Images
logoSrc.src = logo
agency_image_1Src.src = agency_image_1;
agency_image_2Src.src = agency_image_2;
agency_image_3Src.src = agency_image_3;

for (let i = 0; i < agent_image_1Src.length; i++) {
    agent_image_1Src[i].src = agent_image_1;
}
for (let i = 0; i < agent_image_2Src.length; i++) {
    agent_image_2Src[i].src = agent_image_2;
}
for (let i = 0; i < agent_image_3Src.length; i++) {
    agent_image_3Src[i].src = agent_image_3;
}
for (let i = 0; i < agent_profileSrc.length; i++) {
    agent_profileSrc[i].src = agent_profile;
}
for (let i = 0; i < area_iconSrc.length; i++) {
    area_iconSrc[i].src = area_icon;
}
for (let i = 0; i < area_icon_greySrc.length; i++) {
    area_icon_greySrc[i].src = area_icon_grey;
}

for (let i = 0; i < article_1Src.length; i++) {
    article_1Src[i].src = article_1;
}
for (let i = 0; i < article_2Src.length; i++) {
    article_2Src[i].src = article_2;
}
for (let i = 0; i < article_3Src.length; i++) {
    article_3Src[i].src = article_3;
}

for (let i = 0; i < bedroomSrc.length; i++) {
    bedroomSrc[i].src = bedroom_icon;
}
for (let i = 0; i < bedroom_greySrc.length; i++) {
    bedroom_greySrc[i].src = bedroom_icon_grey;
}
for (let i = 0; i < bathroomSrc.length; i++) {
    bathroomSrc[i].src = bathroom_icon;
}
for (let i = 0; i < bathroom_greySrc.length; i++) {
    bathroom_greySrc[i].src = bathroom_icon_grey;
}
for (let i = 0; i < garageSrc.length; i++) {
    garageSrc[i].src = garage_icon;
}
for (let i = 0; i < garage_greySrc.length; i++) {
    garage_greySrc[i].src = garage_icon_grey;
}

for (let i = 0; i < flagSrc.length; i++) {
    flagSrc[i].src = flag;
}
for (let i = 0; i < footer_logoSrc.length; i++) {
    footer_logoSrc[i].src = footer_logo;
}
for (let i = 0; i < hero_bgSrc.length; i++) {
    hero_bgSrc[i].style.backgroundImage = `url('${hero_bg_image}')`;
}
for (let i = 0; i < hot_dealSrc.length; i++) {
    hot_dealSrc[i].src = hot_deal;
}
for (let i = 0; i < invalid_iconSrc.length; i++) {
    invalid_iconSrc[i].src = invalid_name;
}
for (let i = 0; i < property_1Src.length; i++) {
    property_1Src[i].style.backgroundImage = `url('${property_image_1}')`
}
for (let i = 0; i < property_2Src.length; i++) {
    property_2Src[i].style.backgroundImage = `url('${property_image_2}')`
}
for (let i = 0; i < property_3Src.length; i++) {
    property_3Src[i].style.backgroundImage = `url('${property_image_3}')`
}
for (let i = 0; i < property_4Src.length; i++) {
    property_4Src[i].style.backgroundImage = `url('${property_image_4}')`
}
for (let i = 0; i < property_5Src.length; i++) {
    property_5Src[i].style.backgroundImage = `url('${property_image_5}')`
}
for (let i = 0; i < property_6Src.length; i++) {
    property_6Src[i].style.backgroundImage = `url('${property_image_6}')`
}
for (let i = 0; i < los_angelesSrc.length; i++) {
    los_angelesSrc[i].style.backgroundImage = `url('${los_angeles}')`;
}
for (let i = 0; i < san_diegoSrc.length; i++) {
    san_diegoSrc[i].style.backgroundImage = `url('${san_diego}')`;
}
for (let i = 0; i < san_franciscoSrc.length; i++) {
    san_franciscoSrc[i].style.backgroundImage = `url('${san_francisco}')`;
}
for (let i = 0; i < seattleSrc.length; i++) {
    seattleSrc[i].style.backgroundImage = `url('${seattle}')`;
}
for (let i = 0; i < testimonial_bgSrc.length; i++) {
    testimonial_bgSrc[i].style.backgroundImage = `url('${testimonial_bg}')`;
}
for (let i = 0; i < verified_iconSrc.length; i++) {
    verified_iconSrc[i].src = verified_icon;
}