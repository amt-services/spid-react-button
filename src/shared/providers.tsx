import ArubaSVGUrl from '/./svgs/idp-logos/spid-idp-arubaid.svg';
import InfocertSVGUrl from '/./svgs/idp-logos/spid-idp-infocertid.svg';
import PosteSVGUrl from '/./svgs/idp-logos/spid-idp-posteid.svg';
import SielteSVGUrl from '/./svgs/idp-logos/spid-idp-sielteid.svg';
import TimSVGUrl from '/./svgs/idp-logos/spid-idp-timid.svg';
import NamirialSVGUrl from '/./svgs/idp-logos/spid-idp-namirialid.svg';
import RegisterItSVGUrl from '/./svgs/idp-logos/spid-idp-spiditalia.svg';
import LepidaSVGUrl from '/./svgs/idp-logos/spid-idp-lepidaid.svg';
import TeamSystemSVGUrl from '/./svgs/idp-logos/spid-idp-teamsystemid.svg';
import EtnaSVGUrl from '/./svgs/idp-logos/spid-idp-etnaid.svg';
import InfoCamereSVGUrl from '/./svgs/idp-logos/spid-idp-infocamereid.svg';
import IntesigroupSVGUrl from '/./svgs/idp-logos/spid-idp-intesigroupspid.svg';

import providersList from './providers_meta.json';

import type { RegisteredProviderRecord } from './types';

/**
 * This array of images has been carefully ordered alphabetically
 * to do the matching with the metadata from json, until
 * https://github.com/italia/spid-sp-access-button/issues/7 gets resolved
 */
const images = [
  ArubaSVGUrl,
  EtnaSVGUrl,
  InfoCamereSVGUrl,
  InfocertSVGUrl,
  IntesigroupSVGUrl,
  LepidaSVGUrl,
  NamirialSVGUrl,
  PosteSVGUrl,
  SielteSVGUrl,
  RegisterItSVGUrl, // SPIDItalia Register.it
  TeamSystemSVGUrl,
  TimSVGUrl
];
export const providers: Readonly<RegisteredProviderRecord>[] = Object.entries(
  providersList
)
  .sort(([idA], [idB]) => idA.localeCompare(idB))
  .map(([entityName, entityID], i) => ({
    protocols: ['SAML'],
    entityName,
    entityID,
    active: true,
    logo: images[i]
  }));
